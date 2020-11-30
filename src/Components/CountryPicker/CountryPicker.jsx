import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { fetchCountries } from '../../api/index'

const CountryPicker = () => {
    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        const retrieveCountries = async() => {
            setCountries(await fetchCountries());
        }

        retrieveCountries();
    }, []);

    return(
        <FormControl>
            <InputLabel htmlFor="age-native-helper">Select your country</InputLabel>
            <NativeSelect>
                { countries.map((country, i) => 
                    <option  key={ i } value={ country.iso3 }>{ country.name }</option>
                ) }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;