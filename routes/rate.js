var models = require('../models');

exports.view = function(req, res) {
    var name = req.params.name;
    var splitName = name.split(" ");
    var courseNumber = splitName[1];
    console.log("The course name is: " + name);
    res.render('rate', {
        'courseName': name,
        'courseNumber': courseNumber
    });
};

exports.addRating = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  var newRating = new models.Rating(
    {
      "course": form_data["course"],
      "difficulty": new Number(form_data["difficulty"]),
      "enjoyability": new Number(form_data["enjoyability"]),
      "usefulness": new Number(form_data["usefulness"]),
      "review": form_data["review"]
    }
  );
  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
  newRating.save(afterNew);
  function afterNew(err)
  {
    if(err) {console.log(err); res.send(500);}
    else
    {
      res.redirect('/courses/CSE '+form_data["course"]);
    }
  }
}