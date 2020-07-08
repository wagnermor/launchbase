const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCash: true
})

server.get("/", function (req, res) {
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/47096330?s=460&u=3195f362cc6afec6a72666f33ebff54fa520e12d&v=4",
        name: "Wagner Moreira",
        role: "Programador",
        description: 'Programador front-end, desenvolvendo novas habilidades para solução de desafios na web. Estudante na <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>.',
        links: [
            { name: "Github", url: "https://github.com/wagnermor"},
            { name: "Twitter", url: "https://twitter.com/wagnerianomor"},
            { name: "Linkedin", url: "https://linkedin.com/in/wagnermor"}
        ]
    }
    return res.render("about", { about: about })//{ about: about } = { chave: variável }
})

server.get("/portfolio", function (req, res) {
    return res.render("portfolio", {items: videos})
})

server.listen(5000, function() {
    console.log("server is runing man!")
})