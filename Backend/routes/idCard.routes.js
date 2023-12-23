const express = require('express');
const router = express.Router();
const multer = require('multer')
const {fetchDetails,updateDetails} = require('../controllers/idCard.controllers')


//============================== Handling File Upload using Multer ============================================


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage: storage })


//============================== Routes for OCR Application ==================================================== 
router.post('/add',upload.single('image'),fetchDetails);
router.put('/update/:id',updateDetails);

//===============================================================================================================

module.exports = router;