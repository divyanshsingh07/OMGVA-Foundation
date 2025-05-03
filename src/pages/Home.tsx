import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import SatsangSection from "../components/SatsangSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <SatsangSection />
      <Footer />
    </div>
  );
};

export default Home; 