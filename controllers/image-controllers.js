const Image = require('../models/image');
const uploadToCloudinary = require('../helpers/cloudinary-helper');
const fs = require('fs');

const uploadImage = async(req,res)=>{
   try{

      //check if file is missing in req object
      if(!req.file){
         return res.status(400).json({
            sucess: false,
            message: 'File is required. Please upload an Image'
         })
      }
      
      //upload to cloudinary
      const { url, publicId } = await uploadToCloudinary(req.file.path);

      //store the image url and publicId along with the uploaded userId in db
      const newlyUploadedImage = new Image({
         url,
         publicId,
         uploadedBy: req.user.userId

      })

      await newlyUploadedImage.save();

      // delete the file from local storage 'uploadFolder'
      // fs.unlinkSync(req.file.path);       // <-- only admin can delete files

      res.status(201).json({
         sucess: true,
         message: 'Image Uploaded!',
         image: newlyUploadedImage
      })

   }catch(error){
      console.error(error);
      res.status(500).json({
         sucess: false,
         message: 'Something went wrong! Please try again'
      })
   }
};

const fetchImages = async(req,res)=>{
   try{
      const images = await Image.find({ uploadedBy: req.user.userId });

      if(images){
         res.status(200).json({
            sucess: true,
            data: images
         })
      }
   }catch(error){
      console.error(error);
      res.status(500).json({
         sucess: false,
         message: 'Something went wrong! Please try again'
      })
   }
};


module.exports = {
   uploadImage,
   fetchImages
}