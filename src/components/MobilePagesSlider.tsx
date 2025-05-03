import React from "react";

const pages = [
  {
    title: "The Mystic",
    image: "/mystic.png",
    alt: "The Mystic",
    content: [
      "As a mystic, His Holiness Akinchan Shree Mitra Shree Ji embodies the ancient wisdom of yoga and meditation. His deep connection with the divine allows him to guide seekers through the mystical dimensions of spiritual practice.",
      "Through his mystical experiences and profound realizations, he reveals the deeper truths of existence and consciousness. His teachings bridge the gap between the material and spiritual worlds, offering practical wisdom for modern seekers.",
      "His mystical presence and energy create a sacred space where transformation and awakening become possible for all who seek his guidance."
    ]
  },
  {
    title: "The Mission",
    image: "/mission.png",
    alt: "The Mission",
    content: [
      "The mission of OMGVA Yoga Foundation is to spread the light of yoga and meditation to every corner of the world. Under the divine guidance of His Holiness Akinchan Shree Mitra Shree Ji, we strive to create a world where spiritual wisdom is accessible to all.",
      "Our vision is to establish a global community of spiritual seekers, united in their pursuit of inner peace and enlightenment. Through various programs, teachings, and initiatives, we aim to transform lives and create a more harmonious world.",
      "Join us in this sacred mission of spreading love, peace, and spiritual wisdom to humanity. Together, we can create a world where every individual realizes their divine potential."
    ]
  },
  {
    title: "The Man",
    image: "/man.png",
    alt: "His Holiness Akinchan Shree Mitra Shree Ji",
    content: [
      "His Holiness Akinchan Shree Mitra Shree Ji is a spiritual luminary whose life and teachings have touched countless souls. Born with a divine purpose, he has dedicated his life to spreading the light of yoga and meditation.",
      "From a young age, he exhibited extraordinary spiritual awareness and wisdom. His journey of self-realization and service to humanity has inspired seekers from all walks of life to embark on their own spiritual paths.",
      "Through his profound teachings and compassionate guidance, he continues to illuminate the path of spiritual awakening for seekers worldwide."
    ]
  }
];

const MobilePagesSlider = () => {
  return (
    <div className="md:hidden w-full min-h-screen bg-saffron/10 flex items-center justify-center">
      <div className="flex flex-row overflow-x-auto snap-x snap-mandatory w-full gap-6 px-4 py-12">
        {pages.map((page, idx) => (
          <div
            key={page.title}
            className="min-w-[90vw] max-w-[90vw] bg-white/80 dark:bg-gray-900/70 rounded-2xl shadow-xl flex flex-col items-center snap-center relative"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-t-2xl overflow-hidden">
              <img
                src={page.image}
                alt={page.alt}
                className="object-contain h-full w-auto"
              />
            </div>
            <div className="w-full px-4 py-4 flex flex-col items-center">
              <h2 className="text-2xl font-serif font-bold text-saffron mb-2 bg-white/70 dark:bg-gray-900/60 rounded-lg px-4 py-2 backdrop-blur">
                {page.title}
              </h2>
              <div className="w-16 h-1 bg-saffron mb-4 rounded-full" />
              {page.content.map((para, i) => (
                <p key={i} className="text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-2 bg-white/60 dark:bg-gray-900/40 rounded px-2 py-1">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobilePagesSlider; 