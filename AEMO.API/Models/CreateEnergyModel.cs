using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using AEMO.API.SharedModels;

namespace AEMO.API.Models
{
    public class CreateEnergyModel
    {
        // prevents from posting default value
        [Range(typeof(DateTimeOffset), "01/01/1901", "01/01/2100")]
        public DateTimeOffset Date { get; set; }

        public EnergyType EnergyType { get; set; }

        [Range(1, double.MaxValue, ErrorMessage = "Price must be greater than zero")]
        public decimal Price { get; set; }
    }
}
