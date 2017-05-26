var express = require ('express');
var router = express.Router();

class Company {

  constructor (name, employeeList ) {
    this.name = name;
    this.employeeList = employeeList;
  }
  addEmployees(something) {
    console.log( 'adding employees' );
    this.employeeList.push(something);
  }

  calcBonuses() {
    console.log( 'calculating bonuses');

    function checkRating(employeeList) {
    var ratingBonus;
    if (employeeList[3] <= 2) {
        ratingBonus = 0;
    } else if ([3] === 3) {
        ratingBonus = 4;
    } else if (employeeList[3] === 4) {
        ratingBonus = 6;
    } else if (employeeList[3] === 5) {
        ratingBonus = 10;
    } else {
        console.log("Error in checkRating function");
    }
    return ratingBonus;
}

function employeeBonus(employeeList) {
    var bonusPercent = checkRating(employeeList);
    var newBonusPercent = bonusPercent;
    if (employeeList[1].length === 4) {
        newBonusPercent = bonusPercent + 5;
        //console.log(newBonusPercent);
    } //

    if (employeeList[2] > 65000) {
        newBonusPercent = bonusPercent - 1;
        //console.log(newBonusPercent);
    }

    if (newBonusPercent > 13) {
        newBonusPercent = 13;
    }

    if (newBonusPercent < 0) {
        newBonusPercent = 0;
    }
    return newBonusPercent;
}

function buildInvidualBonus(employeeList) {
    var compensationArray = [];
    var salary = employeeList[2];
    var bonusPercent = employeeBonus(employeeList);

    compensationArray[0] = employeeList[0];
    //console.log(compensationArray);

    compensationArray[1] = bonusPercent;
    //console.log(compensationArray);

    var bonusDollars = (bonusPercent * 0.01) * salary;
    //console.log("bonus dollars: ", bonusDollars);

    compensationArray[2] = Number(salary) + Number(bonusDollars); // + ((employeeBonus(employeeList)/100)) * employeeList[2];
    //console.log(compensationArray);

    compensationArray[3] = bonusDollars;
    console.log(compensationArray);
}

//buildInvidualBonus(atticus);



function calculateAllBonus(employeesList) {
    //This function runs the whole show, brings everything together
    var finalArray = [];
    for (var i = 0; i < employeesList.length; i++) {
        finalArray[i] = buildInvidualBonus(employeesList[i]);
        //calculateIndivBonus(i);
    }
    //returns final bonus array
    console.log(finalArray);
    return finalArray;
}


calculateAllBonus(this.employeeList);
}
}

var sc = new Company( "sean's company", ["sean", "tiffany", "colin", "tessa"]);
console.log( 'sc working', sc );


sc.addEmployees("Jim");
console.log("sc with Jim now: ",sc);
sc.calcBonuses();



module.exports = router;
