const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('CloudOps CI/CD - v2.0'));
app.listen(3000, () => console.log('App running on 3000'));
module.exports = app;