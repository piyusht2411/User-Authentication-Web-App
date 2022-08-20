module.exports.home = function(req,resp){
    console.log(req.cookies);
    resp.cookie('user', 25);
    resp.render('home', {
        title:"home"
    });
}