	exports.viewCourse = function(req, res) {
  	  // controller code goes here 
	  var name = req.params.name;

	  console.log("The course name is: " + name);
	  //console.log(classing);
  	  res.render('course', {
  	  	'courseID': name,
  	  	'courseName': '',
        'courseDescription': ''
  	  });
  	  //console.log("The course name is: ");
  };