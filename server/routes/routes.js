const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        bundle: './dist/home.bundle.js'
    });
});

module.exports = router;
