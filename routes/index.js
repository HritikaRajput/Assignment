
/*
 * GET home page.
 */
 
var mongoose = require( 'mongoose' );
var Comment = mongoose.model( 'Comment' );

exports.index = function ( req, res ){
  Comment.find( function ( err, comments, count ){
    res.render( 'index', {
        title : 'Comment System',
        comments : comments
    });
  });
}; 

exports.create = function ( req, res ){
  new Comment({
    username : req.body.username,
    content : req.body.comment,
    created : Date.now(),
    upvote:0,
    downvote:0
  }).save( function( err, comment, count ){
    res.redirect( '/' );
  });
};

exports.upvote = function ( req, res ){
  Comment.findOneAndUpdate({"username":req.body.username, "content":req.body.content},{$inc:{"upvote":1}},{returnNewDocument: true},function( err, comment, count ){
    res.redirect( '/' );
  });
};

exports.downvote = function ( req, res ){
  Comment.findOneAndUpdate({"username":req.body.username, "content":req.body.content},{$inc:{"downvote":1}},{returnNewDocument: true},function( err, comment, count ){
    res.redirect( '/' );
  });
};