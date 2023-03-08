const express = require('express');
let app = express();



app.get('/', (req, res) => {
    res.send('Home Page');
    console.log('You have visited the home page')
});
app.use(logger);
app.get('/', (req, res) => {
    res.send('Home Page');
    console.log('2')
});

app.get('/users', auth, (req, res) => {
    res.send('User Page');
    console.log('You have visited the user page')
});

function logger(req, res, next) {
    console.log('Log');
    next();
}
function auth(req, res, next){
    if(req.query.admin === 'true'){
        next();
    } else {
        res.send('Not Authorized');
    }
    console.log('Authorized');
    next();
}

app.listen(3000, () => {
    console.log('go to http://localhost:3000/');
});