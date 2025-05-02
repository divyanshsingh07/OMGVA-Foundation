import { Facebook, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif text-saffron mb-4">OMGVA Yoga</h3>
            <p className="text-gray-400">
              Spreading the light of yoga and meditation under the divine guidance of His Holiness Akinchan Shree Mitra Shree Ji.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif text-saffron mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-saffron transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-400 hover:text-saffron transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/teachings" className="text-gray-400 hover:text-saffron transition-colors">
                  Teachings
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-saffron transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif text-saffron mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100087236020912&sk=photos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-saffron transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/omgvayoga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-saffron transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@omgvayoga816"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-saffron transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif text-saffron mb-4">Visit Us</h3>
            <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13976.952118371435!2d77.1720913!3d28.8615373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dab611b7b27a5%3A0xf62cb3d435f47d3c!2sOmgva%20Yoga!5e0!3m2!1sen!2sin!4v1746184755961!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} OMGVA Yoga Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 