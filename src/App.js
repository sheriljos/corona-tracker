import React from 'react';
import { Card, Chart, CountryPicker } from './Components';
import styles from './App.module.css';
// Imported also like a variable
import { fetchData } from './api/index.js'

class App extends React.Component {
    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({
            data: fetchedData
        })
    }

    render() {
        const { data } = this.state;

        return (
            <div className={ styles.container }>
                <Card data={ data }/>
                <CountryPicker />
                <Chart />
            </div> 
        )
    }
}

export default App;