import { Grid2, Paper } from '@mui/material';
import styles from './SubscriptionSection.module.css';
import OfferCardComponent from '../../components/OfferCardComponent/OfferCardComponent';

const cardItems = [
    ['Gestão de tráfego', 'Social Media', 'Landing Page + suporte', 'Planejamento de conteúdo', 'Copywritting', 'Guia de tendências'],
    ['Gestão de rede social', 'Gestão de Tráfego pago', 'Copywritting', 'Campanha de vídeos', 'Identidade visual', 'Design para produtos/embalagens', 'Landing page + suporte', 'Endomarketing', 'Ações promocionais'],
    ['Serviços únicos', 'Segundo sua necessidade', 'Demanda única e momentânea', 'Revenda', 'e muito mais!']
];

const SubscriptionSection = () => {

    return (
        <>
            <Grid2 container columns={12} className={styles.outerContainer}>
                <Grid2 className={styles.titleContainer} size={6} offset={3} >
                    <h1>Uma agência por assinatura</h1>
                    <p>Escolha um dos planos abaixo:</p>
                </Grid2>
                <Grid2 container size={10} offset={1} spacing={2} >
                    <Grid2 size={4}>
                        <Paper className={styles.offerCard}>
                            <OfferCardComponent
                                title='Creative'
                                offerItems={cardItems[0]}
                                buttonLabel='eu quero'
                                priceLabels={['4.497', '1.697,50']}
                            />
                        </Paper>
                    </Grid2>
                    <Grid2 size={4}>
                        <Paper className={styles.offerCard}>
                            <OfferCardComponent
                                title='Digital'
                                offerItems={cardItems[1]}
                                buttonLabel='solicitar orçamento'
                                priceLabels={['7.239,97', '4.997,50']}
                            />
                        </Paper>
                    </Grid2>
                    <Grid2 size={4}>
                        <Paper className={styles.offerCard}>
                            <OfferCardComponent
                                title='Quero algo personalizado'
                                offerItems={cardItems[2]}
                                buttonLabel='fale com a gente!'
                                variant
                            />
                        </Paper>
                    </Grid2>
                </Grid2>
            </Grid2>
        </>
    )
}

export default SubscriptionSection;