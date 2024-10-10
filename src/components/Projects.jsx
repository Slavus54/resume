import projects from '../api/projects'

const Projects = ({first = 0, second = projects.length}) =>
    <div class="items projects">
        {projects.slice(first, second).map(el => 
            <a class="item card" href={el.url}>    
                {el.title}
                <div class="items small">
                    <span class="blue">{el.category}</span>
                    <span>{el.year}</span>
                </div>      
            </a>
        )}
    </div>

export default Projects