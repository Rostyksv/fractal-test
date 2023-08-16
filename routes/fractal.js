var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    console.log('Webhook received:', req.body);
    // Handle the webhook payload here

    res.status(400).send('Webhook received successfully');
});

module.exports = router;