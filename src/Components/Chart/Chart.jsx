import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api/index.js'

const Charts = () => {
   const [dailyData, setDailyData] = useState({});

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        const fetchApi = async() => {
            setDailyData(await fetchDailyData())
        }

        fetchApi();
    }, []);
    // Empty array makes sure that call is made only during mount

    console.log(dailyData)

    return(
        <h1>Chart</h1>
    )
}

export default Charts;