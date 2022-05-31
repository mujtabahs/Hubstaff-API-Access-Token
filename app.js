let express = require('express')
let app = express()

Hubstaff = require('@app-masters/hubstaff-node-client');

// Hubstaff API credentials
const port = process.env.PORT || 3000

app.get('', (req, res) => {
    let refresh_token = req.query.refresh_token
    console.log(refresh_token)
    const tokenObj = Hubstaff.getAccessToken(refresh_token).then(function (tokenObj) {
        let auth_data = {
            accessToken: tokenObj.accessToken,
            refreshToken: tokenObj.refreshToken
        }
        res.send(auth_data)
    }).catch(function (err) {
        console.log(err);
        res.send(err)
    });

})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})