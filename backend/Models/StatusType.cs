using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _01_dotnet_crm
{
    public class StatusType
    {
        [Key]
        public int status_id { get; set; }
        public string status_type { get; set; }
    }
}