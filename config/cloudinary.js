//setup Cloudinary:
const cloudinary = require('cloudinary').v2;

cloudinary.config({
   cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET
});
module.exports = cloudinary;

// Cloudinary is basically a cloud platform for image & video storage — think of it as a smarter, 
// more powerful alternative to storing files locally.

// Cloudinary is a cloud-based media storage + optimization service used to upload, store, resize,
// compress, secure, and deliver images/videos VERY efficiently.

/*
🧠 How it Works
1.User uploads an image →
2.Your backend sends the file to Cloudinary →
3.Cloudinary stores it + returns a URL →
4.You save that URL in MongoDB →
5.Frontend displays the image using that URL

DONE ✔

*/