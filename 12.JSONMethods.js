const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const filterProperties = (key, value) => {
    if (key === 'id' || key === 'age' || key === ''){
        return value;
    }
}

const json = JSON.stringify(person, filterProperties);

console.log(json); // Should return: { "id": 1, "age": 25 }
