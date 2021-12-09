// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman   
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let strCounter1 = {};
    let strCounter2 = {};

    for (let char of str1) {
        strCounter1[char] = (strCounter1[char] || 0) + 1;
    }

    for (let char of str2) {
        strCounter2[char] = (strCounter2[char] || 0) + 1;
    }

    console.log(strCounter1);
    console.log(strCounter2);

    for (let prop in strCounter1) {
        // Check if properties are available in strCounter2
        if (!(prop in strCounter2)) {
            return false;
        }
        // Check if the count is equal for all the properties
        if (strCounter2[prop] !== strCounter1[prop]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram('aaz', 'zaa'));