// Este é o seu Router/Controller
import express from "express";
const router = express.Router();

// ROTA Premio
router.get("/Premio", function (req, res) {
  // A lista de prêmios
  const premiosLista = [
    { nome: "Tamo ai na atividade", categoria: "Grammy Latino" },
    { nome: "Papo é reto", categoria: "Audiência Internacional" },
    { nome: "Melhor Álbum", categoria: "VMB 2005" },
    { nome: "Canção do Ano", categoria: "APCA 2003" },
    { nome: "Artista Revelação", categoria: "MTV Awards 2001" }, // Mínimo de 5 registros
  ];
  
  // Enviando a lista para a View com o nome 'premios'
  res.render("Premio", {
    premios: premiosLista, // <-- Chave 'premios'
  });
});

export default router;