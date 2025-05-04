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
            <p>
    As a <span className="font-semibold text-indigo-600">mystic and spiritual guide</span>, 
    <span className="text-orange-600 font-semibold">His Holiness Akinchan Shree Mitra Shree Ji</span> 
    embodies the timeless wisdom of <span className="italic">yoga and meditation</span>. 
    His profound connection with the divine empowers him to lead seekers into the deeper, mystical dimensions of spiritual practice.
  </p>

  <p>
    With the depth of his <span className="text-purple-600 font-medium">mystical experiences</span> 
    and life-changing realizations, he unveils the subtle truths of <span className="italic">existence and consciousness</span>. 
    His teachings serve as a luminous bridge between the <span className="font-semibold text-blue-600">material and spiritual realms</span>, 
    offering <span className="text-green-600 font-medium">practical wisdom for the modern seeker</span>.
  </p>

  <p>
    His sacred presence radiates a transformative energy that creates a space of awakening. 
    For those who seek his guidance, <span className="font-medium text-yellow-700">inner healing, self-discovery, and spiritual elevation</span> 
    become not just possible—but inevitable.
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