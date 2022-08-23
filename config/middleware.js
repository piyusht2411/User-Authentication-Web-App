module.exports.setFlash = function(req, resp, next){
    resp.locals.flash = {
        'success': req.flash('success'),
        'error': req.flash('error')
    }

    next();
}