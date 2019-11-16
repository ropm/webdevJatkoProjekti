const express = require('express');
const si = require('systeminformation');

const router = express.Router();


router.get('/', (req, res) => {
    si.system()
        .then(data => res.send(data))
        .catch(error =>res.send(error))

});

module.exports = router;