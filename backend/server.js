const express = require('express')
const mongoose = require('mongoose');
const routes = require('./routes/ToDoRoute')
const cors = require('cors');

require('dotenv').config()
const app =express()
const PORT = process.env.PORT || 5000
const MONGOURL = process.env.MONGOURL;

app.use(express.json())
app.use(cors())

mongoose.connect(MONGOURL).then(() => {
    console.log("DataBase is Connected succesfully.");
    app.listen(PORT, () => {
        console.log(`Server is running on Port ${PORT}`);
    })
}).catch((error) => console.log(error));


app.use(routes);