var models = require('../models');

var courses = require('../courses.json');

  exports.view = function(req, res) {
  	  //console.log("HERE");
  	  //console.log("Length of courses: "+courses.courses.length);
  	  models.Rating.find().exec(renderCourses);
  	  function renderCourses(err, ratings)
       {

       		function makeArrayOf(value, length) {
  				var arr = [], i = length;
  				while (i--) {
    			arr[i] = value;
  				}
  					return arr;
			}

			
       		//console.log(ratings.length);
       		var i = 0;
          	var accDiff = makeArrayOf(0, courses.courses.length);
          	var accEnj = makeArrayOf(0, courses.courses.length);
          	var accUse = makeArrayOf(0, courses.courses.length);
          	var size = makeArrayOf(0, courses.courses.length);
          	//console.log("This ratings size is: " + size);
          	while(i < ratings.length){
          		var course_string = "CSE "+ ratings[i].course;
          		var course_index = courses.index[course_string];
          		//console.log(course_index);
            	curNum = ratings[i].difficulty;
            	//console.log("This ratings.difficulty is: " + ratings[i].difficulty);
            	accDiff[course_index] += curNum;

            	curNum = ratings[i].enjoyability;
            	//console.log("This ratings.enjoyability is: " + ratings[i].enjoyability);
            	accEnj[course_index] += curNum;

            	curNum = ratings[i].usefulness;
            	//console.log("This ratings.usefulness is: " + ratings[i].usefulness);
            	accUse[course_index] += curNum;

            	size[course_index] += 1;
            	i++;
          	}
          for(var j=0; j<accDiff.length;j++){
          accDiff[j] = Math.round((accDiff[j]/size[j]) * 100) / 100;
          accEnj[j] = Math.round((accEnj[j]/size[j]) * 100) / 100;
          accUse[j] = Math.round((accUse[j]/size[j]) * 100) / 100;

          //console.log("This ratings size is: " + size[j]);
          if (size == 0){
            accDiff[j] = "--";
            accEnj[j] = "--";
            accUse[j] = "--";
          }
          courses.courses[j].accDiff = accDiff[j];
          courses.courses[j].accEnj = accEnj[j];
          courses.courses[j].accUse = accUse[j];
      	}
      	//console.log(courses.courses[0]);
          res.render('allClasses', courses);
       }
  };