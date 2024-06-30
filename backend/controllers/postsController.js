const { pool } = require("../config/db");

const getPost = async () => {
  try {
    const query = "SELECT * FROM posts;";
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    throw new Error(`Error al obtener el posts: ${error.message}`);
  }
};

const createPost = async ({ titulo, url, descripcion, likes = 0 }) => {
  try {
    const query =
      "INSERT INTO posts (titulo,img,descripcion,likes) VALUES ($1,$2,$3,$4) RETURNING *";
    const values = [titulo, url, descripcion, likes];
    const { rows } = await pool.query(query, values);
    return rows;
  } catch (error) {
    console.log(error)
    throw new Error(`Error al guarda el posts: ${error.message}`);
  }
};

module.exports = { getPost, createPost };
