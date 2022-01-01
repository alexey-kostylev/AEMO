using AEMO.API.Models;
using AEMO.API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AEMO.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnergyController : ControllerBase
    {
        private readonly IEnergyService _energyService;

        public EnergyController(IEnergyService energyService)
        {
            _energyService = energyService;
        }

        [HttpGet]
        public Task<ICollection<Energy>> GetAll()
        {
            return _energyService.GetTransactions();
        }

        [HttpPost]
        public async Task<Energy> Post(CreateEnergyModel model)
        {
            var created = await _energyService.CreateTransaction(model);

            return created;
        }
    }
}
