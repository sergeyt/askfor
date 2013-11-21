var askfor = require('./index');

askfor(['user', 'password'], function(answers) {
  console.log(answers);
});