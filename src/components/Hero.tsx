import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram } from "lucide-react";
import GuruImage from "../assets/guru.png";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-saffron/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Right Side - Guru's Photo (First on mobile) */}
          <div className="relative h-[50vh] md:h-[80vh] flex items-center justify-center order-1 md:order-2">
            <div className="relative h-full w-full max-w-md mx-auto">
              <img
                src={GuruImage}
                alt="His Holiness Akinchan Shree Mitra Shree Ji"
                className="w-full h-full object-contain rounded-[6rem] shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-saffron/20 w-24 h-24 rounded-full" />
            </div>
          </div>

          {/* Left Side - Introduction and Social Links (Second on mobile) */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-serif text-gray-900">
                His Holiness
                <br />
                <span className="text-saffron">Akinchan Shree Mitra Shree Ji</span>
              </h1>
              <p className="text-xl text-gray-600">
                Spiritual Guide and Founder of OMGVA Yoga Foundation
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 italic">
                "Yoga is the journey of the self, through the self, to the self."
              </p>
              <p className="text-gray-600">
                A beacon of spiritual wisdom and enlightenment, guiding seekers on their path to self-realization and inner peace.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/join"
                className="bg-saffron text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-saffron/90 transition-colors shadow-lg text-center"
              >
                Join a Session
              </Link>
              <Link
                to="/teachings"
                className="border-2 border-saffron text-saffron px-8 py-3 rounded-md text-lg font-medium hover:bg-saffron/10 transition-colors text-center"
              >
                Explore Teachings
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a
                href="https://www.facebook.com/profile.php?id=100087236020912&sk=photos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-saffron transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a
                href="https://www.instagram.com/omgvayoga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-saffron transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://www.youtube.com/@omgvayoga816"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-saffron transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 