import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="contact"
      className="bg-[#000000] text-white min-h-screen 
      flex flex-col md:flex-row items-center 
      justify-between md:px-[8rem] py-16"
    >
      {/* Left Content */}
      <motion.div
        className="md:w-1/2 space-y-6 px-12 py-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Transform Your Body,
          <span className="text-[#E53935]"> Build Unstoppable Confidence</span>
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          Join my personalized fitness coaching program designed to help you
          burn fat, <br />
          build strength, and stay consistent — without boring workouts or
          strict diets.
        </p>

        <div>
          <a
            href="https://wa.me/2348106706460?text=Hi%20Coach!%20I%27m%20interested%20in%20booking%20a%20free%20fitness%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E53935] text-white px-8 py-3
             rounded-full font-semibold text-lg shadow-lg
              hover:bg-red-700 transition"
          >
            Book a Free Session
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/src/assets/images/hero-image.png"
          alt="Fitness coach training client"
          className="rounded-2xl shadow-2xl w-[90%] 
          md:w-[80%] object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
