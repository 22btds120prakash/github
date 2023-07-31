let person =
{
    name:"tharun",
    age:18,
    gender:"male",
    eyecolour:"black",
    cars:{
        car1:"honda",
        car2:"BMW"
    }
}
for (i in person.cars){
    console.log(person.cars[i]);
}