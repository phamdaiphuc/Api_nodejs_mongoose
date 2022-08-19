const { Author,Book }=require("../model/model");
const authorController={

     //GET ALL AUTHOR
     getAllauthors: async(req,res)=>{
        try{
           const authors = await Author.find(); 
           res.status(200).json(authors);
        }catch(err){
            res.status(500).json(err);
        }

    },
    //END GET ALL AUTHOR


    //GET AUTHOR 
    getAuthors: async(req,res)=>{
        try{
            const author= await Author.findById(req.params.id).populate("books");
            res.status(200).json(author);

        }
        catch(err){
            res.status(500).json(err);
        }
    },
    //ADD NEW AUTHOR
    addAuthor: async( req,res )=>{
        //res.status(200).json(req.body);
        try{
            const newAuthor= new Author(req.body);
            const saveAuthor= await newAuthor.save();
            res.status(200).json(saveAuthor);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    //END ADD NEW AUTHOR
    deleteAuthor:async(req,res)=>{
        try{
            const delauthor =await Author.findByIdAndDelete(req.params.id)

        }
        catch(err){
            res.status(500).json(err);
        }
    }


   
    };
module.exports = authorController;