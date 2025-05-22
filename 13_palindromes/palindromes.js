const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const filteredCharacters = word
        .toLowerCase()
        .split("")
        .filter((char) => alphanumerical.includes(char))
        .join('');
    const reversedCharacters = filteredCharacters.split('').reverse().join('');
    return reversedCharacters === filteredCharacters;
};

// Do not edit below this line
module.exports = palindromes;
