import React from 'react';
import { Card, Chart, CountryPicker} from './Components';
import styles from './App.module.css';

class App extends React.Component {
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