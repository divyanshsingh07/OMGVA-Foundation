import ImageSlider from "./ImageSlider";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800 pt-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-40 h-40 bg-saffron/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-saffron/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-4 text-[100px] text-saffron/30">卐</div>
        <div className="absolute bottom-1/2 right-4 text-[100px] text-saffron/30">卐</div>
      </div>
      {/* Existing content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-saffron mb-4">About OMGVA Foundation</h2>
          <div className="w-24 h-1 bg-saffron mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
  OMGVA Foundation ek बहुआयामी संस्था hai jo मानवता ke उत्थान ke liye समर्पित है। Iske teen प्रमुख स्तम्भ hain — <strong>OMGVA Yoga Foundation</strong>, <strong>OMGVA Tourism & Wellness</strong>, aur <strong>OMGVA Infotruss</strong> — jo शरीर, मन aur आत्मा ke समग्र विकास ke लिए कार्यरत हैं।
</p>

<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
  <strong>OMGVA Yoga Foundation</strong> ek आध्यात्मिक आश्रम hai jo योग एवं ध्यान की प्राचीन विद्या ko <em>His Holiness Akinchan Shree Mitra Shree Ji</em> ke दिव्य मार्गदर्शन mein प्रसारित करता है। हमारा उद्देश्य hai — "योगः कर्मसु कौशलम्" — karm mein कौशल aur आत्मिक शांति ka समन्वय।
</p>

<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
  Sanstha का मूल दर्शन hai — <em>"सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः"</em> — jisme हम har vyakti ko shuddh, satvik aur समर्पित जीवन की ओर प्रेरित करते हैं। हमारे कार्यक्रम शरीर, मन और आत्मा ke त्रैविधिक संतुलन par केंद्रित हैं।
</p>

<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
  OMGVA mein, hum मानते हैं कि हर जीवात्मा में दिव्यता है। Hamare द्वारा रचित साधना मार्ग seekers ko आत्म-चिंतन, ईश्वर से जुड़ाव, aur अंतर्मुखी यात्रा ke लिए प्रेरित करता hai, jahan वे अपनी आत्मा se संवाद करते हैं — <em>“Ātmanam viddhi”</em> (Know thyself).
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