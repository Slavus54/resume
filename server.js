import express from 'express'
import {config} from 'dotenv'
import projects from './api/projects.js'
import jobs from './api/jobs.js'
import courses from './api/courses.js'
import soft from './api/soft.js'
import contacts from './api/contacts.js'

config()

const PORT = process.env.PORT

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/projects', async (req, res) => {

    let {limit} = req.query

    let html = `${projects.slice(0, limit).map(el => `
        <a class="item panel" href=${el.url}>    
            ${el.title}
            <div class="items small">
                <h5>${el.category}</h5>
                <h5>${el.year}</h5>
            </div>      
        </a>
    `).join('')}` 

    res.send(html)
})

app.get('/jobs', async (req, res) => {
    let html = `${jobs.map(el => `
        <div class="item panel">
            ${el.title} 
            (${el.technologies})
            <h5 class="pale">${el.position}</h5>
            <h6>С ${el.start} до ${el.end}</h6>  
        </div>  
        `
    ).join('')}`

    res.send(html)
})

app.get('/courses', async (req, res) => {
    let html = `${courses.map(el => `
        <div class="item panel">
            ${el.title}
            <h5 class="pale">${el.category}</h5>
            <h6>${el.start} - ${el.end}</h6>      
        </div>  
        `
    ).join('')}`

    res.send(html)
})

app.get('/soft', async (req, res) => {
    let html = `${soft.map(el => `
        <div class="item card">
            ${el.title}
            <h5>Уровень: ${el.level}</h5>     
        </div>  
        `
    ).join('')}`

    res.send(html)
})

app.get('/contacts', async (req, res) => {
    let html = `${contacts.map(el => `<a href=${el.url}><img src=${el.icon}></img></a>`).join('')}`

    res.send(html)
})

app.listen(PORT, () => console.log(`ExpressJS started on port ${PORT}`))