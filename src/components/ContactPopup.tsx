import { X, Phone, Mail, MapPin } from "lucide-react";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup = ({ isOpen, onClose }: ContactPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-600 rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-serif text-saffron mb-6 text-center">Contact Us</h2>

        <div className="space-y-6">
          {/* WhatsApp */}
          <div className="flex items-center gap-4">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
              <Phone className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-300">WhatsApp</p>
              <a
                href="https://wa.me/919568443005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-saffron hover:text-saffron/80 transition-colors"
              >
                +91 95684 43005
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
              <Mail className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-300">Email</p>
              <a
                href="mailto:omgvayoga@gmail.com"
                className="text-saffron hover:text-saffron/80 transition-colors"
              >
omgvayoga@gmail.com              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
              <MapPin className="text-red-600 dark:text-red-400" size={24} />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-300">Location</p>
              <p className="text-gray-700 dark:text-gray-300">
                Dahisara, Janti Kalan Rd,<br />
                Tajpur Kalan Village,<br />
                Sonipat, Haryana 131028
              </p>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-saffron/20 w-24 h-24 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ContactPopup; 