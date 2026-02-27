/*
 * Complete the 'findSmallestMissingPositive' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY orderNumbers as parameter.
 */

function findSmallestMissingPositive(orderNumbers) {
    // Write your code here
    let i = 0;
    let j = orderNumbers.length - 1;
    let ans = 0;
    
    while (i < j) {
        if (orderNumbers[i] - 1 === i) {
            i += 1;
        } else if (orderNumbers[i] <= j && orderNumbers[i] > 0) {
            const number = orderNumbers[i] - 1;
            [orderNumbers[i], orderNumbers[number]] = [orderNumbers[number], orderNumbers[i]];
            if (orderNumbers[i] === orderNumbers[number]) {
                [orderNumbers[j], orderNumbers[i]] = [orderNumbers[i], orderNumbers[j]];
                j--;
            }
        } else {
            [orderNumbers[j], orderNumbers[i]] = [orderNumbers[i], orderNumbers[j]];
            j--;
        }
        
    }
    
    for (let i = 0; i < orderNumbers.length; i++) {
        if (orderNumbers[i] - 1 === i) {
            ans = orderNumbers[i]
        } else {
            break;
        } 
    }
    
    
    return ans + 1;

}

console.log(findSmallestMissingPositive([5,4,3,2,1,6]));      // expected 2
console.log(findSmallestMissingPositive([3, 4, -1, 1]));  // expected 2
console.log(findSmallestMissingPositive([7, 8, 9, 11]));  // expected 1