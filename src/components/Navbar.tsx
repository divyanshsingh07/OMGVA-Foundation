import { useState } from "react";
import { Menu, X, Home, Users, Calendar, BookOpen, Video, LogIn, Heart, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import OMGVALogo from "../assets/OMGVA.png";
import DonationPopup from "./DonationPopup";
import ContactPopup from "./ContactPopup";
import { FaOm } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTeachingsOpen, setIsTeachingsOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Ashram", path: "/", icon: Home },
    { name: "Our Guru", path: "#about", icon: Users },
    { name: "Satsang", path: "#satsang", icon: FaOm },
    { name: "Join Sangha", path: "#join", icon: LogIn },
    { name: "Gallery", path: "#gallery", icon: Video },
  ];

  const teachingsItems = [
    { name: "Daily Teachings", path: "/teachings/daily", icon: BookOpen },
    { name: "Meditation", path: "/teachings/meditation", icon: BookOpen },
    { name: "Yoga Practices", path: "/teachings/yoga", icon: BookOpen },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    
    if (path === "#about" || path === "#satsang" || path === "#join" || path === "#gallery") {
      const sectionId = path.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsOpen(false);
      }
    } else if (path === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
    } else {
      navigate(path);
      setIsOpen(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img
                  src={OMGVALogo}
                  alt="OMGVA Yoga Logo"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={(e) => handleScroll(e, item.path)}
                      className="text-gray-700 hover:text-saffron px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      <Icon size={18} />
                      {item.name}
                    </Link>
                  );
                })}
                <div className="relative group">
                  <button
                    className="text-gray-700 hover:text-saffron px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                    onClick={() => setIsTeachingsOpen(!isTeachingsOpen)}
                  >
                    <BookOpen size={18} />
                    Teachings
                  </button>
                  {isTeachingsOpen && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {teachingsItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-saffron/10 hover:text-saffron flex items-center gap-2"
                            >
                              <Icon size={16} />
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="text-gray-700 hover:text-saffron px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                >
                  <Phone size={18} />
                  Contact
                </button>
                <button
                  onClick={() => setIsDonationOpen(true)}
                  className="bg-saffron text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-saffron/90 transition-colors flex items-center gap-2"
                >
                  <Heart size={18} />
                  Donate
                </button>
              </div>
            </div>

            {/* Mobile menu button and donate button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsDonationOpen(true)}
                className="bg-saffron text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-saffron/90 transition-colors flex items-center gap-2"
              >
                <Heart size={18} />
                <span className="hidden sm:inline">Donate</span>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-saffron focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={(e) => handleScroll(e, item.path)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-saffron hover:bg-saffron/10 flex items-center gap-2"
                  >
                    <Icon size={20} />
                    {item.name}
                  </Link>
                );
              })}
              <div className="px-3 py-2">
                <button
                  className="text-gray-700 hover:text-saffron text-base font-medium flex items-center gap-2"
                  onClick={() => setIsTeachingsOpen(!isTeachingsOpen)}
                >
                  <BookOpen size={20} />
                  Teachings
                </button>
                {isTeachingsOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    {teachingsItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-saffron hover:bg-saffron/10 flex items-center gap-2"
                        >
                          <Icon size={18} />
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsContactOpen(true)}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-saffron hover:bg-saffron/10 flex items-center gap-2"
              >
                <Phone size={20} />
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Donation Popup */}
      <DonationPopup isOpen={isDonationOpen} onClose={() => setIsDonationOpen(false)} />
      
      {/* Contact Popup */}
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navbar; 