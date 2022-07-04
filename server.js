const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');


let serviceAccount = require("./second-hand-store-c8d3f-firebase-adminsdk-zvhz8-6a22d02213.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();




let staticPath = path.join(__dirname, "public");
const app = express();


app.use(express.static(staticPath));
app.use(express.json());



app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})
// app.get("/index", (req, res) => {
//     res.sendFile(path.join(staticPath, "index.html"));
// })

app.get('/Product', (req, res) => {
    res.sendFile(path.join(staticPath, "Product.html"));
})

app.get('/Search', (req, res) => {
    res.sendFile(path.join(staticPath, "Search.html"));
})

app.get('/add-product', (req, res) => {
    res.sendFile(path.join(staticPath, "addProduct.html"));
})


app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})


app.post('/signup', (req, res) => {
  // console.log(req.body);
    let { name, email, password, number, tac, notification } = req.body;

    // form validations
    if(name.length < 3){
        return res.json({'alert': 'name must be 3 letters long'});
    } else if(!email.length){
        return res.json({'alert': 'enter your email'});
    } else if(password.length < 8){
        return res.json({'alert': 'password should be 8 letters long'});
    } else if(!number.length){
        return res.json({'alert': 'enter your phone number'});
    } else if(!Number(number) || number.length < 10){
        return res.json({'alert': 'invalid number, please enter valid one'});
    } else if(!tac){
        return res.json({'alert': 'you must agree to our terms and conditions'});
    }

    db.collection('users').doc(email).get()
    .then(user => {
        if(user.exists){
            return res.json({'alert': 'email already exists'});
        } else{
            // encrypt the password before storing it.
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    req.body.password = hash;
                    db.collection('users').doc(email).set(req.body)
                    .then(data => {
                        res.json({
                            name: req.body.name,
                            email: req.body.email,
                            seller: req.body.seller,
                        })
                    })
                })
            })
        }
    })


})

app.get('/login', (req, res) => {
    res.sendFile(path.join(staticPath, "login.html"));
})



app.post('/login', (req, res) => {
      let {email, password} = req.body;
      if(!email.length || !password.length){
        return res.json({'alert': 'fill all the inputs'})
      }

      db.collection('users').doc(email).get()
      .then(user => {
        if(!user.exists){
          return res.json({'alert': 'log in email does not exist'})
        } else {
          bcrypt.compare(password, user.data().password, (err, result) => {
              if(result){
                let data = user.data();
                return res.json({
                    name: data.name,
                    email: data.email,
                    seller: data.seller,
                })
              } else {
                return res.json({'alert': 'password incorrect'});
              }


          })
        }
      })
})


app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log('listening on port 3000.......');
})
