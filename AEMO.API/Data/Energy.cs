using AEMO.API.SharedModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AEMO.API.Data
{
    public class Energy
    {
        public int Id { get; set; }

        public DateTimeOffset Date { get; set; }

        public EnergyType EnergyType { get; set; }

        public decimal Price { get; set; }

        public decimal Discount { get; set; }
    }
}
