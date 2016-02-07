const sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
const fs = require('fs');

const test = require('./output.json');
const lint = fs.readFileSync(`${__dirname}/lint.txt`, 'utf8');

sendgrid.send({
  to: 'petridw@gmail.com',
  from: 'hello@codesmith.io',
  subject: 'Hack Hour Result',
  html: '<html><body><p>' + JSON.stringify(test, null, 2) + '</p><p>' + lint + '</p></body></html>'
});
