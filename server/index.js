import express from 'express'

const PORT = process.env.PORT

const app = express()

app.get('/', (req, res) => {
    res.json({
        msg: "Server is running!",
        status: true
    })
})

app.listen(() => {
    console.log(`Server is listening on port ${PORT}`)
    console.log(`Following link http://localhost:${PORT}`)
})