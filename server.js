const express = require('express');
const model = require('./model');
const Suzuki = model.Suzuki;
const app = express();
app.use(express.json());

app.use('/cars', ()=>{
    
})




app.listen(4000);