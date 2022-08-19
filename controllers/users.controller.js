module.exports.profile = function(req,resp){
    resp.render('user_profile', {
        title:"profile"
    });
}

module.exports.sign_in = function(req,resp){
    resp.render('user_signIn', {
        title:"Sign In"
    })
}
module.exports.sign_up = function(req,resp){
    resp.render('user_signup', {
        title:"Sign Up"
    })
}

module.exports.create = function(req,resp){
    

}
module.exports.createSession = function(req,resp){
    
}