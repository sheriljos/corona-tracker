import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api/index.js'
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.Module.css';

function barData(data) {
  return {
    labels: ['Infected', 'Recoverd', 'Deaths'],
    datasets: [
      {
        label: 'Country specific chart',
        borderColor: 'rgba(0,0,0,1)',
        data,
        backgroundColor: [
          'purple',
          'green',
          'grey'
        ],
      }
    ]
  }
}

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

const Charts = ( { data:{ confirmed, recovered, deaths }, country }) => {
   const [dailyData, setDailyData] = useState([]);
   let chart;

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        const fetchApi = async() => {
            setDailyData(await fetchDailyData())
        }

        fetchApi();
    }, []);
    // Empty array makes sure that call is made only during mount

    if (country && confirmed && deaths && recovered) {
      chart = 
        <Bar
          data={ barData([ confirmed.value, recovered.value, deaths.value ]) }
          options={{
            title:{
              display:true,
              fontSize:20
            }
          }}
          width={ 500 }
          height={ 350 }/>
    } else {
      chart = 
        <Line
          data={ chartData(
              dailyData.map(data => data.reportDate),
              dailyData.map(data => data.confirmed.total),
              dailyData.map(data => data.deaths.total)
          ) }
          width={ 500 }
          height={ 350 }/>
    }

    return(
        <div className={ styles.topPadding }>
            { chart }
        </div>
    )
}

export default Charts;