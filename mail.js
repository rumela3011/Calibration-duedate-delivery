/*----------Sending update emails---------- */
const nodemailer = require('nodemailer');
const { getMaxListeners } = require('process');
const cron = require('node-cron');

 //Email message options
 var mailList = 'chikughosal@gmail.com, rumela_201800570@smit.smu.edu.in, foryouserenity@gmail.com, akashs123456789@gmail.com';
 const mailOptions = {
     from: 'rumela.testmail@gmail.com',
     to: mailList,
     subject: 'E-mail regarding calibration of equipments',
     text:'Greetings! Your equipment calibration might be pending, please refer to the website and do the needful. This is an auto-generated mail, do not reply to it.'
 };
 //Email transportation
 const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth:{
         user: 'rumela.testmail@gmail.com',
         pass: 'rumela@123'
     }
 });

 //Auto-generating the email
 //E-mail scheduled at 10:00 AM, every 10 days
 cron.schedule('0 10 */10 * *',() =>{

 transporter.sendMail(mailOptions, (error,info)=>{
     if(error){
         console.log(error);
     }else{
         console.log('Email sent:' + info.response);
     }
 });
})