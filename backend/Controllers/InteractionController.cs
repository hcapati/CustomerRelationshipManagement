using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace _01_dotnet_crm.Controllers
{
    [Route("api/interactions")]
    [ApiController]
    public class InteractionController : ControllerBase
    {
        private CrmContext _context;

        public InteractionController(CrmContext context)
        {
            _context = context;
        }
        // GET api
        [HttpGet]
        public ActionResult Get()
        {
             if(_context.interactions.ToList().Count == 0)
             {
                 return NoContent();
             }

            return Ok(_context.interactions
            .Include(i => i.lead)
            .Include(i => i.lead.statustype)
            .Include(i => i.lead.prioritytype)
            .Include(i => i.lead.customer)
            .Include(i => i.lead.customer.detail)
            .Include(i => i.lead.employee)
            .Include(i => i.employee)
            .ToList());
        }

        // GET by id api
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            Interaction interaction = _context.interactions
            .Include(i => i.lead)
            .Include(i => i.lead.statustype)
            .Include(i => i.lead.prioritytype)
            .Include(i => i.lead.customer)
            .Include(i => i.lead.customer.detail)
            .Include(i => i.lead.employee)
            .Include(i => i.employee)
            .FirstOrDefault(i => i.interaction_id == id);

            if (interaction == null)
            {
                return NotFound();
            }
            return Ok(interaction);
        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody] Interaction i)
        {
            if (i == null)
            {
                return BadRequest();
            }

            _context.interactions.Add(i);
            _context.SaveChanges();

            return Ok(_context.interactions
            .Include(ii => ii.lead)
            .Include(ii => ii.lead.statustype)
            .Include(ii => ii.lead.prioritytype)
            .Include(ii => ii.lead.customer)
            .Include(ii => ii.lead.customer.detail)
            .Include(ii => ii.lead.employee)
            .Include(ii => ii.employee)
            .ToList());
        }

        // PUT api
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Interaction i)
        {
            Interaction interaction = _context.interactions.FirstOrDefault(ii => ii.interaction_id == id);
            if (interaction == null)
            {
                return NotFound();
            } 
            
            interaction.comment = i.comment;
            interaction.date_time = i.date_time;
            interaction.duration = i.duration;
            interaction.lead_id = i.lead_id;
            interaction.employee_id = i.employee_id;

            _context.SaveChanges();
            return Ok(_context.interactions
            .Include(ii => ii.lead)
            .Include(ii => ii.lead.statustype)
            .Include(ii => ii.lead.prioritytype)
            .Include(ii => ii.lead.customer)
            .Include(ii => ii.lead.customer.detail)
            .Include(ii => ii.lead.employee)
            .Include(ii => ii.employee) 
            .ToList());
        }

        // DELETE api
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            Interaction interaction = _context.interactions.FirstOrDefault(i => i.interaction_id == id);
            if (interaction == null)
            {
                return NotFound();
            }
            _context.interactions.Remove(interaction);
            _context.SaveChanges();
            return Ok(_context.interactions
            .Include(i => i.lead)
            .Include(i => i.lead.statustype)
            .Include(i => i.lead.prioritytype)
            .Include(i => i.lead.customer)
            .Include(i => i.lead.customer.detail)
            .Include(i => i.lead.employee)
            .Include(i => i.employee)
            .ToList());
        }
    }
}
