import { Link } from "react-router-dom";
import borderLight from '../assets/border-light.png';
import borderDark from '../assets/border-dark.png';

const heroCards = [
  {
    title: "Mystic",
    image: "/mystic.png",
    link: "/mystic",
    quote: "धर्मो रक्षति रक्षितः।",
  },
  {
    title: "Mission",
    image: "/mission.png",
    link: "/mission",
    quote: "आध्यात्मिक ज्ञान ही जीवन का वास्तविक प्रकाश है।",
  },
  {
    title: "Man",
    image: "/man.png",
    link: "/man",
    quote: "Serve to purify. Love to liberate",
  },
];

const Hero = () => {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-white to-saffron/10 relative overflow-hidden pb-24 md:pb-0">
      {/* Spiritual background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Colored circles with spiritual significance */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-saffron/20 dark:bg-saffron/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-400/20 dark:bg-purple-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-green-400/20 dark:bg-green-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Spiritual symbols */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-[800px] h-[800px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[200px] font-serif text-saffron/50 dark:text-saffron/10">ॐ</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[600px] h-[600px] border-2 border-saffron/20 dark:border-saffron/10 rounded-full animate-spin-slow" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] border-2 border-saffron/20 dark:border-saffron/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-saffron/30 dark:bg-saffron/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 2}s infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-0 w-full max-w-6xl px-4 py-0 justify-center items-center relative z-10">
        {heroCards.map((card, idx) => (
          <Link
            to={card.link}
            key={card.title}
            className={`group relative flex-1 max-w-[370px] md:max-w-[420px] lg:max-w-[480px] h-[480px] md:h-[540px] rounded-l overflow-hidden shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-[1.02]
              ${idx === 1 ? "z-20 md:-mx-8 scale-[1.02] hover:scale-[1.03]" : "z-10"}
              ${idx === 0 ? "md:mr-[-40px]" : ""}
              ${idx === 2 ? "md:ml-[-40px]" : ""}
            `}
            style={{ marginLeft: idx === 1 ? '-40px' : undefined, marginRight: idx === 1 ? '-40px' : undefined }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-300">
              <div className="text-center space-y-4">
                <span className="text-3xl md:text-4xl font-serif text-white drop-shadow-lg font-bold">
                  {card.title} <span className="text-4xl">›</span>
                </span>
                <p className="text-white/90 text-sm md:text-base font-serif italic">
                  {card.quote}
                </p>
              </div>
            </div>
            {/* Spiritual decorative overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full" />
            </div>
          </Link>
        ))}
      </div>

      {/* Floating spiritual elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white/80">
        <div className="w-2 h-2 rounded-full bg-white/30" />
        <span className="text-sm font-serif">ॐ</span>
        <div className="w-2 h-2 rounded-full bg-white/30" />
      </div>

    
      {/* Decorative border at the bottom */}
      <div className="absolute left-0 right-0 bottom-16 w-full z-20 pointer-events-none flex justify-center">
        <img
          src={borderLight}
          alt="decorative border"
          className="w-full max-w-xs sm:max-w-md md:max-w-xl h-auto mx-auto block dark:hidden"
        />
        <img
          src={borderDark}
          alt="decorative border dark"
          className="w-full max-w-xs sm:max-w-md md:max-w-xl h-auto mx-auto hidden dark:block"
        />
      </div>
    </div>
  );
};

export default Hero;