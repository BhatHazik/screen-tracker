const express = require('express');
const screenshotController = require('./screenshotController');
const sheluder = require('./sheduleChecker')
const app = express();
const port = 4000;

// Define routes
app.post('/capture', screenshotController.screenshotController);
app.post('/shedule', sheluder);
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});








// const screenshot = require('screenshot-desktop');

// // Delay for 5 minutes (300,000 milliseconds)
// setTimeout(() => {
//     // Capture a screenshot
//     screenshot().then((img) => {
//         // img: Buffer filled with image data
//         // You can do something with the captured screenshot here
//         console.log('Screenshot captured after 5 minutes!');
//     }).catch((err) => {
//         // Handle errors if any
//         console.error('Error capturing screenshot:', err);
//     });
// }, 300000); // 5 minutes in milliseconds