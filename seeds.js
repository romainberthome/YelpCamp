var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {name: "Cloud Rest",
    image: "http://photosforclass.com/download/2617191414",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {name: "Dessert messa",
    image: "http://photosforclass.com/download/4835814837",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {name: "Geneston camp",
    image: "http://photosforclass.com/download/2182093741",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    }
    ]

function seedDB(){
    Campground.remove({}, function(err){
        // if (err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err,campground){
        //         if(err){
        //             console.log(err)
        //         } else {
        //             console.log("added a campground");
        //             Comment.create({
        //                 text:"this place is great, but I wish there was internet",
        //                 author:"Homer"
        //             }, function(err, comment){
        //                 if(err){
        //                     console.log(err);
        //                 } else{
        //                     campground.comments.push(comment);
        //                     campground.save();
        //                     console.log("comment added");
        //                 }
        //             })
        //         }
        //     });
        // });
    })
}


module.exports = seedDB;