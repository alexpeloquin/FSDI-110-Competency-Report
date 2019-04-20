// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function clicked(){
    console.log("button was clicked");
}

function RegisterDish(){
    var name = $("#txtName").val();
    var desc = $("#txtDesc").val();
    var price = $("#txtPrice").val();
    var image = $("#txtImgUrl").val();
    var isVegan = $("#isVegan").is(":checked");

    console.log("Value for isVegan var is: ", isVegan);

    var dish = {
        Name: name,
        Desc: desc,
        Price: price,
        ImgUrl: image,
        Vegan: isVegan,
    }
    console.log(dish);
    
    if (!name){//if no name
        $("#nameError").removeClass("hidden");
        return;
    }
    $("#nameError").addClass("hidden");

    var validDouble = parseFloat(price);
    console.log("value for valid:",validDouble);
    if(!validDouble){
        $("#priceError").removeClass("hidden");
        validDouble=false;
        console.error(price +"The price needs to be a number");
        return;
    }
    $("#priceError").addClass("hidden");

    $.ajax({
        type: "POST",
        url: "/Dish/Register",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(dish),
        success: function(res){
            console.log("Post ended")
            console.log("Server says", res);
        },
        error:function(error){
            console.log("Error Saving Data");
            console.log(error);
        }
    })
}
function SendTest(){
    var first = $("#txtFirst").val();
    var last = $("#txtLast").val();
    var phone = $("#txtPhone").val();
    var position = $("#txtPosition").val();
    var salary = $("#txtSalary").val();

    
    //Specify Validation requirements for different fields
    //validate a double vale

    if (!last){//if no last name
        $("#nameLastError").removeClass("hidden");
        return;
    }
    $("#nameLastError").addClass("hidden");

    var validDouble = parseFloat(salary);
    console.log("value for valid:",validDouble);
    if(!validDouble){
        $("#salaryError").removeClass("hidden");
        validDouble=false;
        console.error(salary+"Salary isnt a number");
        return;
    }
    $("#salaryError").addClass("hidden");
    


    

    //create an object with same data sa the backend model
    var emp = {
        Id:0,
        Name:first,
        LastName:last,
        PhoneNumber:phone,
        Position:position,
        Salary:salary,
    }

    console.log("Sending to Server: ", emp );
    
    //send the data
    $.ajax({
        type: "POST",
        url: "/Employee/Create",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(emp),
        success: function(res){
            console.log("Post ended")
            console.log("Server says",res);
        }
    });
}





