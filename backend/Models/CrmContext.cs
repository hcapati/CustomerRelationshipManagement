using Microsoft.EntityFrameworkCore;

namespace _01_dotnet_crm
{
    public class CrmContext : DbContext
    {
        public DbSet<Customer> customers { get; set; }
        public DbSet<Detail> details { get; set; }
        public DbSet<Employee> employees { get; set; }
        public DbSet<Interaction> interactions { get; set; }
        public DbSet<Lead> leads { get; set; }
        public DbSet<PriorityType> prioritytypes { get; set; }
        public DbSet<StatusType> statustypes { get; set; }

        public CrmContext(DbContextOptions<CrmContext> options) : base(options)
        {
        }
    }
}