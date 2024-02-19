import { useState,useEffect } from "react";

function EventInfo() {

  const [events, setevents]=useState([])
  useEffect(() => {
    fetch('https://informatik2.ei.hv.se/eventmanagement/api/ActivityTypes')
    //convert the data to json
    .then((response) => response.json())
    .then ((actualData) => {
      console.log(actualData)
      setevents(actualData)
      
    })
    // in order to catch error
    .catch((err) => {
      console.log(err.message);
    });
  }, []);
    return (
      <div>
        <h1 className= "header"> Event information. An Api from the grupe project</h1>
        <table className="center">
          <tbody>
            <tr>
              
              <th>Event type</th>
              <th>Information about the event</th>
            </tr>
          
          {events.map((event) => { return (
            <tr>
              
              <td>{event.name}</td>
              <td>{event.description}</td>
            </tr>
          )})}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default EventInfo;
  //useeffect is a function to avoid prop when loading larg amount of data