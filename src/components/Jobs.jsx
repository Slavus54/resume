import {createSignal} from 'solid-js'
import jobs from '../api/jobs'

const Jobs = () => {
    const [label, setLabel] = createSignal('Наведите для получения большей информации об опыте') 

    return (
        <div class="main">
            <span class='pale' id='experience'>{label()}</span>

            <div class="items half">
                {jobs.map(el => 
                    <div class="item panel dark" onMouseOver={() => setLabel(el.info)} onMouseLeave={() => setLabel('Наведите для получения большей информации об опыте')}>
                        {el.title}<br />
                        ({el.technologies})
                        <span class="pale">{el.position}</span>
                        <span>{el.time}</span>  
                    </div> 
                )}
            </div>
        </div>
    )
} 

export default Jobs