const express = require('express');
const app = express();
const PORT = 3000 ;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



app.get(('/ahmed'),function(req,res,next) {

    res.send('Hello world!!!');
    

})
const users = [
  { id: 1, name: 'Ali', email: 'ali1@example.com'  , password:'12345' },
  { id: 2, name: 'Ali2', email: 'ali2@example.com' , password:'123452' },
  { id: 3, name: 'Ali3', email: 'ali3@example.com' , password:'123453' },
  { id: 4, name: 'Ali4', email: 'ali4@example.com' , password:'123454' },
  { id: 5, name: 'Ali5', email: 'ali5@example.com' , password:'123455' },
  { id: 6, name: 'Ali6', email: 'ali6@example.com' , password:'123456' },
  { id: 7, name: 'Ali7', email: 'ali7@example.com' , password:'123457' },
  { id: 8, name: 'Ali8', email: 'ali8@example.com' , password:'123458' },
  { id: 9, name: 'Ali9', email: 'ali9@example.com' , password:'123459' },
  { id: 10, name: 'Ali10', email: 'ali10@example.com' , password:'1234510' },
];
app.post('/login', function(req, res, next) {
    const inputemail = req.body.inputemail;
    const inputpassword = req.body.inputpassword;

    
    const user = users.find(u => u.email === inputemail && u.password === inputpassword);

    if (user) {
      
        console.log("User logged in successfully");
        res.send('login successfull! You are Welcom in the web');
    } else {
       
        console.log('Error: Invalid email or password');
        res.send('Check password and email please');
    }
});





app.listen(PORT, () => {
    console.log(`server is running, on port : ${PORT}`)
})