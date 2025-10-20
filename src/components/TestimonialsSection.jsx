import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client1.png";
import client3 from "../assets/images/client1.png";

const testimonials = [
  {
    id: 1,
    name: "Jessica Moore",
    title: "Lost 18kg in 6 Months",
    image: client1,
    quote:
      "Coach Ryan completely changed my life! I feel stronger, healthier, and more confident than ever. His methods truly work!",
  },
  {
    id: 2,
    name: "Michael Lee",
    title: "Built Lean Muscle",
    image: client2,
    quote:
      "The best fitness experience I’ve ever had. Ryan’s attention to detail and motivation made every session enjoyable.",
  },
  {
    id: 3,
    name: "Sarah Kim",
    title: "Body & Mind Transformation",
    image: client3,
    quote:
      "I didn’t just get fit — I learned how to live a balanced lifestyle. Ryan’s coaching goes beyond the gym.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="relative bg-[#1C1C1C] text-white py-20 px-6 md:px-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#E53935]/20 via-transparent to-[#E53935]/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-[#E53935]"
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Real stories from real clients who trusted Coach Ryan to guide them on
          their fitness journey.
        </motion.p>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-[#262626] rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -top-8 w-20 h-20 rounded-full border-4 border-[#E53935] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-[#E53935] text-sm mb-4">{t.title}</p>

                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 italic leading-relaxed">
                  “{t.quote}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
