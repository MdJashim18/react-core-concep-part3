import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries,setVisitedCountries] = useState([]);

    const [visitedFlag,setVisitedFlag] = useState([]);

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const handleVisitedCountries= (country)=>{
        // console.log('handle visited country clicked',country);

        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (Flag)=>{
        console.log("Flag Visited");
        const newVisitedFlag = [...visitedFlag,Flag];
        setVisitedFlag(newVisitedFlag);
    }

    // console.log(countries)
    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            <h1>Total Country Visited : {visitedCountries.length} </h1>
            <h1>Total Flag Visited : {visitedFlag.length} </h1>
            <div className='visited-flag'>
                {
                    visitedFlag.map(flag=> <img src={flag} ></img> )
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country=> <li>{country.name.common} <img src="" alt="" /> </li>
                    )
                }
            </ol>
            <div className='countries'>

                {
                    countries.map(country => <Country key={country.cca3.cca3} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;