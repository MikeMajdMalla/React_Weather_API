import {useState} from "react";

function Weather() {
  const [temprature, settemprature] = useState('');
  const [humidity, sethumidity] = useState('');
  const [city, setcity] = useState('');
  const [country, setcountry] = useState('');
  const [description, setdescription] = useState('');

  const getWeather = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=313c7079a82194a7a62d5d7aa7069892`)
      .then ((response) => response.json())
      .then ((actualdata) => {
        settemprature(actualdata.main.temp);
        sethumidity(actualdata.main.humidity);
        setcity(actualdata.name);
        setdescription(actualdata.weather[0].description)
        setcountry(actualdata.sys.country);
      })
      .catch ((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h1 className="header">Weather</h1>
      <form onSubmit={getWeather}>
        <input type="text" name="city" placeholder="city"/>
        <input type="text" name="country" placeholder="country"/>
        <button type="submit"> Get Weather</button>
      </form>
      <div>
       <p>{temprature}</p>
         <p>{humidity}</p>
         <p>{city}</p>
         <p>{country}</p>
         <p>{description}</p>
        </div>
    </div>
  );
}

export default Weather;

