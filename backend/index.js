const express = require("express");
const cors = require("cors");
const { getPost, createPost } = require("./controllers/postsController");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Api Likeme");
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await getPost();
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/posts", async (req, res) => {
  try {
    await createPost(req.body);
    res.status(201).send("Post creado con exito");
  } catch (error) {
    res.status(400).send(error);
  }
});

/*
app.delete("/posts/:id", async (req, res) => {
  const postId = req.params.id;
  try {
    const deletedPost = await deletePost(postId);
    res.status(200).send(`Post con ID ${postId} eliminado correctamente`);
  } catch (error) {
    res.status(400).send(`Error al eliminar el post con ID ${postId}: ${error.message}`);
  }
});

app.put("/posts/:id", async (req, res) => {
  const postId = req.params.id;
  const { titulo, url, descripcion, likes } = req.body;
  try {
    await updatePost(postId, { titulo, url, descripcion, likes });
    res.status(200).send(`Post con ID ${postId} actualizado correctamente`);
  } catch (error) {
    res.status(400).send(`Error al actualizar el post con ID ${postId}: ${error.message}`);
  }
});

*/
app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));
