// Type Alias is used for making custom type

type User = {
    name: string;
    age: number;
    address?: string;  //Optional
}

const user: User = {
    name: 'Shivang',
    age: 20,
}

function login(userData: User): User {
    return userData;
}

console.log(login(user));
console.log(login({name: 'John Doe',age: 20}));


type ID = number | string;
const userId: ID = 123
const userID: ID = 'shiv123'

console.log(userId)
console.log(userID)
