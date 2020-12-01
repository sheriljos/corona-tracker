import React from 'react';
import { Card, Chart, CountryPicker } from './Components';
import styles from './App.module.css';
// Imported also like a variable
import { fetchData } from './api/index.js'

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({
            data: fetchedData
        })
    }

    async countryHandler(country) {
        const fetchedData = await fetchData(country);

        this.setState({
            data: fetchedData,
            country
        })
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={ styles.container }>
                <Card data={ data }/>
                <CountryPicker 
                    countryHandler={ country => this.countryHandler(country) }/>
                <Chart data={ data } country={ country }/>
            </div> 
        )
    }
}

export default App;