var courses = require('../courses.json');

  exports.view = function(req, res) {
  	  res.render('allClasses', courses);
  };