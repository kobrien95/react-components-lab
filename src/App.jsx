
import WeatherForecast from './components/WeatherForecast/WeatherForecast.jsx';

// src/App.jsx

const App = () => {

  
  const weatherForecasts = [
    {
      day: 'Mon',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];
  

  return (
    <>
    <h1>Local Weather</h1>
    <section>
      <div className="weather">
        <h2>Mon</h2>
          <img src="https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg" alt="sun icon" />
            <p><span>conditions: </span>sunny</p>
          <p><span>time: </span>Morning</p>
      </div>
      <div className="weather">
        <WeatherForecast day="Tue" img="https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg" alt="moon icon"
        conditions="clear" time="Night" />
      </div>
      <div className="weather">
        <WeatherForecast day="Wed" img="https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg" alt="clouds with lighting icon" 
        conditions="stormy" time="All Day" />
      </div>
      <div className="weather">
        <WeatherForecast day="Thu" img="https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg" alt="sun overcast by cloud icon"
        conditions="overcast" time="Evening" />
      </div>
      <div className="weather">
        <WeatherForecast day="Fri" img="https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg" alt="moon overcast by clouds icon"
        conditions="cloudy" time="Night" />
      </div>
    </section>
  </>

    );
}

export default App

