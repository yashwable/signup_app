const express = require('express') 
const signUpTempleteCopy = require ('../models/SignUpModels') 
const router = express.Router() 

router.post('/signup',(request,response) => {
    const signedUpUser = new signUpTempleteCopy({
        fullName : request.body.fullName,
        username : request.body.username,
        email : request.body.email,
        password : request.body.password
    })
    signedUpUser.save()
    .then((data) => {
        response.json(data) 
        console.log('successful')
    }).catch((err) => {
        response.json(err)
        console.log('error')
    }) 
})

module.exports = router 