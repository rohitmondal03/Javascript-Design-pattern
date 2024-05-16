const factoryFunction= (name, mobile, roll) => ({
  id: crypto.randomUUID(),
  name: name,
  mobileNumber: mobile,
  rollNo: roll,
})


const person1= factoryFunction("Rohit", 2235967567, 86);
const person2= factoryFunction("Aryan", 8765343587, 21);

console.log(person1);
console.log(person2);