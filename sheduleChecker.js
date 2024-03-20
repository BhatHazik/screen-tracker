var cron = require('node-cron');
const sheluder = (req, res)=>{
    cron.schedule('1-5 * * * *', () => {
        res.json({message:'timer is on'})
  console.log('running every minute to 1 from 5');
});
}
module.exports = sheluder