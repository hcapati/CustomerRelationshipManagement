using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _01_dotnet_crm
{
    public class Interaction
    {
        [Key]
        public int interaction_id { get; set; }
        public string comment { get; set; }
        public DateTime date_time { get; set; }
        public int duration { get; set; }
        public int lead_id { get; set; }
        [ForeignKey("lead_id")]
        public Lead lead { get; set; }
        public int employee_id { get; set; }
        [ForeignKey("employee_id")]
        public Employee employee { get; set; }
    }
}
