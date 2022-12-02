// Type Alias is used for making custom type
var user = {
    name: 'Shivang',
    age: 20
};
function login(userData) {
    return userData;
}
console.log(login(user));
console.log(login({ name: 'John Doe', age: 20 }));
var userId = 123;
var userID = 'shiv123';
console.log(userId);
console.log(userID);
