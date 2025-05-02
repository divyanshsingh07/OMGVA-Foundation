import ImageSlider from "./ImageSlider";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-saffron mb-4">About OMGVA Yoga</h2>
          <div className="w-24 h-1 bg-saffron mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              OMGVA Yoga Foundation is a spiritual sanctuary dedicated to spreading the ancient wisdom of yoga and meditation under the divine guidance of His Holiness Akinchan Shree Mitra Shree Ji. Our mission is to help individuals discover their true potential through the transformative power of yoga.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Founded with the vision of creating a harmonious world through spiritual awakening, we offer various programs and teachings that blend traditional yogic practices with modern understanding. Our approach is holistic, focusing on physical, mental, and spiritual well-being.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              At OMGVA Yoga, we believe that everyone has the potential to achieve inner peace and enlightenment. Through our carefully designed programs, we guide seekers on their spiritual journey, helping them connect with their inner selves and the divine consciousness.
            </p>
          </div>
          
          <div>
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 