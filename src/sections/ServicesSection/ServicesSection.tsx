import { Button, Grid2, Paper } from '@mui/material';
import styles from './ServicesSection.module.css';

const ServicesSection = () => {

    return (
        <>
            <Grid2 container columns={12}>
                <Grid2 className={styles.titleContainer} size={{xs: 10, sm: 6}} offset={{xs: 1, sm: 3}} >
                    <h1>Nossos serviços</h1>
                    <p>Criamos, cocriamos e transformamos os negócios digitais de empresas e as ajudamos a crescer.</p>
                </Grid2>
                <Grid2 container className={styles.cardsContainer} size={10} offset={1} spacing={2}>
                    <Grid2 className={styles.gridCard} size={{xs: 12, sm: 4}}>
                        <Paper className={styles.serviceCard}>
                            <img src='./assets/icons/DevSoftwareIcon.svg' />
                            <span>🔥Mais procurado</span>
                            <h2>Desenvolvimento de sites e Landing Pages</h2>
                            <p>Criamos páginas e sites estratégicos que transformam visitantes em clientes. Focados em resultados, cada elemento guia o usuário até a ação desejada. Aumente suas conversões com uma presença online otimizada.</p>
                        </Paper>
                    </Grid2>
                    <Grid2 className={styles.gridCard} size={{xs: 12, sm: 4}}>
                        <Paper className={styles.serviceCard}>
                            <img src='./assets/icons/TIIcon.svg' />
                            <h2>Tráfego pago</h2>
                            <p>Com o tráfego pago, sua empresa aparece para o público certo, no momento exato. Nossos especialistas em mídia paga otimizam cada anúncio para alcançar seus clientes ideais e aumentar suas conversões, gerando um retorno rápido sobre o investimento. Pare de esperar pelos resultados e veja seu negócio crescer agora!</p>
                        </Paper>
                    </Grid2>
                    <Grid2 className={styles.gridCard} size={{xs: 12, sm: 4}}>
                        <Paper className={styles.serviceCard}>
                            <img src='./assets/icons/ProductIcon.svg' />
                            <h2>Identidade visual</h2>
                            <p>A identidade visual é o que torna sua marca inesquecível. Com um design estratégico e alinhado aos seus valores, criamos uma presença que fala diretamente ao seu público e se destaca da concorrência. Mais que estética, nossa equipe desenvolve um visual que transmite a essência da sua marca em cada detalhe.</p>
                        </Paper>
                    </Grid2>
                </Grid2>
                <Grid2 container className={styles.requestContainer} size={10} offset={1} spacing={2}>
                    <Grid2 size={{xs: 12, sm: 10}}>
                        <p>Faça parte do grupo empresas que impulsionam seu crescimento e fidelizam seus clientes. Vá além, transforme seu negócio!</p>
                    </Grid2>
                    <Grid2 className={styles.buttonGridContainer} size={{xs: 10, sm: 2}} offset={{xs: 1, sm: 0}}>
                        <Button color="secondary" variant="contained">solicitar orçamento!</Button>
                    </Grid2>
                </Grid2>
            </Grid2>
        </>
    )
}

export default ServicesSection;