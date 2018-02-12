const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Erik Watson :: Video Game and Web Developer' })
})

module.exports = router
