import MainSection from "../../components/main-section.jsx";
import ContactSection from "../../components/contact-section";
import PackagesSection from "../../components/packages-section";
import WeddingSection from "../../components/portfolio-section";
import ScrollSpy from "../../components/scrollspy";


export default function Home() {
  return (
    <>
      <ScrollSpy />

      <section id="home">
        <MainSection />
      </section>

      
      <section id="weddings">
        <WeddingSection />
      </section>

    
      <section id="packages">
        <PackagesSection />
      </section>


      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
