using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace _01_dotnet_crm.Controllers
{
    [Route("api/customers")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private CrmContext _context;

        public CustomerController(CrmContext context)
        {
            _context = context;
        }
        // GET api
        [HttpGet]
        public ActionResult Get()
        {
             if(_context.customers.ToList().Count == 0)
             {
                 return NoContent();
             }

            return Ok(_context.customers
            .Include(c => c.detail)
            .ToList());
        }

        // GET by id api
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            Customer customer = _context.customers
            .Include(c => c.detail)
            .FirstOrDefault(c => c.customer_id == id);
            if(customer == null)
            {
                return NotFound();
            }
            return Ok(customer);

        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody] Customer c)
        {
            if (c == null)
            {
                return BadRequest();
            }
            _context.customers.Add(c);
            _context.SaveChanges();

            return Ok(_context.customers
            .Include(cu => cu.detail)
            .ToList());
        }

        // PUT api
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Customer c)
        {
            Customer customer = _context.customers.FirstOrDefault(cu => cu.customer_id == id);
            if (customer == null)
            {
                return NotFound();
            } 
            customer.name = c.name;
            customer.email = c.email;
            customer.phone = c.phone;
            customer.age = c.age;
            customer.details_id = c.details_id;

            _context.SaveChanges();
            return Ok(_context.customers
            .Include(cc => cc.detail)
            .ToList());
        }

        // DELETE api
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            Customer customer = _context.customers.FirstOrDefault(c => c.customer_id == id);
            if (customer == null)
            {
                return NotFound();
            }
            _context.customers.Remove(customer);
            _context.SaveChanges();
            return Ok(_context.customers
            .Include(c => c.detail)
            .ToList());
        }
    }
}
