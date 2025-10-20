import { motion } from "framer-motion";
import bgImage from "../assets/images/transformation-image.png"; // 🖼️ Add your background image here
import { FaDumbbell } from "react-icons/fa";

const FinalCTA = () => {
  return (
    <section
      id="contact"
      className="relative text-white py-24 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-4xl mx-auto text-center px-6 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
        >
          Take the First Step Toward Your Dream Body
          
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-200 max-w-2xl mx-auto mb-10 text-lg"
        >
          Join Coach Daniel’s elite transformation program today. Get the body,
          confidence, and energy you’ve always wanted — starting now.
        </motion.p>

        {/* Email Signup Form */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-5 py-3 rounded-full border border-gray-400 bg-white/10 placeholder-white text-white focus:outline-none focus:border-[#E53935] transition"
          />
          <button
            type="submit"
            className="bg-[#E53935] hover:bg-[#ff4a45] text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all"
          >
            Join Now
          </button>
        </motion.form>

        {/* Small text under form */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-400 text-sm mt-6"
        >
          We respect your privacy. No spam — only fitness tips and program
          updates.
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCTA;

