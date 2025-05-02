import { X } from "lucide-react";
import QRCode from "../assets/qr.png";

interface DonationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationPopup = ({ isOpen, onClose }: DonationPopupProps) => {
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

        <h2 className="text-2xl font-serif text-saffron mb-6 text-center">Support Our Mission</h2>

        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Your generous contribution helps us spread the light of yoga and meditation to more seekers.
          </p>

          <div className="flex justify-center">
            <img
              src={QRCode}
              alt="Scan to Donate"
              className="w-48 h-48 object-contain rounded-lg shadow-lg"
            />
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-center italic">
            "The best way to find yourself is to lose yourself in the service of others."<br />
            - Mahatma Gandhi
          </p>
          <p>this is dummy QR-by Developer</p>

          <div className="absolute -bottom-4 -right-4 bg-saffron/20 w-24 h-24 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default DonationPopup; 