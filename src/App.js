import React from 'react';
import { Card, Chart, CountryPicker} from './Components';
import styles from './App.module.css';
// Imported also like a variable
import { fetchData } from './api/index.js'

class App extends React.Component {
    async componentDidMount() {
        const data = await fetchData();

        console.log(data);
    }

    render() {
        return (
            <div className={ styles.container }>
                <Card />
                <Chart />
                <CountryPicker />
            </div> 
        )
    }
}

export default App;