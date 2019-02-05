using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _01_dotnet_crm
{
    public class PriorityType
    {
        [Key]
        public int priority_id { get; set; }
        public string priority_type { get; set; }   
    }
}