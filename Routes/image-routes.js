const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware'); 
const upload = require('../middleware/upload-middleware');
const { uploadImage, fetchImages, deleteImage } = require('../controllers/image-controllers');

// route: /api/image/upload
router.post(
   '/upload',
   authMiddleware,               // must be first: verify token
   upload.single('image'),       // multer handler (must use .single)
   uploadImage                   // Do NOT use parentheses
);

//to get All images
router.get('/get',authMiddleware, fetchImages);


//delete image route
router.delete('/delete/:id', authMiddleware, adminMiddleware, deleteImage);

   

module.exports = router;
