import { Grid2 } from '@mui/material';
import styles from './FooterComponent.module.css';

const FooterComponent = () => {

    return (
        <>
            <Grid2 className={styles.outerContainer} container columns={12}>
                <Grid2 size={4} offset={2}>
                    <img className={styles.logoImg} src='./assets/IntroLogo.svg' />
                    <p>©Todos os direitos reservados, 2024.</p>
                </Grid2>
                <Grid2 className={styles.rightContainer} size={4} offset={0}>
                    <p>Ou entre em contato via:</p>
                    <p><span>contato@awakenagencia.com.br</span></p>
                    <div className={styles.contacts}>
                        <img src='./assets/icons/WhatsappLogoIcon.svg' />
                        <img src='./assets/icons/InstagramLogoIcon.svg' />
                        <img src='./assets/icons/LinkedinLogoIcon.svg' />
                    </div>
                </Grid2>
            </Grid2>
        </>
    )
}

export default FooterComponent;