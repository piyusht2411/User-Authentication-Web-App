module.exports.home = function(req,resp){
    resp.render('home', {
        title:"home"
    });
}