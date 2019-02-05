using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace _01_dotnet_crm.Controllers
{
    [Route("api/leads")]
    [ApiController]
    public class LeadController : ControllerBase
    {
        private CrmContext _context;

        public LeadController(CrmContext context)
        {
            _context = context;
        }
        // GET api
        [HttpGet]
        public ActionResult Get()
        {
             if(_context.leads.ToList().Count == 0)
             {
                 return NoContent();
             }

            return Ok(_context.leads
            .Include(l => l.statustype)
            .Include(l => l.prioritytype)
            .Include(l => l.customer)
            .Include(l => l.customer.detail)
            .Include(l => l.employee)
            .ToList());
        }

        // GET by id api
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            Lead lead = _context.leads
            .Include(l => l.statustype)
            .Include(l => l.prioritytype)
            .Include(l => l.customer)
            .Include(l => l.customer.detail)
            .Include(l => l.employee)
            .FirstOrDefault(l => l.lead_id == id);

            if (lead == null)
            {
                return NotFound();
            }
            return Ok(lead);
        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody] Lead l)
        {
            if (l == null)
            {
                return BadRequest();
            }

            _context.leads.Add(l);
            _context.SaveChanges();

            return Ok(_context.leads
            .Include(ls => ls.statustype)
            .Include(ls => ls.prioritytype)
            .Include(ls => ls.customer)
            .Include(ls => ls.customer.detail)
            .Include(ls => ls.employee)
            .ToList());
        }

        // PUT api
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Lead l)
        {
            Lead lead = _context.leads.FirstOrDefault(ls => ls.lead_id == id);
            if (lead == null)
            {
                return NotFound();
            } 
            
            lead.last_contact = l.last_contact;
            lead.status_id = l.status_id;
            lead.priority_id = l.priority_id;
            lead.customer_id = l.customer_id;
            lead.owner_id = l.owner_id;

            _context.SaveChanges();
            return Ok(_context.leads
            .Include(ls => l.statustype)
            .Include(ls => l.prioritytype)
            .Include(ls => l.customer)
            .Include(ls => l.customer.detail)
            .Include(ls => l.employee)
            .ToList());
        }

        // DELETE api
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            Lead lead = _context.leads.FirstOrDefault(l => l.lead_id == id);
            if (lead == null)
            {
                return NotFound();
            }
            _context.leads.Remove(lead);
            _context.SaveChanges();
            return Ok(_context.leads
            .Include(l => l.statustype)
            .Include(l => l.prioritytype)
            .Include(l => l.customer)
            .Include(l => l.customer.detail)
            .Include(l => l.employee)
            .ToList());
        }
    }
}
