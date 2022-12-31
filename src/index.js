import Koa from 'koa'

const app = new Koa()
app.use((ctx) => {
  ctx.res.end('hello vercel')
})

app.listen(80)
