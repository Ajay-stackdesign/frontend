//create a maps 

const fruits = new Map([
    ["apples",20],
    ["orange",90],
])

//set method 
fruits.set("apples",40 , "orange",50)

//accessing the element
console.log(fruits.get("orange"),fruits.get("apples"))

