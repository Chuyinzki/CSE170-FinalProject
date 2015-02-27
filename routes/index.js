
/*
 * GET home page.
 */

exports.view = function(req, res){
  var random_num = Math.random();

  if(random_num > 0.5){
    res.render("index");
  }else{
    res.render("index_alternate");
  }

};