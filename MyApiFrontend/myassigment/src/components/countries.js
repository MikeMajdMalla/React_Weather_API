import { useState,useEffect } from "react";

function Countries() {

  const [lands, setlands]=useState([])
  useEffect(() => {
    fetch('http://localhost:5078/api/Countries')
    //convert the data to json
    .then((response) => response.json())
    .then ((actualData) => {
      //console.log(actualData)
      setlands(actualData)
      //the data will bo stored in (lands) setlands is a method to stor the acutalData inside land
    })
    // in order to catch error
    .catch((err) => {
      console.log(err.message);
    });
  }, []);
    return (
      <div>
        <h1 className= "header"> Country list using my own API </h1>
        <table className="center">
          <tbody>
            <tr>
              <th>Country name</th>
              <th>Zip code</th>
              <th>Continent</th>
            </tr>
          </tbody>
          {lands.map((country) => { return (
            <tr>
              <td>{country.name}</td>
              <td>{country.zipCode}</td>
              <td>{country.continent}</td>
            </tr>
          )})}

        </table>
      </div>
    );
  }
  
  export default Countries;
  //useeffect is a function to avoid prop when loading larg amount of data