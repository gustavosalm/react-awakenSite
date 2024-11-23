import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import styles from './OfferCardComponent.module.css';
import React from 'react';

type OfferCardComponent = {
    title: string,
    offerItems: string[],
    buttonLabel: string,
    priceLabels?: string[],
    variant?: boolean
}

const OfferCardComponent: React.FC<OfferCardComponent> = ({
    title,
    offerItems,
    buttonLabel,
    priceLabels = ['', ''],
    variant = false
}) => {

    return (
        <div className={(variant) ? styles.darkColor : styles.defaultColor}>
            <div className={styles.cardTitle}>
                <img 
                    src={(variant) ? './assets/icons/CrownIcon.svg' : './assets/icons/StarIcon.svg'}
                />
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
                <div className={styles.cardPrice}>
                    {(!variant) ? 
                        <>
                            <p>DE R${priceLabels[0]}</p>
                            <h2>POR R${priceLabels[1]}/mês</h2>
                        </> :
                        <h2>VALORES DIFERENCIADOS</h2>
                    }
                </div>
            <button
                className={styles.cardButton + ' mainButton'}
                onClick={() => window.open('http://wa.me/5521983921129', '_blank')}
            >{buttonLabel}</button>
        </div>
    )
}

export default OfferCardComponent;