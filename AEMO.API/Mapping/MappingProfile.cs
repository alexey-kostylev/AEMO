using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using data = AEMO.API.Data;
using models = AEMO.API.Models;

namespace AEMO.API.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<data.Energy, models.Energy>();

            CreateMap<models.CreateEnergyModel, data.Energy>();
        }
    }
}
