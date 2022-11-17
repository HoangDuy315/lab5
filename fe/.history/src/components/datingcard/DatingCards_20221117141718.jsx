import React, { useEffect, useState } from "react";
import DatingCard from 'react-tinder-card' 
import './DatingCards.css'
import axios from './Axios'


const DatingCards = () => {

    const [people, setPeople ] = useState([])

    useEffect(() => {
      async function fetchData() {
        const req = await axios.get("/dating/cards")
        setPeople(req.data)
      }
      fetchData()
    
     
    }, [])
    
    const swiped = (direction, nameToDelete) => {
        console.log("receiving" + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    }

  return <div className="datingCards">
    <div className="datingCards_container">
      {people.map((person) => (

      ))}
    </div>
  </div>;
};

export default DatingCards;
