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
            //DUNG DE REQUEST GIA TRI JSON VAO BODY
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
            await Author.updateMany(
                {books:req.params.id},
                {$pull:{books:req.params.id}}
            )
            //DONG LENH NAY DUNG DE XOA ID LIEN KET GIUA AUTHOR VA BOOK (TIM KIEM VA XOA DI)
            await Author.findByIdAndDelete(req.params.id);
            res.status(200).json("Complete Delete Author And Delete Book Id Author")
            //KHI DUNG findByIdAndDelete THI GIA TRI CUA ID BOOK SE BI XOA DI . VA GIA TRI ID 
            //AUTHOR CUA BOOK ID SE THANH GIA TRI NULL

        }
        catch(err){
            res.status(500).json(err);
        }
    }


   
    };
module.exports = authorController;