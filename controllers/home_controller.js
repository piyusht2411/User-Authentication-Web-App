module.exports.home = function(req,resp){
    console.log(req.cookies);
    resp.render('home', {
        title:"home"
    });
}