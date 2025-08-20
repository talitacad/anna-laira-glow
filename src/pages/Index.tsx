import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { usePerformance } from "@/hooks/usePerformance";

const Index = () => {
  usePerformance();
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
