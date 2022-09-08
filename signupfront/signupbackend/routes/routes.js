const express = require('express');
signUpTempleteCopy = require ('../models/SignUpModels');
const router = express.Router();

router.post('/signup',(request,response) => {
    const signedUpUser = new signUpTempleteCopy({
        fullName : request.body.fullName,
        username : request.body.username,
        email : request.body.email,
        password : request.body.password
    })
    signedUpUser.save()
    .then((data) => {
        response.json(data);
    }).catch((err) => {
        response.json(err)
    });
})

module.exports = router;