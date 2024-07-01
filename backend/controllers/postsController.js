const { pool } = require('../config/db')

const getPost = async () => {
  try {
    const query = 'SELECT * FROM posts'
    const { rows } = await pool.query(query)
    return rows
  } catch (error) {
    console.error(`Error al obtener los posts: ${error.message}`)
    throw new Error(`Error al obtener los posts: ${error.message}`)
  }
}

const createPost = async ({ titulo, url, descripcion, likes = 0 }) => {
  try {
    const query = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *'
    const values = [titulo, url, descripcion, likes]
    const { rows } = await pool.query(query, values)
    return rows
  } catch (error) {
    console.error(`Error al guardar el post: ${error.message}`)
    throw new Error(`Error al guardar el post: ${error.message}`)
  }
}

module.exports = { getPost, createPost }
