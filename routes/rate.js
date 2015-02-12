

exports.view = function(req, res) {
    var name = req.params.name;
    console.log("The course name is: " + name);
    res.render('rate', {
        'courseName': name
    });
};