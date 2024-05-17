


const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())

app.get('/items', async (req, res) => {
    try {
        const apiRes = await fetch('https://api.thedogapi.com/v1/breeds')
        if (!apiRes.ok) throw new Error(`HTTP error! status: ${apiRes.status}`)
        const data = await apiRes.json()

        res.json(data)
    } catch (error) {
        console.error('fetch error')
        res.status(500).send('Error retrieving list')
    }
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})