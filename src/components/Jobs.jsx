import jobs from '../api/jobs'

const Jobs = () => jobs.map(el => 
    <div class="item panel dark">
        {el.title}<br />
        ({el.technologies})
        <span class="pale">{el.position}</span>
        <span>{el.time}</span>  
    </div>  
)

export default Jobs