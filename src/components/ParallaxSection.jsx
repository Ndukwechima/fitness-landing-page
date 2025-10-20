import React from "react";
import { motion } from "framer-motion";

const ParallaxSection = () => {
  return (
    <section
    id="program"
      className="relative h-[100vh] flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url('/src/assets/images/hero-image.png')`, // Replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/90 via-[#1C1C1C]/70 to-[#E53935]/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-8"
        >
          Transform. Perform. Dominate.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
        >
          Your next level starts here — train with intensity, fuel with focus, 
          and live with purpose. No shortcuts. Just results.
        </motion.p>

        {/* Floating Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Training Plan",
              desc: "Tailored to your goals, experience, and lifestyle for maximum results.",
            },
            {
              title: "Nutrition Coaching",
              desc: "Balanced, realistic meal guidance that fuels performance and recovery.",
            },
            {
              title: "Progress Tracking",
              desc: "Visualize your transformation with measurable weekly progress updates.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1C1C1C]/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-[#E53935]/30 hover:border-[#E53935]/60 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-3 text-[#E53935]">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;


