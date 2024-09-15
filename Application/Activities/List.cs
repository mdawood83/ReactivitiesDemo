using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<Result<List<ActivityDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<ActivityDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            // private readonly ILogger<List> _logger;
            public Handler(DataContext context, IMapper mapper/*, ILogger<List> logger*/)
            {
                // _logger = logger;
                _context = context;
                _mapper = mapper;

            }
            public async Task<Result<List<ActivityDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                // try
                // {
                //     for (int i = 0; i < 10; i++)
                //     {
                //         cancellationToken.ThrowIfCancellationRequested();
                //         await Task.Delay(1000, cancellationToken);
                //         _logger.LogInformation($"Task {i} has completed");
                //     }
                // }
                // catch (System.Exception)
                // {
                //     _logger.LogInformation("Task was cancelled");
                // }

                var activities = await _context.Activities
                        .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider)
                        .ToListAsync();

                // var activitiesToReturn = _mapper.Map<List<ActivityDto>>(activities);
                
                return Result<List<ActivityDto>>.Success(activities);
            }
        }
    }
}