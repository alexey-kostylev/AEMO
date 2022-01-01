using data=AEMO.API.Data;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AEMO.API.Models;

namespace AEMO.API.Services
{
    public class EnergyService : IEnergyService
    {
        private readonly data.DataContext _context;
        private readonly IMapper _mapper;

        private const decimal WeekdayDiscount = 0.1m;


        public EnergyService(data.DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ICollection<Energy>> GetTransactions()
        {
            var data = await _mapper.ProjectTo<Energy>(_context.Energy).ToListAsync();

            return data;
        }

        public async Task<Energy> CreateTransaction(CreateEnergyModel model)
        {
            var entity = _mapper.Map<data.Energy>(model);

            if (entity.Date.LocalDateTime.DayOfWeek == DayOfWeek.Saturday || entity.Date.LocalDateTime.DayOfWeek == DayOfWeek.Sunday)
            {
                entity.Discount = WeekdayDiscount;
                entity.Price -= model.Price * WeekdayDiscount;
            }

            _context.Energy.Add(entity);
            await _context.SaveChangesAsync();

            return _mapper.Map<Energy>(entity);
        }
    }
}
