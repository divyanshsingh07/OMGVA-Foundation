import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Mission = () => {
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
        
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-1/4 left-0 w-40 h-40 bg-saffron/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-saffron/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-4 text-[100px] text-saffron/30">卐</div>
            <div className="absolute bottom-1/2 right-4 text-[100px] text-saffron/30">卐</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <h1 className="text-4xl font-serif text-saffron">The Mission</h1>
              <div className="w-24 h-1 bg-saffron"></div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                The mission of OMGVA Yoga Foundation is to spread the light of yoga and meditation to every corner of the world. Under the divine guidance of His Holiness Akinchan Shree Mitra Shree Ji, we strive to create a world where spiritual wisdom is accessible to all.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Our vision is to establish a global community of spiritual seekers, united in their pursuit of inner peace and enlightenment. Through various programs, teachings, and initiatives, we aim to transform lives and create a more harmonious world.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Join us in this sacred mission of spreading love, peace, and spiritual wisdom to humanity. Together, we can create a world where every individual realizes their divine potential.
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/mission.png"
                alt="The Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;