using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _01_dotnet_crm
{
    public class Customer
    {
        [Key]
        public int customer_id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public int age { get; set; }
        public int details_id { get; set; }
        [ForeignKey("details_id")]
        public Detail detail { get; set; }
    }
}