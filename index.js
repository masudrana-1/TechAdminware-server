const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;

app.use(cors());

// const category = require('./data/category.json');
const course = require('./data/courses.json');
const e = require('express');

app.get('/', (req, res) => {
    res.send('tech api is running');
})


app.get('/course', (req, res) => {
    res.send(course);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const seletedCourse = course.find(c => c._id === id);
    res.send(seletedCourse);
})

app.listen(port, () => {
    console.log('techadminware server running on this port', port);
})