import ClockApp from "./projects/ClockApp";
import WeatherApp from "./projects/WeatherApp";
import QuizApp from "./projects/QuizApp";
import logo from './logo.svg';
import ClockAppImage from './img/ClockAppImage.png'
import WeatherAppImage from './img/WeatherAppImage.png'
import QuizAppImage from './img/QuizAppImage.png'
import React, { useState} from 'react';

import './App.css';

const App = () => {
  const [runApp , setrunApp] = useState(true)
  const [runthis , setrunthis] = useState({})
  const apps = [
    {
      "name":<ClockApp/>,
      "title": "Clock App",
      "image": ClockAppImage
    },
    {
      "name":<WeatherApp/>,
      "title": "Weather App",
      "image": WeatherAppImage
    },
    {
      "name":<QuizApp/>,
      "title": "Quiz App",
      "image": QuizAppImage
    },
  ]

  const list = []
  for (var i=0;i<3;i++) {
    const obj = apps[i]
    list.push(
      <div class="col" key={i}> 
        <div class="card appCard">
          <img src={obj.image} class="card-img-top" alt="." />
          <div class="card-body">
            <h5 class="card-title">{obj.title}</h5>
            <p class="card-text">...</p>
            <button 
              class="btn btn-primary"
              onClick={()=>{
                setrunApp(false)
                setrunthis({...obj.name})
              }}
              
              >Watch</button>
          </div>
        </div>
      </div>
      )
  }
  const runCallback=(cb)=>{return cb();};
  return (<>
    {runApp ?
      (<>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="">
            <img src={logo} alt=""width="30"height="24"class="d-inline-block align-text-top"/>
            Bill Tsol
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        <main class="mt-5">
          <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              {list}
            </div>
          </div>
        </main>
      </>
      ):(
      <>
        {runCallback(() => {
          if(!runApp){
            return runthis;
          }
          return ;
        })}
      </>)
    }
  </>);
}

export default App;