const express = require('express');
const app = express();
const port = process.env.port || 5000;

app.get('/', (req, res) => {
    res.send('tech api is running');
})

app.listen(port, () => {
    console.log('techadminware server running on this port', port);
})