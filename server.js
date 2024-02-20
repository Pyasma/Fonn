// server.js

const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // Use the original filename
  }
})
const upload = multer({ storage: storage })

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle GET request to the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'About.html'));
});

// Handle POST request to upload a file
app.post('/upload', upload.single('image'), (req, res) => {
  // Redirect to the homepage after the upload is complete
  res.redirect('/');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
