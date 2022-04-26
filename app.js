function replace(s) {
    //coding and coding....
    let splitString = s.split("");
    let newArr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'A' || s[i] == 'e' || s[i] == 'E' || s[i] == 'i' || s[i] == 'I' || s[i] == 'o' || s[i] == 'O' || s[i] == 'u' || s[i] == 'U') {
            newArr.push("!");
        } else {
            newArr.push(s[i]);
        }
    }
    return newArr.join("");
}

console.log(replace("Hi!")); // H!!
console.log(replace("!Hi! Hi!")); // !H!! H!!
console.log(replace("aeiou")); // !!!!!
console.log(replace("ABCDE")); // !BCD!