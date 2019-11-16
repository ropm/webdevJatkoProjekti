const express = require('express');
const connectMongo = require('./configs/connection');

const app = express();

// Routes
const testRoute = require('./routes/testRoute');
app.use('/tests', testRoute);

// Home route
app.get('/', (req, res) => {
    res.send('On home, go to /tests');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectMongo().catch(err => console.log('Error connecting to mongodb...'));
});
