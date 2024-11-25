import FooterComponent from "../components/FooterComponent/FooterComponent";
import ClientSections from "../sections/ClientsSection/ClientSections";
import IntroSection from "../sections/IntroSection/IntroSection";
import MotiveSection from "../sections/MotiveSection/MotiveSection";
import ServicesSection from "../sections/ServicesSection/ServicesSection";
import SubscriptionSection from "../sections/SubscriptionSection/SubscriptionSection";

const MainPage = () => {

    return (
        <>
            <IntroSection />
            <ServicesSection />
            <MotiveSection />
            <SubscriptionSection />
            <ClientSections />
            <FooterComponent />
        </>
    )
}

export default MainPage;