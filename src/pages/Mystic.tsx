import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Mystic = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-saffron/10 dark:from-gray-900 dark:to-saffron/5">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-40 h-40 bg-saffron/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-saffron/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-4 text-[100px] text-saffron/30">卐</div>
        <div className="absolute bottom-1/2 right-4 text-[100px] text-saffron/30">卐</div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-saffron hover:text-saffron/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-serif text-saffron">The Mystic</h1>
            <div className="w-24 h-1 bg-saffron"></div>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              As a mystic, His Holiness Akinchan Shree Mitra Shree Ji embodies the ancient wisdom of yoga and meditation. His deep connection with the divine allows him to guide seekers through the mystical dimensions of spiritual practice.
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Through his mystical experiences and profound realizations, he reveals the deeper truths of existence and consciousness. His teachings bridge the gap between the material and spiritual worlds, offering practical wisdom for modern seekers.
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              His mystical presence and energy create a sacred space where transformation and awakening become possible for all who seek his guidance.
            </p>
          </div>
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl bg-white dark:bg-gray-900 flex items-center justify-center">
            <img
              src="/mystic.png"
              alt="The Mystic"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mystic;