using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _01_dotnet_crm
{
    public class Detail
    {
        [Key]
        public int details_id { get; set; }
        public string preferred_contact { get; set; }
    }
}