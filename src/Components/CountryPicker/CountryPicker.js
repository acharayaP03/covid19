import React, { useState, useEffect } from 'react'
//import PropTypes from 'prop-types'
import { fetchCountries } from '../../API/api'

const CountryPicker = () => {

    const [ fetchedCountries, setFetchedCountries ] = useState([]);

    useEffect(() =>{
        const fetchAPI = async () => {
            setFetchedCountries( await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries])
    
    return (
        <div className="row d-flex justify-content-center mt-2 mb-2">
            <h3 className="text-center">Country</h3>
            <div className="col-md-8">
                <form>
                    <select className="form-select" aria-label="Default select example">
                        <option value="global">Global</option>
                        { fetchedCountries.map( (country, i) => <option key={i} value={country}>{country}</option>)}
                    </select>
                </form>
            </div>   
        </div>
    )
}

// Country.propTypes = {

// }

export default CountryPicker;
