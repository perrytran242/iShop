const { users } = require('../../db/models');
const validation = require('../../helpers/validation');
const { tokenForUser, userDataToSend } = require('../../helpers/auth');

module.exports = async (req, resp) => {
    const { body: { firstName, lastName, email, password } } = req;

    try  {
        const errors = [];

        if(!firstName){
            errors.push('Missing first name');
        } else if(!validation.name(firstName)){
            errors.push('First name can only contain a-z, no special characters allowed');
        }

        if(!lastName){
            errors.push('Missing last name');
        } else if(!validation.name(lastName)){
            errors.push('Last name can only contain a-z, no special characters allowed');
        }

        if(!email){
            errors.push('Missing email address');
        } else if(!validation.email(email)){
            errors.push('Invalid email address given. Must be in following format: example@mail.com');
        }

        if(!password){
            errors.push('Missing password');
        } else if(!validation.password(password)){
            errors.push('Invalid password. Must contain upper and lower case letters, a number, special character, and at least 8 characters long');
        }

        if(errors.length){
            return resp.status(422).send({
                success: false,
                errors
            });
        }

        const existingUser = await users.findOne({
            where: { email }
        });

        if(existingUser){
            return resp.status(422).send('User already exists');
        }

        const newUser = users.build({
            email,
            firstName,
            lastName,
            password
        });

        await newUser.save();

        resp.send({
            success: true,
            token: tokenForUser(newUser),
            user: userDataToSend(newUser)
            // message: 'This is the sign up endpoint'
        });

    } catch(err){
        console.log('Sign Up Error: ', err);

        resp.status(500).send('Sign Up Failed');
    }
}