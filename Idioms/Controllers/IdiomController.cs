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
            List<Idiom> Idioms = new List<Idiom> {
                new Idiom { Id = "1", Title = "A blessing in disguise", Meaning = "a good thing that seemed bad at first", Example = "Losing that job turned out to be a blessing in disguise for him as it forced him to plunge into business. When Pete fractured his knee, it was a blessing in disguise, for he got some much needed rest and a break from his hectic work life and refocused on some important things in his life.", Photo = "goolge photos url" },
                new Idiom { Id = "2", Title = "Bite the bullet", Meaning = "To get something over with because it is inevitable", Example = "When the time comes, I'll bite the bullet and take my punishment without a fuss. Source: theidioms.com", Photo = "goolge photos url" },
                new Idiom { Id = "3", Title = "Call it a day", Meaning = "Stop working on something", Example = "I'm getting a bit tired now - let's call it a day.", Photo = "goolge photos url" },
                new Idiom { Id = "4", Title = "Get out of hand", Meaning = "Get out of control", Example = "It wasn't that I didn't know when things started getting out of control.", Photo = "goolge photos url" },
                new Idiom { Id = "5", Title = "Hit the sack", Meaning = "Go to sleep", Example = "I am really tired after all that exercise. I am going to hit the sack.", Photo = "goolge photos url" }
            };
            return Idioms;
        }
    }
}
