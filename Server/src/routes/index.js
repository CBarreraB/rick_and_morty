const express = require("express");
const router = express.Router();

// Importar controladores
const { getCharById } = require("../controllers/getCharById");
const loginController = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/favs");

// Definir rutas
router.get("/character/:id", getCharById);
router.get("/login", loginController);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

// Exportar router
module.exports = router;
