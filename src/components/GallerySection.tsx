import { useState } from "react";
import { FaImage, FaQuoteLeft } from "react-icons/fa";

const galleryItems = [


 
  {
    type: "video",
    src: "https://www.youtube.com/embed/lRZrg_okjjU",
    caption: "Spiritual Discourse: The Power of Meditation"
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/GGl1AA64fcc",
    caption: "Divine Teachings: Path to Inner Peace"
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/axMz2V6kVP4",
    caption: "Yoga Day Special: Session 1"
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/YJEj4rBQOAM",
    caption: "Yoga Day Special: Session 2"
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/2z_PYO4xKOA",
    caption: "Yoga Day Special: Session 3"
  },
 
];

const GallerySection = () => {
  const [activeTab] = useState("all");

  return (
    <section 
      id="gallery" 
      className="min-h-screen bg-gradient-to-br from-white to-saffron/10 relative overflow-x-hidden py-16 md:py-24"
      style={{ scrollMarginTop: "4rem" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-40 h-40 bg-saffron/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-saffron/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-4 text-[100px] text-saffron/30">卐</div>
        <div className="absolute bottom-1/2 right-4 text-[100px] text-saffron/30">卐</div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-12">
          <span className="text-5xl text-saffron mb-2"><FaImage /></span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-saffron text-center mb-2">Gallery</h1>
          <p className="text-lg text-gray-700 font-light italic text-center max-w-xl">
            "Capturing moments of spiritual journey and divine grace."
          </p>
        </div>

       

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems
            .filter(item => activeTab === "all" || (activeTab === "photos" && item.type === "image") || (activeTab === "videos" && item.type === "video"))
            .map((item, idx) => (
              <div key={idx} className="bg-white/80 dark:bg-gray-100/80 rounded-xl shadow overflow-hidden">
                {item.type === "image" ? (
                  <div className="aspect-video bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={item.src} alt={item.caption} className="object-cover w-full h-full" />
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-200 flex items-center justify-center overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={item.src}
                      title={item.caption}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                )}
                <div className="p-4">
                  <p className="text-gray-700 text-center">{item.caption}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white/80 dark:bg-gray-100/80 rounded-xl shadow p-6">
            <FaQuoteLeft className="text-3xl text-saffron mb-4" />
            <p className="text-gray-700 italic mb-4">
              "The gallery beautifully captures the essence of our spiritual journey. Each image tells a story of transformation and divine grace."
            </p>
            <p className="text-saffron font-semibold">- Spiritual Seeker</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-100/80 rounded-xl shadow p-6">
            <FaQuoteLeft className="text-3xl text-saffron mb-4" />
            <p className="text-gray-700 italic mb-4">
              "Watching these videos and seeing these photos brings back beautiful memories of our spiritual gatherings and teachings."
            </p>
            <p className="text-saffron font-semibold">- Devotee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;