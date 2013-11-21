# askfor

Mini node.js module to ask user prompts.

# USAGE

```javascript
var askfor = require('ask-for');

askfor(['user', 'password'], function(answers) {
  console.log(answers);
  // { user: 'foo', password: 'bar' }
});
```

