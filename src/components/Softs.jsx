import soft from '../api/soft'

const Softs = () => soft.map(el => 
    <div class="item card">
        {el.title}
        <h5>Уровень: {el.level}</h5>     
    </div>  
)

export default Softs