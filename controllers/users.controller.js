module.exports.profile = function(req,resp){
    resp.render('user_profile', {
        title:"profile"
    });
}

module.exports.signup = function(req,resp){
    resp.render('user_signUp', {
        title: "Sign Up"
    })
}
module.exports.signIn = function(req,resp){
    resp.render('user_signIn', {
        title: "Sign In"
    })
}