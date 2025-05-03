import { FaUserFriends, FaHandshake } from "react-icons/fa";
import { GiLotus, GiMeditation } from "react-icons/gi";
import emailjs from 'emailjs-com';

const benefits = [
  {
    icon: <GiMeditation className="text-4xl text-saffron" />,
    title: "Daily Meditation",
    desc: "Join our daily meditation sessions and experience inner peace."
  },
  {
    icon: <FaHandshake className="text-4xl text-saffron" />,
    title: "Community Support",
    desc: "Connect with like-minded spiritual seekers on the path."
  },
  {
    icon: <GiLotus className="text-4xl text-saffron" />,
    title: "Spiritual Growth",
    desc: "Grow spiritually through regular satsangs and teachings."
  }
];

const JoinSanghaSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs.sendForm(
      'service_dxm52xa', // Replace with your EmailJS service ID
      'template_613vfqm', // Replace with your EmailJS template ID
      form,
      'fJzYdjwnokl-VYjk4' // Replace with your EmailJS user ID
    )
    .then(() => { // Removed unused 'result' parameter
      alert('Application submitted successfully!');
      form.reset();
    })
    .catch((error) => {
      alert('An error occurred. Please try again later.');
      console.error(error);
    });
  };

  return (
    <section 
      id="join" 
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
      {/* Mandala background */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-12">
          <span className="text-5xl text-saffron mb-2"><FaUserFriends /></span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-saffron text-center mb-2">Join Our Sangha</h1>
          <p className="text-lg text-gray-700 font-light italic text-center max-w-xl">
            "Come, walk the path of spiritual awakening together."
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white/80 dark:bg-gray-100/80 rounded-xl shadow p-6 flex flex-col items-center text-center">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-serif text-saffron mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Membership Form */}
        <div className="bg-white/80 dark:bg-gray-100/80 rounded-xl shadow p-8 mb-12">
          <h2 className="text-2xl font-serif text-saffron text-center mb-6">Become a Member</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-saffron focus:ring-1 focus:ring-saffron"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-saffron focus:ring-1 focus:ring-saffron"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Why do you want to join our sangha?"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-saffron focus:ring-1 focus:ring-saffron"
              required
            />
            <button
              type="submit"
              className="w-full bg-saffron py-3 rounded-lg hover:bg-saffron/90 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif text-saffron text-center mb-6">Member Experiences</h2>
          <div className="bg-white/80 dark:bg-gray-100/80 rounded-xl shadow p-6">
            <p className="text-gray-700 italic mb-4">
              "Joining this sangha has transformed my spiritual journey. The community support and daily practices have brought immense peace to my life."
            </p>
            <p className="text-saffron font-semibold">- Priya Sharma</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-100/80 rounded-xl shadow p-6">
            <p className="text-gray-700 italic mb-4">
              "The teachings and meditation sessions have helped me find inner clarity and purpose. I'm grateful to be part of this spiritual family."
            </p>
            <p className="text-saffron font-semibold">- Rajesh Kumar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSanghaSection;