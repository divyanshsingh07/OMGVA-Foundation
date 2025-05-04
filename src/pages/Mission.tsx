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
              <p>
    <span className="font-semibold text-lg">The mission of OMGVA Foundation</span> is to spread the transformative light of <span className="text-indigo-600 font-medium">yoga and meditation</span> across every corner of the world. Guided by the divine presence of <span className="text-orange-600 font-semibold">His Holiness Akinchan Shree Mitra Shree Ji</span>, also lovingly known as <span className="italic">AKINCHAN</span>, we envision a spiritually awakened planet where ancient wisdom is accessible to all.
  </p>

  <p>
    Our vision is to establish a <span className="text-purple-600 font-semibold">global spiritual community</span> — a family of seekers devoted to <span className="italic">inner peace and enlightenment</span>. Through impactful programs, soul-touching teachings, and humanitarian initiatives, we strive to bring meaningful change in individuals and help create a world rooted in harmony and compassion.
  </p>

  <p>
    <span className="font-medium">Under MitraShree Ji's leadership</span> — a <span className="text-blue-600">Management Graduate</span>, <span className="text-blue-600">Research Scholar in Applied Psychology</span>, and experienced spiritual mentor — OMGVA empowers people through over <span className="font-semibold">2,000 motivational lectures</span>, <span className="font-semibold">1,500+ career counseling sessions</span>, and <span className="italic">dedicated yoga and meditation practices</span>. He is a guiding force to many across social and corporate landscapes.
  </p>

  <p>
    Join us in this sacred mission of <span className="text-green-600 font-semibold">spreading love, peace, and spiritual wisdom</span> to humanity. Together, let's realize the divine within and help others discover theirs — because as our guiding quote says: <span className="italic font-medium text-yellow-600">“उठो धरती के वीर सपुतों - धरती स्वर्ग बनाना है।”</span> (*Rise, brave sons of the Earth – we must turn Earth into Heaven.*)
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