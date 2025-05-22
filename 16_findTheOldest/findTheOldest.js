const findTheOldest = function (people) {
    people.sort((a, b) => {
        let aAge = (a.yearOfDeath ? a.yearOfDeath : new Date(Date.now()).getFullYear()) - a.yearOfBirth;
        let bAge = (b.yearOfDeath ? b.yearOfDeath : new Date(Date.now()).getFullYear()) - b.yearOfBirth;
        return bAge - aAge;
    })
    return people[0];
};

function compareYears(a, b) {

}

// Do not edit below this line
module.exports = findTheOldest;
