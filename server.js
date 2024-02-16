import express from 'express'
import {config} from 'dotenv'
import projects from './api/projects.js'
import jobs from './api/jobs.js'

config()

const PORT = process.env.PORT

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/projects', async (req, res) => {

    let {limit} = req.query

    let html = `${projects.slice(0, limit).map(el => `
        <div class="item panel">
            ${el.title}
            <div class="items small">
                <h5>${el.category}</h5>
                <h5>${el.year}</h5>
            </div>
            <a href=${el.url}>Подробнее</a>
        </div>
    `).join('')}` 

    res.send(html)
})

app.get('/jobs', async (req, res) => {
    let html = `${jobs.map(el => `
        <div class="item card">
            ${el.title}
            <h6>${el.position} <br /> (${el.start}-${el.end})</h6>      
        </div>  
        `
    ).join('')}`

    res.send(html)
})

app.listen(PORT, () => console.log(`ExpressJS started on port ${PORT}`))