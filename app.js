const express = require('express');
const connectMongo = require('./configs/connection');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectMongo().catch(err => console.log('Error connecting to mongodb...'));
});
