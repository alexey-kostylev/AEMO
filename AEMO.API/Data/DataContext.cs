using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AEMO.API.Data
{
    public class DataContext : DbContext
    {
        public virtual DbSet<Energy> Energy {get;set;}

        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {

        }
    }
}
