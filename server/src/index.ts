import express from 'express'

const app = express()
const port: number = 9000

// Other primative types include: any, void, boolean, null, string, undefined

app.get('/', (req, res) => res.send('Hello world'))
app.listen(port)

console.log(`[server] running on port ${port}`)