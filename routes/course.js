var models = require('../models');

var data = require('../courses.json');

	exports.viewCourse = function(req, res) {
  	  // controller code goes here
  	    var index = data.index[req.params.name];
        var course = data.courses[index];
        var splitName = course.courseID.split(" ");

        console.log("The course index is: " + index);
        console.log("The course first name is: " + splitName[0]);
        console.log("The course second name is: " + splitName[1]);

        models.Rating.find({"course":splitName[1]}).exec(renderCourse);

        function renderCourse(err, ratings)
        {
          if(err) console.log(err);
          console.log(ratings);
            res.render('course', {
              'courseID': course.courseID,
              'courseName': course.courseName,
              'courseDescription': course.courseDescription,
              'courseFirstName': splitName[0],
              'courseSecondName': splitName[1],
              'ratings': ratings
            });
        }
  	  //console.log("The course name is: ");
  };