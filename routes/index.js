var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/webhooks/fractal', (req, res) => {
  console.log('Webhook received:', req.body);
  // Handle the webhook payload here

  // res.status(200).send('Webhook received successfully');
});

module.exports = router;
