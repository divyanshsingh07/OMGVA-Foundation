import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import SatsangSection from "../components/SatsangSection";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-40 h-40 bg-saffron/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-saffron/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-4 text-[100px] text-saffron/30">卐</div>
        <div className="absolute bottom-1/2 right-4 text-[100px] text-saffron/30">卐</div>
      </div>
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center">
      </div>
      <Hero />
      <About />
      <SatsangSection />
      <Footer />
    </div>
  );
};

export default Home;