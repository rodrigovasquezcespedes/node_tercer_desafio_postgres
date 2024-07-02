const express = require('express')
const router = express.Router()
const { getPost, createPost } = require('../controllers/postsController')

router.get('/', async (req, res) => {
  try {
    const posts = await getPost()
    res.status(200).send(posts)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.post('/', async (req, res) => {
  try {
    await createPost(req.body)
    res.status(201).send('Post creado con exito')
  } catch (error) {
    res.status(400).send(error)
  }
})
module.exports = router
