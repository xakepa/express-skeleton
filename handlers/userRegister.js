const Users = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
    const { email, password, rePassword } = req.body;

    bcrypt.hash(password, 10).then(hashedPassword => {

        Users.create({ email, password: hashedPassword })
            .then((user) => {
                const token = jwt.sign({
                    userId: user._id
                },
                    process.env.JWT_SECRET);

                res.cookie('jwt', token);

            }).catch(console.error)
    })
}