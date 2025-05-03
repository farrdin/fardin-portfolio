import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <div style={{ background: "var(--gradient-main)" }}>
      <Header />
      <HeroSection />
      <Education />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
