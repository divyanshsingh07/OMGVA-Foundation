import { useEffect, useRef, useState } from "react";
import { FaOm, FaRegDotCircle } from "react-icons/fa";
import { GiLotus } from "react-icons/gi";

const updesh = [
  {
    quote: "धर्मो रक्षति रक्षितः।",
    text: "Dharma protects those who protect it.",
  },
  {
    quote: "सर्वे भवन्तु सुखिनः।",
    text: "May all be happy.",
  },
  {
    quote: "सच्चा सुख आत्मा में है, बाहर नहीं।",
    text: "True happiness lies within, not outside.",
  },
  {
    quote: "Peace is the nature of the soul.",
    text: "Shanti hi atma ka swabhav hai.",
  },
];

const upcomingEvents = [
  {
    date: "2024-07-15",
    title: "Guru Purnima Satsang",
    desc: "A sacred gathering to celebrate Guruji's wisdom and grace.",
    location: "OMGVA Ashram, Vrindavan",
  },
  {
    date: "2024-08-10",
    title: "Meditation Retreat",
    desc: "A weekend of deep meditation and spiritual discourses.",
    location: "Online & Ashram",
  },
];

const Satgang = () => {
  // Quote slider state
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % updesh.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-saffron/10 relative overflow-x-hidden">
      {/* Mandala background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center">
        <img
          src="/mandala-bg.png"
          alt="mandala background"
          className="w-[80vw] max-w-2xl opacity-10 mx-auto"
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-8 md:py-16">
        {/* Page Title */}
        <div className="flex flex-col items-center mb-8">
          <span className="text-5xl text-saffron mb-2"><FaOm /></span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-saffron text-center mb-2">Satgang</h1>
          <p className="text-lg text-gray-700 font-light italic text-center max-w-xl">
            "Let the light of wisdom dispel the darkness of ignorance."
          </p>
        </div>

        {/* Satsang Video Section */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FaRegDotCircle className="text-saffron text-xl" />
            <h2 className="text-2xl font-serif text-saffron">Satsang Video</h2>
          </div>
          <div className="w-full max-w-2xl h-72 md:h-80 mx-auto rounded-lg overflow-hidden bg-white/80 dark:bg-gray-100/80 shadow flex items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/L_pp86P_By8?autoplay=1&mute=1&rel=0&showinfo=0&controls=1"
              title="Satsang Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-none rounded-lg"
            ></iframe>
          </div>
        </section>

        {/* Quotes Slider Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <GiLotus className="text-saffron text-2xl" />
            <h2 className="text-2xl font-serif text-saffron">Divine Quotes</h2>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full max-w-xl bg-white/80 dark:bg-gray-100/80 rounded-xl shadow p-4 flex flex-col items-center min-h-[180px] transition-all duration-500">
              <div className="flex flex-col items-center justify-center h-full min-h-[120px]">
                <span className="text-3xl text-saffron mb-2"><GiLotus /></span>
                <span className="text-xl font-serif text-saffron text-center mb-2">{updesh[current].quote}</span>
                <span className="text-gray-700 text-base text-center">{updesh[current].text}</span>
              </div>
              {/* Dots navigation */}
              <div className="flex gap-2 mt-4 justify-center">
                {updesh.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === current ? "bg-saffron" : "bg-saffron/30"}`}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to quote ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <GiLotus className="text-saffron text-2xl" />
            <h2 className="text-2xl font-serif text-saffron">Upcoming Satsangs & Gatherings</h2>
          </div>
          <div className="grid gap-6">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="bg-white/80 dark:bg-gray-100/80 rounded-xl shadow p-4 flex flex-col gap-1">
                <span className="text-saffron font-semibold text-lg">{event.title}</span>
                <span className="text-gray-600 text-sm">{event.date} | {event.location}</span>
                <span className="text-gray-700 text-base">{event.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Quote */}
        <div className="flex flex-col items-center mt-12">
          <span className="text-3xl text-saffron mb-2"><GiLotus /></span>
          <p className="text-lg text-gray-700 font-light italic text-center max-w-xl">
            "सत्संग से जीवन में प्रकाश आता है।<br/>Satsang brings light to life."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Satgang; 