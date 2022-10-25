const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('tech api is running');
})


app.listen(port, () => {
    console.log('techadminware server running on this port', port);
})