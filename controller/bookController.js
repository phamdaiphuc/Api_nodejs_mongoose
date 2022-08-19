const {Book,Author}= require("../model/model");

const bookController={
    //POST BOOK
    addBook : async(req,res)=>{
        try{
            const newBook= new Book(req.body);
            const saveBook= await newBook.save();
            if(req.body.author){
                const author = Author.findById(req.body.author);
                await author.updateOne({$push:{ books:saveBook._id}});

            } 
            res.status(200).json(saveBook);
        }
        catch(err){
            res.status(500).json(err);

        }
    },
    //END POST BOOK 

    //GET BOOK ALL
    getBooks: async(req,res)=>{
        try{
           const books = await Book.find(); 
           res.status(200).json(books);
        }catch(err){
            res.status(500).json(err);
        }

    },
    //END GET BOOK ALL
    getBook: async(req,res)=>{
        try{
            const book = await Book.findById(req.params.id).populate("author");
            res.status(200).json(book);

        }
        catch(err){
            res.status(200).json(err);
        }

    },
    //DELETE BOOK AND DELETE ID 
    deleteBook:async(req,res)=>{
        try{
            await Book.updateMany(
                {author:req.params.id},
                {$pull:{author:req.params.id}}
            )
          const showdelete=  await Book.findByIdAndDelete(req.params.id);
            res.status(200).json(showdelete)
        }
        catch(err ){
            res.status(500).json(err)
        }
    }
};
module.exports=bookController;