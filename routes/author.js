const authorController = require("../controller/authorController");

const router = require("express").Router();


//add author
router.get("/",authorController.addAuthor);



router.get("/",authorController.getAllauthors)
module.exports=router;