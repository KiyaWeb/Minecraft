import express from "express";
const app = express();

app.use(express.static('public'));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//handle get to fetch 

app.get('/users', async (req,res)=>{

const response = await fetch('https://jsonplaceholder.typicode.com/users');
const users = await response.json();
  res.send(users[1])
});

app.listen(3000,()=>{
  console.log('server listening to port 3000')
})