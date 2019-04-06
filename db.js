var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Comment = new Schema({
    username : String,
    content  : String,
    created  : Date,
    upvote : Number,
    downvote : Number
});
 
mongoose.model( 'Comment', Comment );
 
mongoose.connect( 'mongodb://localhost/data' );