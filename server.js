const cors = require('cors')
const express = require('express');
const axios = require('axios')


const app = express();


app.use(cors());

app.get('/', async(req, res)=>{

    const {data} = await axios('https://jsonplaceholder.typicode.com/users')
    
   
    return res.json(data)
    //return res.json([
      //  {nome:'Lucas'},
        //{nome:'Pedro'}
    //])
})

app.listen('4567')