// dependencies - express
const express = require('express');

// sets inital port 
const PORT = process.env.PORT || 3001;
const app = express();

// dependencies - routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// let the app know to access content in the public folder
app.use(express.static('public'));

// use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// starts port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});