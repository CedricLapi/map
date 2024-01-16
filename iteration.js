
/*const nums = [1, 2, 3, 4, 5];

const newNums = nums.map((num) => {
    return num * 2;
});

console.log( newNums);*/


const nums = [1, 2, 3, 4, 5];

function double(num) {
    return num * 2;
}

const newNums = nums.map( double );

console.log( newNums );