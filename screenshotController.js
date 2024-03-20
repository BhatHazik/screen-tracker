const screenshot = require('screenshot-desktop');
// const fs = require('fs');
var cron = require('node-cron');
const screenshotController = ()=>{
    
        cron.schedule('1 * * * * * *', () => {
         screenshot({filename:"screenshot.png"}).then((img) =>{
            // res.json(img);
            // const fileRead = fs.writeFileSync("screensho.png", img);
            // if(fileRead){
            //     res.json({message:"ok"})
            // }
            // else{
            //     res.json({message:"no"})
            // }
        },{
            scheduled: true,
            timezone: "Asia/Kolkata"
          })
  //       res.json({message:'timer is on'});
  // console.log('running every minute to 1 from 5');
});
    
   
    
    
}
module.exports = {screenshotController}











// const screenshot = require('screenshot-desktop');
// // const fs = require('fs');
// var cron = require('node-cron');
// const screenshotController = async(req,res)=>{
//     try{
//         cron.schedule('* * * * * *', async() => {
//          await screenshot({filename:"screenshot.png"}).then((img) =>{
//             // res.json(img);
//             // const fileRead = fs.writeFileSync("screensho.png", img);
//             // if(fileRead){
//             //     res.json({message:"ok"})
//             // }
//             // else{
//             //     res.json({message:"no"})
//             // }
//         },{
//             scheduled: true,
//             timezone: "Asia/Kolkata"
//           })
//         res.json({message:'timer is on'});
//   console.log('running every minute to 1 from 5');
// });
//     }
//     catch(err){
//         console.log(err);
//     }
    
    
// }
// module.exports = {screenshotController}




// // const { setTimeout } = require('timers');
// const screenshot = require('screenshot-desktop');

// // Function to capture a screenshot after a delay
// async function captureAfterDelay(req, res) {
//     const delay = 300000; // Default delay is 5 minutes (300,000 milliseconds)

//     // Delay for the specified time
//     await new Promise(resolve => setTimeout(resolve, delay));

//     // Capture the screenshot
//     try {
//         const img = await screenshot();
//         // Respond with the captured screenshot
//         res.send(img);
//     } catch (error) {
//         // Handle errors
//         console.error('Error capturing screenshot:', error);
//         res.status(500).send('Internal Server Error');
//     }
// }

// module.exports = {
//     captureAfterDelay
// };