import express from 'express'
const router = express.Router()

// ROTA Banda
router.get("/Banda", function (req,res){
    const Banda = [
        {nome: "Chorão", idade: "55"},
        {nome: "Champignon", idade: "47"},
        {nome: "Marcão", idade: "55"},
        {nome: "Renato Pelado", idade: "60"},
        {nome: "Bruno Graveto", idade: "42"},
        {nome: "Heitor Gomes", idade: "44"},
        {nome: "Thiago Castanho", idade: "50"},
    ]
    res.render("Banda", {
        Banda: Banda
    })
})

export default router