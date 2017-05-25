var express = require ('express');
var path = require ('path');
var app = express();
var port = 4321;
//
// var companyClass = require('./server/companyClass');
// var employeeClass = require('./server/employeeClass');

// routers
// app.use('/');
// app.use('/companyClass', companyClass);
// app.use('/employeeClass', employeeClass);

app.use(express.static(path.resolve('./public')));


app.listen(port, function() {
  console.log("server running, check localhost:4321");
});
