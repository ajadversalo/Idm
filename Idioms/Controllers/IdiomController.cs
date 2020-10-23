using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Idioms.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
   
    public class IdiomController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<IdiomController> _logger;

        public IdiomController(ILogger<IdiomController> logger)
        {
            _logger = logger;
        }

        [HttpGet("[action]")]
        public IEnumerable<Idiom> GetIdioms()
        {
            List<Idiom> Idioms = new List<Idiom>();
            Idiom idiom = new Idiom{
                Id="1",
                Title="1",
                Meaning="1",
                Example="1",
                Photo="1"
            };
            Idioms.Add(idiom);
            return Idioms.ToArray();
        }
    }
}
