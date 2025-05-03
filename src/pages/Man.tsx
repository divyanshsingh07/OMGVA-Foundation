import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Man = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-saffron/10 dark:from-gray-900 dark:to-saffron/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-saffron hover:text-saffron/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-6 z-10">
            <h1 className="text-4xl font-serif text-saffron">The Man</h1>
            <div className="w-24 h-1 bg-saffron"></div>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              His Holiness Akinchan Shree Mitra Shree Ji is a spiritual luminary whose life and teachings have touched countless souls. Born with a divine purpose, he has dedicated his life to spreading the light of yoga and meditation.
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              From a young age, he exhibited extraordinary spiritual awareness and wisdom. His journey of self-realization and service to humanity has inspired seekers from all walks of life to embark on their own spiritual paths.
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Through his profound teachings and compassionate guidance, he continues to illuminate the path of spiritual awakening for seekers worldwide.
            </p>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl z-10">
            <img
              src="/man.png"
              alt="His Holiness Akinchan Shree Mitra Shree Ji"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-1/4 left-0 w-40 h-40 bg-saffron/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-saffron/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-4 text-[100px] text-saffron/30">卐</div>
            <div className="absolute bottom-1/2 right-4 text-[100px] text-saffron/30">卐</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Man;