import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core'
import styles from './Card.Module.css';
import CountUp from 'react-countup';

const OneCard = ({ title, number, date, text, barColor }) => {

    return(
        <Card className={ styles.card_margin}>
            <CardContent>
            <Typography color="textSecondary" gutterBottom>
                { title }
            </Typography>
            <Typography variant="h5" component="h2">
                <CountUp start={0} end={ number } duration={ 1 } separator=" "/>
            </Typography>
            <Typography color="textSecondary">
                { new Date(date).toDateString() }
            </Typography>
            <Typography variant="body2" component="p">
                { text }
            </Typography>
            </CardContent>
            <div 
                className={ styles.bottombar }
                style={{ borderBottom: `.5em solid ${barColor}` }} />
        </Card>
    )
}

export default OneCard;
