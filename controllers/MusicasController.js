import express from "express";
const router = express.Router();

// ROTA Musicas
router.get("/Musicas", function (req, res) {
  // 1. DADOS: Use um nome de variável claro para os dados
  const musicasLista = [
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
    // Adicione mais uma música aqui para ter 5 ou mais registros!
    {
      nome: "Só os Loucos Sabem",
      ano: "2009",
    },
  ];

  // 2. RENDER: Use um nome de chave que a sua View espera (Musicas)
  res.render("Musicas", {
    Musicas: musicasLista, // <-- Corrigido: Envia a lista musicasLista sob a chave 'Musicas'
  });
});

export default router;
