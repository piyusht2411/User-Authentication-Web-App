const User =  require('../models/user');

module.exports.profile = function(req,resp){
    resp.render('user_profile', {
        title:"profile"
    });
}

module.exports.signup = function(req,resp){
    resp.render('user_signUp', {
        title: "Social chat | Sign Up"
    })
}
module.exports.signIn = function(req,resp){
    resp.render('user_signIn', {
        title: "Social chat | Sign In"
    })
}

module.exports.create = function(req,resp){
    if(req.body.password != req.body.ConfirmPassword){
        return resp.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){ console.log('error finding user in signing up'); return;}
        if(!user){
            User.create(req.body, function(err, user){
                if(err){ console.log('error in creating for signing up'); return}
                return resp.redirect('/users/sign-in');
            })
        }
        else{
            return resp.redirect('back');
        }
    });
}

