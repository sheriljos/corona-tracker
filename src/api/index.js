import fetch from 'axios';

// Exported like a variable
export const fetchData = async () => {
    const URL = 'https://covid19.mathdro.id/api';

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await fetch(URL);

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
