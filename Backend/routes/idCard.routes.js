const express = require('express');
const router = express.Router();
const multer = require('multer')
const {fetchDetails,updateDetails, deleteDetails, getAllDetails} = require('../controllers/idCard.controllers')


//============================== Handling File Upload using Multer =================================


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage: storage })


//============================== Routes for OCR Application ======================================== 

router.post('/fetch',upload.single('image'),fetchDetails);
router.put('/update/:id',updateDetails);
router.delete('/delete/:id',deleteDetails);
router.get('/getAllDetails',getAllDetails)

//==================================================================================================

module.exports = router;