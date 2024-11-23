import { Grid2 } from '@mui/material';
import styles from './FooterComponent.module.css';

const FooterComponent = () => {

    return (
        <>
            <Grid2 className={styles.outerContainer} container columns={12}>
                <Grid2 className={styles.logoContainer} size={{xs: 12, sm: 4}} offset={{xs: 0, sm: 2}}>
                    <img className={styles.logoImg} src='./assets/IntroLogo.svg' />
                    <div className={styles.pcStartText}>
                        <p><strong>Vá além da mudança</strong></p>
                        <p>transforme seu negócio!</p>
                    </div>
                    <p>©Todos os direitos reservados, 2024.</p>
                </Grid2>
                <Grid2 className={styles.rightContainer} size={{xs: 10, sm: 4}} offset={{xs: 1, sm: 0}}>
                    <div className={styles.startText}>
                        <p><strong>Vá além da mudança</strong></p>
                        <p>transforme seu negócio!</p>
                    </div>
                    <p>Ou entre em contato via:</p>
                    <p><span>contato@awakenagencia.com.br</span></p>
                    <div className={styles.contacts}>
                        <img src='./assets/icons/WhatsappLogoIcon.svg' onClick={() => window.open('http://wa.me/5521983921129', '_blank')} />
                        <img src='./assets/icons/InstagramLogoIcon.svg' onClick={() => window.open('https://instagram.com/agenciawaken', '_blank')} />
                        <img src='./assets/icons/LinkedinLogoIcon.svg' />
                    </div>
                </Grid2>
            </Grid2>
        </>
    )
}

export default FooterComponent;