import courses from '../api/courses'

const Courses = () => courses.map(el => 
    <div class="item panel huge">
        {el.title}
        <img src={el.path} class="icon" />
        <h5 class="pale">{el.category}</h5>
        <p>${el.start} - {el.end}</p>      
    </div>  
)

export default Courses