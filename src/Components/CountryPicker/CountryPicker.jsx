import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { fetchCountries } from '../../api/index'

const CountryPicker = ({ countryHandler }) => {
    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        const retrieveCountries = async() => {
            setCountries(await fetchCountries());
        }

        retrieveCountries();
    }, []);

    function changeHandler(e) {
        e.preventDefault();

        countryHandler(e.target.value)
    }

    return(
        <FormControl>
            <NativeSelect onChange={ changeHandler }>
                <option  value="countries">Countries</option>
                { countries.map((country, i) => 
                    <option  key={ i } value={ country.iso3 }>{ country.name }</option>
                ) }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;