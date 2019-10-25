// create an empty array of Stats
const statsDB = [];

// create a class called Stats
class Stats {
    constructor (name, fieldGoalAve, threePointsMade, year) {
        this.name = name;
        this.fieldGoalAve = fieldGoalAve;
        this.threePointsMade = threePointsMade;
        this.year = year;
   
    } 
}

// function that creates multiple instances of player stats
function addToStats (funcName, funcFieldGoalAve, funcThreePointsMade, funcYear) {
    let newStat = new Stats (funcName, funcFieldGoalAve, funcThreePointsMade, funcYear);
    statsDB.push(newStat);

    return newStat;

}
// function call to create stats
addToStats("Curry", 0.567, 45, 2019)
addToStats("Durant", 0.678, 55, 2019)
addToStats("Miller", 0.691, 53, 2019)
addToStats("Lebron", 0.682, 74, 2019)
addToStats("Wallace", 0.883, 20, 2019)
addToStats("Smith", 0.671, 66, 2019)
addToStats("Irvin", 0.560, 78, 2019)
addToStats("Oye", 0.778, 50, 2019)
addToStats("Falade", 0.278, 55, 2019)
addToStats("Butler", 0.998, 100, 2019)
addToStats("Wade", 0.990, 90, 2019)

// console log to print the result of player stats created
console.log(statsDB);

// Another function to find a player's stat by field goal ave
function findStat(playerStat){
    for (let stat of statsDB) {
        if (playerStat == stat.fieldGoalAve) 
            return playerStat + " is an actual player's field goal percentage"
    }

    return false
}

console.log(findStat(0.567))

// Another function that finds all the stats by a player's name
function findPlayerStat(allPlayerStats) {
    for (let playStat of statsDB) {
        if (allPlayerStats == playStat.name) 
            return allPlayerStats + " knows not what he does"
    }

    return false
}

console.log(findPlayerStat("Oye"))

