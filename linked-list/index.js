// const arr = [2, 11, 7, 15];
// const target = 9;

// // two Sum using brute force method
// const twoSumA = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }

// console.log(twoSumA(arr, target));

// // two Sum using two hash pass method

// const twoSumB = (nums, target) => {
//     let obj = {};
//     for (let i = 0; i < nums.length; i++) {
//         obj[nums[i]] = i
//     }
//     console.log("array value map to key: ", obj)

//     for (let i = 0; i < nums.length; i++){
//         let result = target - nums[i];
//         console.log("the obj value: ",obj[result])
//         if (obj[result] && obj[result] !== i) {
//             return [i, obj[result]];
//         }
//     }
// }

// console.log(twoSumB(arr, target));

// // two Sum using one hash pass method

// const twoSumC = (nums, target) => {
//     let obj = {};
//     for (let i = 0; i < nums.length; i++){
//         let result = target - nums[i];
//         if (obj[result] && obj[result] !== i) {
//             return [i, obj[result]];
//         }
//         obj[nums[i]] = i
//     }
// }

// console.log(twoSumC(arr, target));

class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        console.log(`item ${element} is added to position ${this.count}`);
        this.count++;
        return this.count - 1;
    }

    pop() {
        if (this.count == 0) return undefined;
        let deletedItem = this.items[this.count - 1];
        this.count--;
        console.log(`The removed item is ${deletedItem}`)
        return deletedItem;
    }

    peek() {
        console.log(`The item at the top is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }
}

const stack = new Stack();

console.log(stack.push(100));
console.log(stack.push(200));
console.log(stack.push(400))

console.log(stack.peek());

console.log(stack.push(300));

console.log(stack.pop());




