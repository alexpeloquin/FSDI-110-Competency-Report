using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Restaurant.Models;

namespace Restaurant.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult Index(){
            return View();
        }

        public IActionResult Create(){
            return View();
        }

        [HttpPost]
        public IActionResult Create([FromBody]Employee newEmp){
            Data db = new Data();//create a reference to database
            db.Employees.Add(newEmp);//add employee to table
            db.SaveChanges();//save changes to db
            db.Dispose();//close the connection

            Console.WriteLine("*************************");
            Console.WriteLine("Creating" + newEmp.Name);
            Console.WriteLine("Assigned ID: " + newEmp.Id);
            Console.WriteLine("*************************");
            return Json(newEmp);//return the object with assigned Id
        }
        //return all the employees from DB
        public IActionResult GetAll(){
            Data db = new Data();
            var list = db.Employees.ToList();//read all the elements as a list
            db.Dispose();

            return Json(list);

        }
    }
}