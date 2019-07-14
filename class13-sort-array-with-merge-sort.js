// Merge Sort

// // What is recursive:
// function factorial(n) {
//     if (n<2) {
//         return 1;
//     }
//
//     return n * factorial(n-1);
// }

// Divides the given array into two halves: a left and a right sub array
// Calls mergeSort on these sub arrays
// Once we get to arrays that are less 2 in length, we begin to stitch them back together
// We sort as we stitch them up, thus leading to our sorted array by the time we're all the way back up thte stack


function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const sorted = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }

    const results = [...sorted, ...left, ...right];

    console.log(results);

    return results;
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];

mergeSort(numbers);
