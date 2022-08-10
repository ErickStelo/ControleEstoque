const bcrypt = require('bcrypt');
const myPlaintextPassword = 'erick2104';
bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
    console.log(hash);
});