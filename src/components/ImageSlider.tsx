import { useEffect, useState } from "react";

const images = [
  {
    src: "/image.png",
    quote: "Yoga is the journey of the self, through the self, to the self.",
    author: "- Bhagavad Gita"
  },
  {
    src: "/image copy.png",
    quote: "The mind is everything. What you think you become.",
    author: "- Buddha"
  },
  {
    src: "/image copy 2.png",
    quote: "Peace comes from within. Do not seek it without.",
    author: "- Buddha"
  },
  {
    src: "/image copy 3.png",
    quote: "The quieter you become, the more you can hear.",
    author: "- Ramana Maharshi"
  },
  {
    src: "/promo.png",
    quote: "Yoga is the perfect opportunity to be curious about who you are.",
    author: "- Jason Crandell"
  },
  {
    src: "/session.png",
    quote: "The nature of yoga is to shine the light of awareness into the darkest corners of the body.",
    author: "- Jason Crandell"
  }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-4 max-w-2xl">
              <p className="text-2xl md:text-3xl font-serif italic mb-4">
                {image.quote}
              </p>
              <p className="text-xl text-saffron font-medium">
                {image.author}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider; 