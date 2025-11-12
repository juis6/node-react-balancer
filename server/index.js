import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config({ path: join(__dirname, '..', '.env') })

const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json)
app.use(morgan)

app.get('/', (req, res) => {
    res.json({
        status: 'OK'
    })
})

app.listen(() => {
    console.log(`Server is listening on port ${PORT}`)
    console.log(`Following link http://localhost:${PORT}`)
})