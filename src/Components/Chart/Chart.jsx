import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api/index.js'
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.Module.css';

function chartData(labels, confirmed, deaths) {
    return {
      labels: labels,
      datasets: [
        {
          label: 'Confirmed',
          data: confirmed,
          borderColor: 'rgba(103, 65, 114, 1)',
          backgroundColor: 'rgba(220, 198, 224, 1)',
        },
        {
          label: 'Deaths',
          data: deaths,
        },
      ]
    }
  }

const Charts = () => {
   const [dailyData, setDailyData] = useState([]);

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
        <div className={ styles.topPadding }>
            <Line
                data={ chartData(
                    dailyData.map(data => data.reportDate),
                    dailyData.map(data => data.confirmed.total),
                    dailyData.map(data => data.deaths.total)
                ) }
                width={ 700 }
                height={ 350 }/>
        </div>
    )
}

export default Charts;