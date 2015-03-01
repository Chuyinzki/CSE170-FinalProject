var models = require('../models');

var data = require('../courses.json');

	exports.viewCourse = function(req, res) {
  	  // controller code goes here
  	    var index = data.index[req.params.name];
        var course = data.courses[index];
        var splitName = course.courseID.split(" ");

        //console.log("The course index is: " + index);
        //console.log("The course first name is: " + splitName[0]);
        //console.log("The course second name is: " + splitName[1]);

        models.Rating.find({"course":splitName[1]}).exec(renderCourse);

        function renderCourse(err, ratings)
        {
          if(err) console.log(err);
          /////////////DOING DIFFICULTY MATH//////////////////////////
          var i = 0;
          var accDiff = 0;
          var accEnj = 0;
          var accUse = 0;
          var curNum = 0;
          var size = ratings.length;
          //console.log("This ratings size is: " + size);
          while(i < ratings.length){
            curNum = ratings[i].difficulty;
            //console.log("This ratings.difficulty is: " + ratings[i].difficulty);
            accDiff += curNum;

            curNum = ratings[i].enjoyability;
            //console.log("This ratings.enjoyability is: " + ratings[i].enjoyability);
            accEnj += curNum;

            curNum = ratings[i].usefulness;
            //console.log("This ratings.usefulness is: " + ratings[i].usefulness);
            accUse += curNum;

            i++;
          }
          accDiff = Math.round((accDiff/size) * 100) / 100;
          accEnj = Math.round((accEnj/size) * 100) / 100;
          accUse = Math.round((accUse/size) * 100) / 100;

          //console.log("This ratings size is: " + size);
          if (size == 0){
            accDiff = "---";
            accEnj = "---";
            accUse = "---";
          }
          //console.log("The total difficulty is: " + accDiff);
            res.render('course', {
              'courseID': course.courseID,
              'courseName': course.courseName,
              'courseDescription': course.courseDescription,
              'courseFirstName': splitName[0],
              'courseSecondName': splitName[1],
              'ratings': ratings,
              'difficulty': accDiff,
              'enjoyability': accEnj,
              'usefulness': accUse
            });
        }
  	  //console.log("The course name is: ");
  };