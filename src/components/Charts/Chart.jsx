import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css';

const Chart = () => {
    const [ dailyData, setDailyData ] = useState({});

    useEffect(() => {
        getDailyData();
    }, []);
    
    const getDailyData = async() => {
        setDailyData(await fetchDailyData())
    }

    console.error(dailyData)
    
    const lineChart = (
        dailyData.length ?
            <Line data = {
                    {
                        labels: dailyData.map(({date}) => date ),
                        datasets: [
                        {
                            label: 'Confirmed',
                            borderColor: 'salmon',
                            pointBorderColor: 'salmon',
                            pointBackgroundColor: '#fff',
                            data: dailyData.map(({confirmed}) => confirmed ),
                        },
                        {
                            label: 'Deaths',
                            borderColor: 'grey',
                            pointBorderColor: 'grey',
                            pointBackgroundColor: '#fff',
                            pointHoverBackgroundColor: 'grey',
                            data: dailyData.map(({deaths}) => deaths )
                        }
                        ]
                    }
                }
            /> :
            'Loading!!'
    )

    return (
        <div>
            { lineChart }
        </div>
    )
}

export default Chart;