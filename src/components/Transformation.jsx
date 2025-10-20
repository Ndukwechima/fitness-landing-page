
import bgImage from "../assets/images/transformation-image.png"; // rename and place your image in /src/assets/
import { motion } from "framer-motion";
import { FaDumbbell, FaHeartbeat, FaSmile, FaBolt } from "react-icons/fa";

const benefits = [
  {
    icon: <FaDumbbell className="text-[#E53935] text-4xl mb-4" />,
    title: "Build Strength & Power",
    desc: "Unlock your potential with science-backed workouts that sculpt muscle and increase endurance.",
  },
  {
    icon: <FaHeartbeat className="text-[#E53935] text-4xl mb-4" />,
    title: "Boost Energy & Vitality",
    desc: "Feel unstoppable every day with a personalized fitness plan that fits your lifestyle.",
  },
  {
    icon: <FaSmile className="text-[#E53935] text-4xl mb-4" />,
    title: "Gain Confidence",
    desc: "Transform your mindset as your body transforms — confidence that radiates in and out of the gym.",
  },
  {
    icon: <FaBolt className="text-[#E53935] text-4xl mb-4" />,
    title: "Stay Consistent",
    desc: "No crash diets or quick fixes — just long-term results built on sustainable habits.",
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // delay between cards
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Transformation = () => {
  return (
    <section
      id=""
      className="relative py-20 px-6 md:px-16 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "brightness(35%)",
        }}
      ></div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#1C1C1C] opacity-90"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Real Results. Real Confidence.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto"
        >
          Every session, every rep, every meal plan — designed to bring you
          closer to the best version of yourself.
        </motion.p>

        {/* Animated Benefit Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-[#1C1C1C]/85 rounded-2xl p-8 shadow-lg hover:shadow-red-600/40 cursor-default"
            >
              <div className="flex flex-col items-center text-center">
                {benefit.icon}
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Transformation;

