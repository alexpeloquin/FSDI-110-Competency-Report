
function GetDishes(){
    $.ajax({
        type:"GET",
        url:"/Dish/GetAll",
        contentType:"application/json; charset=utf-8",
        success: function(res){
            console.log("dishes data", res);
            //display each employee on array as a row on table
            for (var i = 0; i < res.length; i++) {
            //from the res array, give me employee i
            var dish = res[i];
            //need to add a row on the table with emp we have on var
            displayDish(dish);
            }
        },
        error: function(err){
            alert("Error getting data from Server");
            console.error(err);
        }
    })
}


//when dishes menu page loads, call this function
window.onload = GetDishes;

function displayDish(dish) {
    //first reference to the table
    var table = $("#tblDishes>tbody");//jquery get elem by Id
    var row =
        `<tr>
        <td>${dish.name}</td>
        <td>${dish.desc}</td>
        <td>${dish.price}</td>
        <td> <img src='${dish.imgUrl}'></td>
        <td>${dish.vegan}</td>
    </tr>`
    console.log("ROW", row);
    table.append(row);//to add to the table
}