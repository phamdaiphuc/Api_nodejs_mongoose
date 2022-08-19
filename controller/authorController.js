const { Author,Book }=require("../model/model");
const authorController={
    addAuthor: async( req,res )=>{
        // res.status(200).json(req.body);
        try{
            const newAuthor= new Author(req.body);
            const saveAuthor= await newAuthor.save();
            res.status(200).json(saveAuthor);
        }
        catch(err){
            res.status(500).json(err);
        }
        },

    // getAllauthors: async(req,res)=>{
    //     try{
    //        const authors = await Author.find(); 
    //        res.status(299).json(authors);
    //     }catch(err){
    //         res.status(500).json(err);
    //     }

    // }
    };
module.exports = authorController;