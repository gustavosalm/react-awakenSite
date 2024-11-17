import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import styles from './OfferCardComponent.module.css';
import React from 'react';

type OfferCardComponent = {
    title: string,
    offerItems: string[]
}

const OfferCardComponent: React.FC<OfferCardComponent> = ({title, offerItems}) => {

    return (
        <>
            <div className={styles.cardTitle}>
                <img src='./assets/icons/StarIcon.svg' />
                <h2>{title}</h2>
            </div>
            <div className={styles.cardDivision}>
                <p>DETALHES</p>
                <div></div>
            </div>
            <List dense={false} className={styles.cardList} >
                {offerItems.map((text) => {
                    return (
                        <ListItem>
                            <ListItemIcon >
                                <img src='./assets/icons/CheckIcon.svg' />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                })}
            </List>
            <div className={styles.cardDivision}>
                <div></div>
            </div>
        </>
    )
}

export default OfferCardComponent;