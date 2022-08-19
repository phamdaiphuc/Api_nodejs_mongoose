const bookController = require("../controller/bookController");

const router= require("express").Router();
//POST BOOK
router.post("/",bookController.addBook);
//END POST BOOK 
//GET BOOK 
router.get("/",bookController.getBooks);
//END GET BOOK
//GET BOOK 
router.get("/:id",bookController.getBook);

//END GET BOOK
//DELETE BOOK
router.delete("/:id",bookController.deleteBook);
//END DELETE BOOK
 module.exports=router;
