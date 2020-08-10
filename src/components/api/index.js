import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {       
        const { data : { confirmed , recovered, deaths, lastUpdate } } = await axios.get(URL);
        
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${URL}/daily`);

        return data.map(item => ({            
            confirmed: item.totalConfirmed,
            deaths: item.deaths.total,
            date: item.reportDate,
        }))
    } catch (error) {
        
    }
}

export const fetchCountries = async () => {
    try {
        const { data : { countries }} = await axios.get(`${URL}/countries`);

        return countries.map(({name}) => name);
    } catch (error) {
        
    }
}