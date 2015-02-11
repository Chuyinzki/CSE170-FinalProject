var data = require('../courses.json');

	exports.viewCourse = function(req, res) {
  	  // controller code goes here 
	  var index = data.index[req.params.name];
    var course = data.courses[index];
    console.log("The course index is: " + index);
    console.log("The course name is: " + course.courseID );
	  //console.log(classing);
  	  res.render('course', {
  	  	'courseID': course.courseID,
  	  	'courseName': course.courseName,
        'courseDescription': course.courseDescription
  	  });
  	  //console.log("The course name is: ");
  };