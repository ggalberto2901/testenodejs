const http = require('http')

const server = http.createServer((req,res)=>{
if (req.url === '/'){
    res.end('Acessou a home')
} else if (req.url === '/about'){
    res.end('Aqui está um breve resumo da nossa empresa')
} else {
res.end(`
<h1>Ops!!!</h1>
<p>Vc nao pode ver a pagina que vc esta procurando</p>
<a href='/'>Click aqui para retornar a home</a>`)
}
})

server.listen(5000)