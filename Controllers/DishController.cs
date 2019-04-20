using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Restaurant.Models;

namespace Restaurant.Controllers
{
    public class DishController : Controller
    {
        /*
        -define the get method to return the view (returns the view)
        -create new view page inside Dish folder
        -Create the menu item

        -create the model for Dish
            -Name
            -Description
            -Price - double
            -ImgURL -string
            -Vegan (true/false)

        -Create capture form on the view
        -Define the HTTP Post for Create
        -Send the data
         */

        public IActionResult Create(){
            Console.WriteLine("********** Sending Create View");
            return View();
        }
        public IActionResult List(){
            Console.WriteLine("********** Sending List View");
            return View();
        }

        //return all the employees from DB
        public IActionResult GetAll(){
            Data db = new Data();
            var list = db.Dishes.ToList();//read all the elements as a list
            db.Dispose();

            return Json(list);
        }
        //below here is the key to not have each create function respond to "POST REQUEST"
        [HttpPost]
        public IActionResult Register([FromBody]Dish newDish){
        
            Data db = new Data();
            db.Dishes.Add(newDish);
            db.SaveChanges();
            db.Dispose();

            Console.WriteLine("***********");
            Console.WriteLine(newDish.Vegan);
            Console.WriteLine(newDish.Name);
            return Json(newDish);
            
        }
    }
}