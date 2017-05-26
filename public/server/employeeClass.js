console.log('In employeeClass.js');
const express = require ('express');
const router = express.Router();


class Employee {

  constructor(name, startDate, salary, reviewRating) {
    this.name = name;
    this.startDate = startDate;
    this.salary = salary;
    this.reviewRating = reviewRating;
  }
  daysWithCompany() {
    var cd = new Date( '5/26/2017' );
    console.log( 'In days with company' );
    const dt1 = new Date(this.startDate);
    console.log(dt1);
    const dt2 = new Date(cd);
    console.log(dt2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
  }
}

//Sean did this :
var newGuy = new Employee( 'Jim', '2013-11-26T05:00:00.000Z', '40,000', '7' );
console.log( 'newGuy', newGuy);

console.log("new guy test", newGuy.daysWithCompany());

var cd = new Date( '5/26/2017' );

// Display the month, day, and year. getMonth() returns a 0-based number.
// var month = cd.getMonth()+1;
// var day = cd.getDate();
// var year = cd.getFullYear();
// console.log((month + '-' + day + '-' + year));
//
// console.log( cd );


module.exports = router;
