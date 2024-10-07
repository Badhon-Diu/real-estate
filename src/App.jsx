import Aboutsection from "./assets/Components/Aboutsection";
import Contact from "./assets/Components/Contact/Contact";
import Ctasection from "./assets/Components/CTA/Ctasection";
import Faq from "./assets/Components/FAQ/Faq"
import FeatureSection from "./assets/Components/FeatureSection";
import Footer from "./assets/Components/Footer/Footer";
import NavHero from "./assets/Components/NavHero/NavHero";
import PropertiesSection from "./assets/Components/PropertiesSection";
import TeamSection from "./assets/Components/Team/TeamSection";
import "./tailwind.css";

function App() {
  return (
    <>
      <NavHero></NavHero>
      <FeatureSection></FeatureSection>
      <PropertiesSection></PropertiesSection>
      <Aboutsection></Aboutsection>
      <Ctasection></Ctasection>
      <Faq></Faq>
      <TeamSection></TeamSection>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
