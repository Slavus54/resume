import {Datus} from 'datus.js'
import {createSignal} from 'solid-js'

import Contacts from './components/Contacts'
import Jobs from './components/Jobs'
import Projects from './components/Projects'
import Courses from './components/Courses'
import Softs from './components/Softs'
import technologies from './api/technologies'

function App() {
  const datus = new Datus()

  const [date] = createSignal(datus.now('date'))

  return (
      <div class="main">
          <img 
              src="/profile_photo.jpg"
              class="photo additional_photo"
          />
          
          <h2>Вячеслав Куприянов</h2>

          <span class="about">
              <b>(Frontend / Fullstack) JavaScript Developer </b> из г. Новосибирск, Россия <br />
              Коммерческий опыт: <b>~ 7 месяцев</b> ||  Всего в веб-разработке: <b>4 года</b> <br />
              Желаемый доход: <b>40 тыс.</b> || Ранг: <span id='pined'>Junior +</span>
          </span>

          <div class="items little">
            <Contacts />
          </div>

          <span class="about">Тел: <i>8-(913)-457-93-50</i> || Почта: <i>x.mirosfromsibir@gmail.com</i> || Телеграм: <i>@slavus54</i></span>

          <h2>Технологичесий стек</h2>

          <p class="technologies">
              {technologies.map(el => <><b>{el.title}:</b> {el.skills.join(', ')}<br /></>)}
          </p>

          <h2>Коммерческий опыт</h2>

          <Jobs />

          <h2>Лучшие проекты</h2>

          <Projects first={0} second={12} />
    
          <h3 class="text">Остальные проекты расположены на <b>GitHub</b> с их подробным описанием, стеком и нововведениями.</h3>
          <button><a href="https://github.com/Slavus54?tab=repositories">Смотреть</a></button>
    
          <Projects first={12} />       

          <p class="window">
            Сейчас работаю над библиотекой <a href="https://github.com/Slavus54/datus.js">Datus.js</a> и платформой <a href='https://github.com/Slavus54/shirex.ru'>ShireX.ru</a>
          </p>

          <h2>Статистика</h2>

          <div class='items stats half'>
            <div class='item dark_blue'>
              7 веб-приложений
            </div>
            <div class='item blue'>
              3 библиотеки на JS
            </div>
            <div class='item dark_blue'>
              4 свёрстанных cайта
            </div>
            <div class='item blue'>
              3 приложения на чистом JS
            </div>
          </div>

          <h2>Образование</h2>

          <div class="items half courses">
            <Courses />
          </div>
      
          <h2>IT-Факты</h2>
          
          <p class="article">
              Имею опыт реализации нескольких <span id='pined'>open-source</span> библиотек на JS, которые опубликованы в npmjs. <br /> Активно работаю над их поддержкой и продвижением, часто использую в своих проектах.
          </p>

          <p class="article">
              Помимо разработки веб-приложений, на протяжении 4 лет тренируюсь на платформе <span id='pined'>CodeWars</span>. <br />В итоге решил <b>150 задач</b> сложностью 7-5 кю.
          </p>

          <p class="article">
              В конце II семестра по дисциплине "Информационные технологии и основы программирования" получил <br /><span id='pined'>100 баллов</span> в зачётку, став лучшем студентом на потоке.
          </p>

          <p class="article">
              Реализую собственные алгоритмы по работе с объектами, массивами, функциями и строками с последующей оценкой их временной сложности по <span id='pined'>Big O</span>.
          </p>

          <h2>Навыки</h2>

          <div class="items half soft">
            <Softs />
          </div>

          <div class="footer">
              Новосибирск | 01.09.2019 - {date()}
          </div>
    </div>
  );
}

export default App;
