using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AEMO.API.Registrations;
using Microsoft.Extensions.DependencyInjection;

namespace AEMO.UnitTests
{
    public class CustomTestFixture : IDisposable
    {
        public readonly IServiceProvider ServiceProvider;

        public CustomTestFixture()
        {
            ServiceProvider = CreateServiceProvider();
        }

        private static IServiceProvider CreateServiceProvider()
        {
            var services = new ServiceCollection();

            services
                .RegisterAEMOServices()
                .RegisterExternalServices()
                .RegisterDataContext()
            ;

            return services.BuildServiceProvider();
        }

        public void Dispose()
        {

        }
    }
}
