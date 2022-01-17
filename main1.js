//console.log("welcome to node ")

var me = {
    firstName : "John",
    lastName : "Doe",
    address :  {
        city : "Bengaluru",
        street : "201 Main Road, Marathahalli"
    },
    fruits : ["apple", "oranges", "papaya"]
}
//var{firstName, lastName,address,fruits} = me
//console.log(firstName,lastName,address,fruits)

var {
    firstName,
    lastName,
    address :{
        city,
        street
    },
    fruits : [fruit1,fruit2,fruit3]
} = me
console.log(firstName,lastName,address,fruits);