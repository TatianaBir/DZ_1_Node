var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tania.biryukova@gmail.com',
    pass: '***'
  }
});

var mailOptions = {
  from: 'tania.biryukova@gmail.com',
  to: 'tania.biryukova@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<div border-width="1px border-color="green"><h1 color="green">Привет</h1><p>Я отправила письмо через Node</p><p>Пробую разные стили прописать</p></div>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 