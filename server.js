//express utilizado para criar e configurar servidor
const express =  require("express")
const server = express()

const ideas = [ {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Curso de Programação",
    category: "Estudo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "https://rocketseat.com.br"
},

{
    img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
    title: "Exercício",
    category: "Saúde",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "https://rocketseat.com.br"
},

{
    img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
    title: "Meditatação",
    category: "Mentalidade",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "https://rocketseat.com.br"
},

{
    img: "https://image.flaticon.com/icons/svg/2729/2729021.svg",
    title: "Vídeo Game",
    category: "Entretenimento",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "https://rocketseat.com.br"
}
]

//configurar arquivos do site
server.use(express.static("public"))

//config nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server, 
    noCache: true,
})

//rota criada para capturar pedido do cliente e responder
server.get("/", function(req, res){
    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of reversedIdeas){
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", {ideas: lastIdeas})
})

server.get("/ideias", function(req, res){
    const reversedIdeas = [...ideas].reverse()

    return res.render("ideias.html", {ideas: reversedIdeas})
})

//servidor ligado na porta 3000
server.listen(3000)