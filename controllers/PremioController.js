import express from "express";
const router = express.Router();

// ROTA Premio
router.get("/Premio", function (req, res) {
  const Premio = [
    { nome: "Tamo ai na atividade", categoria: "Grammy Latino" },
    { nome: "Papo é reto", categoria: "Audiência Internacional" },
  ];
  res.render("Premio", {
    produtos: Premio,
  });
});

export default router;