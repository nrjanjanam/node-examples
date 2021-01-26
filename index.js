const rectangle = require("./rectangle");
var rect = require("./rectangle");

function solve_rect(l,b){
    console.log("Solving for rectangle with l = "+l+" and b = "+b);
    rect(l,b,(err,rectangle) => {
        if(err) {
            console.log('Error: ' + err.message);
        }
        else{
            console.log(" The area of the rectange of dimensions l = " + l + " and b = " + b + " is " + rectangle.area(l,b));
            console.log(" The perimeter of the rectange of dimensions l = " + l + " and b = " + b + " is " + rectangle.perimeter(l,b));
        }
    });
    console.log("This statement is after the call to rect.");
}

solve_rect(2,4);
solve_rect(0,100);
solve_rect(6,-5);
solve_rect(4.5,6);

