// Problem - Create a function same, which accepts two arrays.
// The function should return true if every value in the array has
// it's corresponding value squared in the second array.
// The frequency of values must be same
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    // arr1.forEach((element) => {
    //     correctIndex = arr2.indexOf(element ** 2);
    //     if (correctIndex === -1) {
    //         return false;
    //     }
    //     arr2.splice(correctIndex, 1)
    // });

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        console.log(correctIndex);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}

console.log(same([1, 2, 3], [4, 5, 6]));