import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Man from "./pages/Man";
import Mystic from "./pages/Mystic";
import Mission from "./pages/Mission";
import Satgang from "./pages/Satgang";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="pt-16">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Satgang />
                  <Footer />
                </>
              } />
              <Route path="/man" element={<Man />} />
              <Route path="/mystic" element={<Mystic />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/satgang" element={<Satgang />} />
            </Routes>
          </div>
          <ThemeToggle />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;