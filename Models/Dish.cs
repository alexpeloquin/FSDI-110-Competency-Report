namespace Restaurant.Models
{
    //Syntax for class properties in C#
    public class Dish
    {
        public int ID {get;set;}
        public string Name {get;set;}
        public string Desc {get;set;}
        public double Price{get;set;}
        public string ImgUrl{get;set;}
        public bool Vegan{get;set;}
    }
}