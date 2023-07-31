let person={
    firstName:"Narendra",
    lastName:"Modi",
    fullName: function()
    {
        return this.firstName+ " "+ this.lastName;
    }
}
console.log(person.fullName());