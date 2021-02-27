const express = require('express');
const bodyParser = require('body-parser')

// const router1 = express.Router();           //Routers
// const router2 = express.Router();

const app = express();

app.use(bodyParser.json())              //Set api or client request data to direct get into req.body
app.use(bodyParser.urlencoded({extended: false}))

app.set('port', process.env.PORT || 3000);

app.use('/public', express.static(__dirname + '/public'));

// app.get('/', (req, res) =>{
//     res.sendFile(`${__dirname}/public/index.html`)
//     // res.send('Working')
// })

// app.get('/user', (req, res) =>{
//      res.json([{id: 'Farrukh'},{id: 'Taha'}]);
// })

// router1.get('/', (req, res) => res.send('Api v1'))                              //Router setting
// router1.get('/checkv1/:username', (req, res) =>  res.json(req.params))
// router2.get('/', (req, res) => res.send('Api v2'))
// router2.get('/checkv2/:username', (req, res) =>  res.json(req.params))

// app.use('/apiV1', router1)                                                      // reference router
// app.use('/apiV2', router2)
// Methods

// app.get('/setCookie', (req, res) => {
//     res.cookie('myFirstCookie', 'Pakistan Zindabad')                             // set cookies
//     res.send('Cookie Set....');
// })

// app.get('/clearCookie', (req, res) => {                                          // remove cookies
//     res.clearCookie('_xsrf')
//     res.send('Cookie Set....');
// })

// let logs = (req, res, next) =>{
//     console.log(`${new Date()}: ${req.method}: ${req.url}`)                      // middleware function
//     next()
// }

// app.get('/', logs, (req, res) =>{                                                // add logs middleware in res
//     res.json(req.query)
// })

app.post('/', (req, res) =>{
    res.json(req.body)
})

// for run server
app.listen(app.get('port'), () => {
    console.log(`Express server start on: http://localhost:${app.get('port')}`);
});