module.exports.profile = function(req,resp){
    resp.render('user_profile', {
        title:"profile"
    });
}