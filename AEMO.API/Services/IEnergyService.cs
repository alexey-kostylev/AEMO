using System.Collections.Generic;
using System.Threading.Tasks;
using AEMO.API.Models;

namespace AEMO.API.Services
{
    public interface IEnergyService
    {
        Task<Energy> CreateTransaction(CreateEnergyModel model);
        Task<ICollection<Energy>> GetTransactions();
    }
}
