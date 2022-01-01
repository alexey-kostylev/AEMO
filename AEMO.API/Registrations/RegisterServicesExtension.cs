using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AEMO.API.Data;
using AEMO.API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace AEMO.API.Registrations
{
    public static class RegisterServicesExtension
    {
        public static IServiceCollection RegisterAEMOServices(this IServiceCollection services)
        {
            // Custom services registration
            return services
                .AddScoped<IEnergyService, EnergyService>()
                ;
        }

        public static IServiceCollection RegisterExternalServices(this IServiceCollection services)
        {
            return services.AddAutoMapper(typeof(Startup));
        }

        public static IServiceCollection RegisterDataContext(this IServiceCollection services)
        {
            // DB registration
            return services
                .AddDbContext<DataContext>(options => options.UseInMemoryDatabase(databaseName: "test-db"))
                ;
        }
    }
}
