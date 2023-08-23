function setterGenerator(key) {
  const nameSetter = function (value) {
    this[key] = value;
  };
  return nameSetter;
}

const user = {};
const nameSetter = setterGenerator("name").bind(user);
nameSetter("Jack");
console.log(user);
// {name: "Jack"}
