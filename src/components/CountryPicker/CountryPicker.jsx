import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../api';


const CountryPicker = () => {
    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);
    
    const getCountries = async() => {
        setCountries(await fetchCountries())
    }

    console.error(countries);

    return (
        <div>
            <h2>Country Picker</h2>
            <FormControl>
                <NativeSelect>
                    <option value="10">Global</option>
                    {countries.map(country => 
                        <option value={country}>{country}</option>
                    )}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;