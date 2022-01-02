using System;
using System.Linq;
using System.Threading.Tasks;
using AEMO.API.Data;
using AEMO.API.Services;
using AEMO.API.SharedModels;
using AutoFixture;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Xunit;

namespace AEMO.UnitTests
{
    public class EnergyServiceTests : IClassFixture<CustomTestFixture>
    {
        private IServiceProvider serviceProvider;


        private readonly Fixture _fixture = new Fixture();

        public EnergyServiceTests(CustomTestFixture fixture)
        {
            serviceProvider = fixture.ServiceProvider;
        }

        [Theory]
        [InlineData("2021-12-31 05:00", EnergyType.Electricity, 10, 10 , 0)] //Fri - no discount
        [InlineData("2022-01-01", EnergyType.Gas, 10, 9, 0.1)] //sat
        [InlineData("2022-01-01 05:00", EnergyType.Gas, 10, 9, 0.1)] //sat
        [InlineData("2022-01-01 23:00", EnergyType.Gas, 10, 9, 0.1)] //sat
        [InlineData("2022-01-02 05:00", EnergyType.Gas, 10, 9, 0.1)] //sun
        public async Task ShouldCreateRecord(string sDate, EnergyType energyType, decimal price, decimal expectedPrice, decimal expectedDiscount)
        {
            using var scope = serviceProvider.CreateScope();
            var service = scope.ServiceProvider.GetRequiredService<IEnergyService>();

            //
            var createdModel = await service.CreateTransaction(new API.Models.CreateEnergyModel
            {
                Date = DateTimeOffset.Parse(sDate),
                EnergyType = energyType,
                Price = price
            });

            createdModel.Should().NotBeNull();
            createdModel.Id.Should().BePositive();
            createdModel.EnergyType.Should().Be(energyType);
            createdModel.Price.Should().Be(expectedPrice);
            createdModel.Discount.Should().Be(expectedDiscount);

            var ctx = scope.ServiceProvider.GetRequiredService<DataContext>();
            var found = await ctx.Energy.Where(x => x.Id == createdModel.Id).ToListAsync();
            found.Should().HaveCount(1);
        }

        [Fact]
        public async Task SholdGetRecords()
        {
            using var scope = serviceProvider.CreateScope();

            var ctx = scope.ServiceProvider.GetRequiredService<DataContext>();
            ctx.Energy.AddRange(_fixture.CreateMany<Energy>(3).ToList());

            var service = scope.ServiceProvider.GetRequiredService<IEnergyService>();

            var records = await service.GetTransactions();

            records.Should().NotBeEmpty();
        }
    }
}
