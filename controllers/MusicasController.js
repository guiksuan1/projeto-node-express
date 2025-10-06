import express from "express";
const router = express.Router();

// ROTA Musicas
router.get("/Musicas", function (req, res) {
  const clientes = [
    {
      nome: "Céu azul",
      ano: "2012",
    },
    {
      nome: "Me encontra",
      ano: "2009",
    },
    {
      nome: "Senhor do tempo",
      ano: "2005",
    },
    {
      nome: "Proibida pra mim",
      ano: "1997",
    },
  ];
  res.render("Musicas", {
    clientes: Musicas,
  });
});

export default router;
