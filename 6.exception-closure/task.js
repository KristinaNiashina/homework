// TASK 1

function parseCount(element) {
    let parseElement = Number.parseFloat(element);
    // debugger
    if(!parseElement){
        throw new Error("Невалидное значение");
    }else return(parseElement);     
}

function validateCount(element){
    
    try {
        return parseCount(element);
    } catch (error) {
        return error; 
    }

}



// TASK 2


class Triangle{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;

        console.log(a,b,c)
        if ( a + b < c || a + c < b || b + c < a ){
                throw new Error("Треугольник с такими сторонами не существует");
        }    
    }
    
    get perimeter(){
        return Number(this.a + this.b + this.c) ;
    }

    get area(){
        let p = (this.a + this.b+ this.c)/2;
        return Number((Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))).toFixed(3));
    }
}


function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        let a = new Object();
        a.getArea = function() {return "Ошибка! Треугольник не существует";};
        a.getPerimeter = function() {return "Ошибка! Треугольник не существует";};
    }
}