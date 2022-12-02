// function getTotal(numbers) {
//     return numbers.reduce((acc,item)=>{
//         return acc+item;
//     },0)
// }

// console.log(getTotal([3,2,1]));



// function getTotal(numbers: number[]) {
//     return numbers.reduce((acc,item)=>{
//         return acc+item;
//     },0)
// }

// console.log(getTotal([3,2,1]));



function getTotal(numbers: Array<number>) {
    return numbers.reduce((acc,item)=>{
        return acc+item;
    },0)
}

console.log(getTotal([3,2,1]));


