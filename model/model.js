const mongoose = require("mongoose");
const create = mongoose.Schema;


//BOOK SCHEMA
const bookSchema =new create({
    name:{
        type: String,
        require: true
    },
    publishedDate:{
        type: String
    },
    generes:{
        type: [String]
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Author"

    }
});
//END BOOK SCHEMA

//AUTHOR SCHEMA
const authorSchema = new create ({
    name:{
        type: String
    },
    year:{
        type: Number
    },
    books:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Book"
    }]
})
//END AUTHOR SCHEMA 


let Book =mongoose.model("Book",bookSchema);

let Author =mongoose.model("Author",authorSchema);

module.exports={Book,Author};