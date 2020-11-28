import React from 'react';
import { Grid } from '@material-ui/core'
import OneCard from './OneCard.jsx';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }}) => {

    if (!confirmed && !recovered && !deaths && !lastUpdate) {
        return "Loading!!!";
    }

    return(
        <Grid container justify="center" alignItems="center">
            <Grid item xs={ 12 } md={ 3 }>
                <OneCard 
                    title={ "Infected" }
                    number= { confirmed.value }
                    date={ lastUpdate }
                    text={ "Number of infected COVID-19 cases" }
                    barColor={ "purple" }
                />
            </Grid>
            <Grid item xs={ 12 } md={ 3 }>
                <OneCard 
                    title={ "Recovered" }
                    number= { recovered.value }
                    date={ lastUpdate }
                    text={ "Number of recovered COVID-19 cases" }
                    barColor={ "green" }
                />
            </Grid>
            <Grid item xs={ 12 } md={ 3 }>
                <OneCard 
                    title={ "Deaths" }
                    number= { deaths.value }
                    date={ lastUpdate }
                    text={ "Number of deaths COVID-19 cases" }
                    barColor={ "grey" }
                />
            </Grid>
        </Grid>
    )
}

export default Cards;
