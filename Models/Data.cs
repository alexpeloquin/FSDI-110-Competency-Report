using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Restaurant.Models
{
    public class Data : DbContext
    {
        //repaet this step each time to create new model and add
        public DbSet<Employee> Employees{get;set;}
        public DbSet<Dish> Dishes{get;set;}

        //add dbsets for any other class -> to become a table on DB
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=restaurant.db");
        }

        //Any time one of the models is changed, you need to run commands below:
    //create an immigration with command below to make DB that same as the model
        //dontnet ef migrations add<someRandomNameHere>
    //update database
        //dotnet ef database update
        
    }
}


//this is basic class that is going to be used to send and align data backforth