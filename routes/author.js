const authorController = require("../controller/authorController");

const router = require("express").Router();
//GET ALL AUTHOR
router.get("/",authorController.getAllauthors)
//END GET ALL AUTHOR
//GET AUTHOR 
router.get("/:id",authorController.getAuthors)
//END GET AUTHOR
//POST AUTHOR
router.post("/",authorController.addAuthor);
//END POST AUTHOR
//DELETE AUTHOR AND UPDATE ID BOOK 
router.delete("/:id",authorController.deleteAuthor);
//END DELETE AUTHOR AND UPDATE ID BOOK


module.exports=router;