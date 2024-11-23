import { Grid2, Paper } from '@mui/material';
import styles from './MotiveSection.module.css';

const MotiveSection = () => {

    return (
        <>
            <Grid2 container className={styles.mainContainer} columns={12}>
                <Grid2 className={styles.imgSide} offset={1} size={5}>
                    <img src='./assets/MotiveSectionAsset.svg' />
                </Grid2>
                <Grid2 className={styles.textSide} size={{xs: 10, sm: 5}} offset={{xs: 1, sm: 0}}>
                    <h1>Para quem é a <span>AWAKEN</span>?</h1>
                    <p>A Awaken é uma agência pra toda empresa que quer atrair, se relacionar, converter e fidelizar clientes no digital.</p>
                    <img className={styles.mobileSideImg} src='./assets/MotiveSectionAsset.svg' />
                    <Paper className={styles.card}>
                        <img src='./assets/icons/ClinicIcon.svg' />
                        <p><strong>Clínicas e escritórios.</strong> Atraia novos clientes e fortaleça sua marca com estratégias digitais focadas em conversão e credibilidade da sua clínica ou escritório.</p>
                    </Paper>
                    <Paper className={styles.card}>
                        <img src='./assets/icons/EnterpriseIcon.svg' />
                        <p><strong>Pequenas e médias empresas.</strong> Tanto no ramo de produtos, quanto serviços e independente do tamanho do seu negócio, a Awaken ajuda a impulsionar o crescimento do seu negócio com uma presença digital poderosa e acessível, criada para gerar resultados reais.</p>
                    </Paper>
                    <Paper className={styles.card}>
                        <img src='./assets/icons/ServiceIcon.svg' />
                        <p><strong>Prestadores de serviços.</strong> A Awaken também te ajuda a Encontre clientes certos e aumentar sua visibilidade online com campanhas personalizadas que destacam seu diferencial.</p>
                    </Paper>
                </Grid2>
            </Grid2>
        </>
    )
}

export default MotiveSection;