module.exports.index = function(req,resp){
    return resp.json(200, {
        message:"list of posts",
        posts:[]
    })
}