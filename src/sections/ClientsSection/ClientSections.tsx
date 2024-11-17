import { Button, Grid2 } from '@mui/material';
import styles from './ClientSections.module.css';

const ClientSections = () => {

    return (
        <>
            <Grid2 className={styles.outerContainer} container columns={12} spacing={2}>
                <Grid2 size={6} offset={1}>
                    <h1>Alguns dos nossos clientes</h1>
                    <div className={styles.sponsors}>
                        <img src='./assets/sponsors/Fiocruz.png' />
                        <img src='./assets/sponsors/PassaporteIdiomas.png' />
                        <img src='./assets/sponsors/GenteGestao.png' />
                        <img src='./assets/sponsors/GRE.png' />
                        <img src='./assets/sponsors/OCC.png' />
                        <img src='./assets/sponsors/Rhymbo.png' />
                    </div>
                </Grid2>
                <Grid2 className={styles.textContainer} size={4}>
                    <h1>Fortaleça sua marca e alavanque seu negócio.</h1>
                    <h3>Comunique-se de maneira natural e pessoal.</h3>
                    <p>A Awaken desenvolve estratégias de marca para que possa estabelecer uma conexão genuína com seu público.</p>
                    <p>Descubra como o Awaken revoluciona sua presença no digital, transformando interações sua marca com conteúdos memoráveis.</p>
                    <p>Com um time inovador e eficaz, somos a escolha ideal para alavancar seu negócio no ambiente digital.</p>
                    <Button className={styles.budgetButton} color="secondary" variant="contained" >solicitar orçamento</Button>
                </Grid2>
            </Grid2>
        </>
    )
}

export default ClientSections;