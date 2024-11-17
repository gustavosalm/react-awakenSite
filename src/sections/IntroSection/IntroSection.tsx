import { Button, Grid2 } from '@mui/material';
import styles from './IntroSection.module.css';

const IntroSection = () => {

    return (
        <>
            <Grid2 container className={styles.mainContainer} columns={12} spacing={5} >
                <Grid2 offset={1} size={{xs: 8, sm: 4}}>
                    <img src='./assets/IntroLogo.svg' />
                    <h1>impulsione seu negócio com uma presença digital de impacto!</h1>
                    <img className={styles.teamWorkImg} src='./assets/TeamWork.svg' />
                    <p>No mundo digital, cada interação é uma oportunidade única para entender, envolver e converter. Combinamos uma boa comunicação unida a estratégias de marketing para impulsionar seu negócio.</p>
                    <Button color="secondary" variant="contained">gostei da ideia!</Button>
                </Grid2>
                <Grid2 className={styles.imageContainer} size={1} offset={{xs: 0, sm: 1}}>
                    <img src='./assets/backgrounds/BackgroundLines.svg' />
                </Grid2>
            </Grid2>
        </>
    )
}

export default IntroSection;