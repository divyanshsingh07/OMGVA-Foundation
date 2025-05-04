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
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl z-10">
            <img
              src="/man.png"
              alt="His Holiness Akinchan Shree Mitra Shree Ji"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 z-10">
            <h1 className="text-4xl font-serif text-saffron">The Man</h1>
            <div className="w-24 h-1 bg-saffron"></div>
            <p>
    <span className="font-semibold text-lg">His Holiness Akinchan Shree Mitra Shree Ji</span>, also known as <span className="text-orange-600 font-medium">AKINCHAN</span>, was born on <span className="italic">6th March 1972</span>. He is a <span className="text-blue-600">Management Graduate</span> and a <span className="text-blue-600">Research Scholar in Applied Psychology</span>. As the head and patron of various social and educational organizations, he has dedicated his life to <span className="text-green-600 font-semibold">serving humanity</span>.
  </p>
  <p>
    A <span className="text-purple-600 font-medium">spiritual luminary</span>, he inspires countless individuals through his teachings and guidance. His hobbies include <span className="italic">living with nature, interacting with individuals, reading, music, and swimming</span>. His ultimate goal is to <span className="text-green-700 font-semibold">grow continually while serving humanity</span>.
  </p>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-0 w-40 h-40 bg-saffron/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-saffron/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-4 text-[100px] text-saffron/30">卐</div>
          <div className="absolute bottom-1/2 right-4 text-[100px] text-saffron/30">卐</div>
        </div>
      </div>
    </div>
  );
};

export default Man;