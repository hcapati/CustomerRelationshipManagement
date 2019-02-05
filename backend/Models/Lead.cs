using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _01_dotnet_crm
{
    public class Lead
    {
        [Key]
        public int lead_id { get; set; }
        public DateTime last_contact { get; set; }
        public int status_id { get; set; }
        [ForeignKey("status_id")]
        public StatusType statustype { get; set; }
        public int priority_id { get; set; }
        [ForeignKey("priority_id")]
        public PriorityType prioritytype { get; set; }
        public int customer_id { get; set; }
        [ForeignKey("customer_id")]
        public Customer customer { get; set; }
        public int owner_id { get; set; }
        [ForeignKey("owner_id")]
        public Employee employee { get; set; }
    }
}