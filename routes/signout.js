const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get("/", function(req, res, next) {
    req.session = null;
    res.redirect("/");
});

module.exports = router;