import projects from '../api/projects'

const Projects = () => projects.map(el => 
    <a class="item card" href={el.url}>    
        {el.title}
        <div class="items small">
            <span class="blue">{el.category}</span>
            <span>{el.year}</span>
        </div>      
    </a>
)

export default Projects