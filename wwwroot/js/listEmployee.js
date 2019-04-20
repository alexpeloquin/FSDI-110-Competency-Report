function GetEmployees() {
    $.ajax({
        type: "GET",
        url: "/Employee/GetAll",
        contentType: "application/json; charset=utf-8",
        success: function (res) {
            console.log("Server says", res);
            //display each employee on array as a row on table
            for (var i = 0; i < res.length; i++) {
                //from the res array, give me employee i
                var emp = res[i];
                //need to add a row on the table with emp we have on var
                displayEmployee(emp);
            }
        },
        error: function (error) {
            console.log("Error retreiving data");
            console.log(error);
        }
    });
}


//when employee list page loads, call this function
window.onload = GetEmployees;

function displayEmployee(emp) {
    //first reference to the table
    var table = $("#tblEmployees>tbody");//jquery get elem by Id
    var row =
        `<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.lastName}</td>
        <td>${emp.position}</td>
    </tr>`
    console.log("ROW", row);
    table.append(row);//to add to the table



}
