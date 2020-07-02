const nodemailer = require('../config/nodemailer');


module.exports.newFriend = (other_user) =>{
    let htmlString = nodemailer.renderTemplate({other_user:other_user},'/friends/new_friend.ejs');
    nodemailer.transporter.sendMail({
        from:'vikasprajapati95@gmail.com',
        to:other_user.email,
        subject:'Quora!',
        html:htmlString
    },(err,info) => {
        if(err){
            console.log(err);
            return;
        }
      
        return;
    })
}