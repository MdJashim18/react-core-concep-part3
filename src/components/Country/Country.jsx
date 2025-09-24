import React, { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountries,handleVisitedFlag}) => {
    // console.log(country.name.common);
    const [visited,setVisited] = useState(false)
    const handleVisited = ()=>{
        // console.log("Button Visited")
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // setVisited(visited? false : true)

        setVisited(!visited);
        handleVisitedCountries(country);
    }

    // const handleFlagvisited = ()=>{
    //     handleVisitedFlag(country);
    // }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name : {country.name.common} </h3>
            <p>Population : {country.population.population}</p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"} </p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'} </button>
            <button onClick={()=>{handleVisitedFlag(country.flags.flags.png)}}>Visited Flag</button>
        </div>
    );
};

export default Country;