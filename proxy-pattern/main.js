const user= {
  name: "Rohit",
  email: "rohit@email.com",
  age: 21,
  branch: "IT",
  college: "XYZ"
}


const userProxy= new Proxy(user, {
  get: (target, value) => {
    return target[value]
  },
  set: (target, property, value) => {
    return target[property] = value;
  },
})

console.log(userProxy.name);
userProxy.name= "Dan Singh";
console.log(userProxy.name);