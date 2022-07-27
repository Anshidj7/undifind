var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
const makeWASocket = require("@adiwajshing/baileys").default
const qrcode = require("qrcode-terminal")

function inrlmd() {
  let inrl = makeWASocket({
    auth: state,
    printQRInTerminal: true,
    browser: ["ɪɴʀʟ-ᴍᴅ", "Opera", "3.0.0"]
  })
}
  res.render('index', { title: inrlmd() });
});

module.exports = router;
