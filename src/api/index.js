import Axios from 'axios';

// Exported like a variable
export const fetchData = async ( country="") => {
    let URL = 'https://covid19.mathdro.id/api';

    if (country) {
        URL = `${URL}/countries/${country}`;        
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await Axios.get(URL);

        return { 
            confirmed,
            recovered,
            deaths,
            lastUpdate 
        };
    } catch (error) {
        console.error('error occured')
    }
}


export const fetchDailyData = async () => {
    const URL = 'https://covid19.mathdro.id/api/daily';

    try {
        const { data } = await Axios.get(URL);

        return data;
    } catch (error) {
        console.error('error occured')
    }
}

export const fetchCountries = async ()  => {
    const URL = 'https://covid19.mathdro.id/api/countries';

    try {
        const { data: { countries }} = await Axios.get(URL);

        return countries;
    } catch (error) {
        console.error('error occured in fetching countries')
    }
}