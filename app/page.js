

import AccessibilityToolbar from "./components/AccessibilityToolbar";
import AwardsSection from "./components/AwardsSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import HeroSlider from "./components/HeroSlider";


import Gallery from "./components/Gallery";



import Awards from "./components/Awards";
import AboutUsPage from "./components/AboutUsPage";
import OurDesk from "./components/OurDesk";
import PrincipalDesk from "./components/PrincipalDesk";
import SocialToolbar from "./components/SocialToolbar";


export default function Home() {
  return (
    <>
    <Header />

    <HeroSlider />
    
     <Awards />
    <AwardsSection />
   
    <AboutUsPage />
    <OurDesk />
    <PrincipalDesk />
 
    
  

    <br />  


    {/* <Hero /> */}
      <Gallery />
 
   
    <Footer />
    <AccessibilityToolbar />
    <SocialToolbar />
    </>
  );
}
