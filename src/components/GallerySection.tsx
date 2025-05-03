import { useState } from "react";
import { FaImage, FaVideo, FaQuoteLeft } from "react-icons/fa";
import { GiLotus } from "react-icons/gi";

const galleryItems = [
  {
    type: "image",
    src: "/gallery1.jpg",
    caption: "Morning Meditation Session"
  },
  {
    type: "image",
    src: "/gallery2.jpg",
    caption: "Guru Purnima Celebration"
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/example1",
    caption: "Satsang Highlights"
  },
  {
    type: "image",
    src: "/gallery3.jpg",
    caption: "Yoga Practice"
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/example2",
    caption: "Spiritual Discourse"
  },
  {
    type: "image",
    src: "/gallery4.jpg",
    caption: "Community Gathering"
  }
];

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section 
      id="gallery" 
      className="min-h-screen bg-gradient-to-br from-white to-saffron/10 relative overflow-x-hidden py-16 md:py-24"
      style={{ scrollMarginTop: "4rem" }}
    >
      {/* Mandala background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center">
        <img
          src="/mandala-bg.png"
          alt="mandala background"
          className="w-[80vw] max-w-2xl opacity-10 mx-auto"
        />
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

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "all" ? "bg-saffron text-white" : "bg-white/80 text-gray-700 hover:bg-saffron/10"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("photos")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "photos" ? "bg-saffron text-white" : "bg-white/80 text-gray-700 hover:bg-saffron/10"
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "videos" ? "bg-saffron text-white" : "bg-white/80 text-gray-700 hover:bg-saffron/10"
            }`}
          >
            Videos
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems
            .filter(item => activeTab === "all" || (activeTab === "photos" && item.type === "image") || (activeTab === "videos" && item.type === "video"))
            .map((item, idx) => (
              <div key={idx} className="bg-white/80 dark:bg-gray-100/80 rounded-xl shadow overflow-hidden">
                {item.type === "image" ? (
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <FaImage className="text-4xl text-gray-400" />
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <FaVideo className="text-4xl text-gray-400" />
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