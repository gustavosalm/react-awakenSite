import { Button, Grid2 } from '@mui/material';
import styles from './IntroSection.module.css';

const IntroSection = () => {

    return (
        <>
            <Grid2 container className={styles.mainContainer} columns={12} spacing={5} >
                <Grid2 offset={2} size={4}>
                    <img src='src\assets\IntroLogo.svg' />
                    <h1>impulsione seu negócio com uma presença digital de impacto!</h1>
                    <img className={styles.teamWorkImg} src='src\assets\TeamWork.svg' />
                    <p>No mundo digital, cada interação é uma oportunidade única para entender, envolver e converter. Combinamos uma boa comunicação unida a estratégias de marketing para impulsionar seu negócio.</p>
                    <Button color="secondary" variant="contained">gostei da ideia!</Button>
                </Grid2>
                <Grid2 className={styles.imageContainer} size={1}>
                    <img src='src/assets/backgrounds/BackgroundLines.svg' />
                </Grid2>
            </Grid2>
        </>
    )
}

export default IntroSection;