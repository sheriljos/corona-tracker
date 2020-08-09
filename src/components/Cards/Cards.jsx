import React from 'react';
import CountUp from 'react-countup';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({ data : { confirmed, recovered, deaths, lastUpdate} }) => {
    console.log(lastUpdate)
    if (!confirmed || !recovered || !deaths || !lastUpdate) {
        return "Loading!!!"
    }

    return (
        <div className={styles.container}>
            {/* flex container */}
            <Grid container spacing = {3} justify = "center">
                {/* item 1 */}
                <Grid item component = {Card} xs={ 12 } md={ 3 } className={ cx(styles.card, styles.infected) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={ 0 } end={ confirmed.value } duration={ 2.75 } />
                        </Typography>
                        <Typography color="textSecondary">
                            { (new Date(lastUpdate)).toDateString() }
                        </Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                {/* item 2 */}
                <Grid item component = {Card} xs={ 12 } md={ 3 } className={ cx(styles.card, styles.recovered) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={ 0 } end={ recovered.value } duration={ 2.75 } />
                        </Typography>
                        <Typography color="textSecondary">
                            { (new Date(lastUpdate)).toDateString() }
                        </Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                {/* item 3 */}
                <Grid item component = {Card} xs={ 12 } md={ 3 } className={ cx(styles.card, styles.deaths) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={ 0 } end={ deaths.value } duration={ 2.75 } />
                        </Typography>
                        <Typography color="textSecondary">
                            { (new Date(lastUpdate)).toDateString() }
                        </Typography>
                        <Typography variant="body2">Number of deaths due to COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
