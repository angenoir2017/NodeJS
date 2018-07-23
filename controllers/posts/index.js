var Post = require('../../models/posts');

var createPost = function(req , res){
  var post = new Post(req.body);

  post.save(function(err,post){
    if(err){res.send(500,err);}
    res.json(200,post);
  });
};
var getPosts = function(req,res){
  Post.find(function(err,posts){
    if(err){res.send(500,err);}
    res.json(200,posts);
  });
};
var getPost = function(req,res){
  Post.findById(req.params.id, function(err,post){
    if(err){res.send(500,err);}
    res.json(200,post);
  });
};

var updatePost = function(req ,res){
  Post.findById(req.params.id, function(err,post){
    if(err){res.send(500,err);}

    if(req.body.title){post.title = req.body.title;}
      if(req.body.body){post.body = req.body.body;}
        if(req.body.title){post.title = req.body.author;}
        if(req.body.postImage){post.postImage = req.file.path;}

      post.save(function(err,post){
            if(err){res.send(500,err);}
            res.json(200,post);
          });
  });
};

var deletePost = function(req, res){
  Post.findByIdAndRemove(req.params.id, function(err, post){
      if(err){res.send(500,err);}
      res.json(200,{"deleted":true});
  });
};

module.exports ={
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
};
