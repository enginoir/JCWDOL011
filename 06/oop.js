let person = {
    name: "Yusuf",
    age: 32,
    "personal-info": "Web Developer",
    hobbies:["Apex Legends", "Sports"],
    address:{
        city : "Cimahi",
        houseNumber: "M2"
    },
    run: function() {
        console.log("The Person is a New Member")
    },
};

console.log(person);
console.log(person.age);
console.log(person.hobbies[1]);
console.log(person["name"]);
console.log(person["personal-info"]);

person.address.kecamatan = "Cimahi Tengah";
person.name = "Muhammad Yusuf";
console.log(person);
person.run();

