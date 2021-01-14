var rect = {
    perimeter : (x,y) => (2*(x+y)),
    area : (x,y) => (x*y),
};

function solve_rect(l,b){
    console.log("Solving for rectangle with l = "+l+" and b = "+b);

    if(l<=0 || b <=0){
        console.log("Rectange dimensions should be greater than 0. Here, l = "+l+" and b = "+b);
    }
    else{
        console.log("The area is : "+ rect.area(l,b));
        console.log("The perimeter is: "+ rect.perimeter(l,b));
    }
}

solve_rect(2,4);
solve_rect(0,100);
