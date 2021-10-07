/*class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}
let element = new car("ford",2019)

console.log(element.name +" "+element.year )*/

class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(){
        let date=new Date();
        return date.getFullYear()-this.year;
    }
}
const myCar = new car("ford",2019)

console.log("my car is "+ myCar.age()+"years old")

class bike{
    constructor(brand){
        this.mybrand=brand;
    }
    bio(){
        return `my brand name is ${this.mybrand}`
    }
}
class model extends bike{
    constructor(brand,model){
        super(brand);
        this.mymodel=model;
    }
    show(){
    return `${super.bio()} my model name is ${this.mymodel}`;
    }
}

const myBike =new model ("apache","bs6");

console.log(myBike.show());

//getter and setter

class Cars{
    constructor(brand){
        this.myBrand = brand;
    }
    get cnam(){
        return `${this.myBrand}`;
    }
    set cnam(x){
    this.myBrand=x;
    }
}

let myCars = new Cars("ford");

console.log(myCars.cnam)