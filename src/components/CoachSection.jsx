import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaDumbbell, FaMedal } from "react-icons/fa";
import coachImg from "../assets/images/coach.png"; 

const CoachSection = () => {
  return (
    <section id="about" className="bg-[#0e0d0d] text-white py-16 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Coach Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={coachImg}
            alt="Coach"
            className="rounded-2xl shadow-lg w-full md:w-[90%] object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#E53935]">
            Meet Coach Ryan
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            With over 10 years of experience in personal training, Ryan has
            helped hundreds of clients transform their bodies and rebuild their
            confidence. His holistic fitness approach combines strength
            training, nutrition, and mindset development for long-lasting
            results.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <FaUserTie className="text-[#E53935] text-3xl mb-2" />
              <p className="text-lg font-semibold">10+ Years</p>
              <span className="text-gray-400 text-sm">Coaching Experience</span>
            </div>

            <div className="flex flex-col items-center">
              <FaDumbbell className="text-[#E53935] text-3xl mb-2" />
              <p className="text-lg font-semibold">500+</p>
              <span className="text-gray-400 text-sm">Clients Transformed</span>
            </div>

            <div className="flex flex-col items-center">
              <FaMedal className="text-[#E53935] text-3xl mb-2" />
              <p className="text-lg font-semibold">15+</p>
              <span className="text-gray-400 text-sm">
                Fitness Certifications
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachSection;
