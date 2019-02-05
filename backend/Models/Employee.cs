using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _01_dotnet_crm
{
    public class Employee
    {
        [Key]
        public int employee_id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
    }
}