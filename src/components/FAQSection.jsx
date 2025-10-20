import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaDumbbell } from "react-icons/fa";

const faqs = [
  {
    question: "How long before I start seeing results?",
    answer:
      "Most clients notice visible changes within 3–4 weeks of consistent training and nutrition. However, results vary based on your effort, body type, and starting point.",
  },
  {
    question: "Do I need gym access for this program?",
    answer:
      "No. The program can be customized for home or gym workouts depending on your equipment and environment.",
  },
  {
    question: "Is nutrition guidance included?",
    answer:
      "Yes. You’ll receive a personalized meal plan, healthy recipes, and support to help you build sustainable eating habits.",
  },
  {
    question: "Can beginners join this program?",
    answer:
      "Absolutely! The program is tailored to your fitness level, whether you're a complete beginner or an experienced athlete.",
  },
  {
    question: "How will I stay motivated throughout?",
    answer:
      "You’ll have weekly check-ins, progress tracking, and direct communication with your coach to keep you accountable and motivated.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    // <section className="bg-[#801d1d] text-white py-20 px-6 md:px-12">
    //   <div className="max-w-4xl mx-auto text-center">
    //     <motion.h2
    //       initial={{ opacity: 0, y: 30 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.8 }}
    //       className="text-4xl font-bold mb-6"
    //     >
    //       Frequently Asked Questions
    //     </motion.h2>

    //     <motion.p
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.9, delay: 0.2 }}
    //       className="text-gray-300 mb-12"
    //     >
    //       Got questions? We've got you covered. Get the clarity you need before joining the program.
    //     </motion.p>

    //     <div className="space-y-4">
    //       {faqs.map((faq, index) => (
    //         <motion.div
    //           key={index}
    //           layout
    //           transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
    //           className="bg-[#222] rounded-xl shadow-lg overflow-hidden border border-[#E53935]/30"
    //         >
    //           <button
    //             className="flex justify-between items-center w-full text-left px-6 py-5 focus:outline-none"
    //             onClick={() => toggleFAQ(index)}
    //           >
    //             <span className="font-semibold text-lg">{faq.question}</span>
    //             <motion.span
    //               animate={{ rotate: activeIndex === index ? 180 : 0 }}
    //               transition={{ duration: 0.3 }}
    //             >
    //               <FaChevronDown className="text-[#E53935]" />
    //             </motion.span>
    //           </button>

    //           <AnimatePresence>
    //             {activeIndex === index && (
    //               <motion.div
    //                 key="content"
    //                 initial={{ opacity: 0 }}
    //                 animate={{ opacity: 1 }}
    //                 exit={{ opacity: 0 }}
    //                 transition={{ duration: 0.3 }}
    //                 className="px-6 pb-5 text-gray-300 text-sm"
    //               >
    //                 {faq.answer}
    //               </motion.div>
    //             )}
    //           </AnimatePresence>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="relative py-24 bg-gradient-to-br from-[#000000] via-[#000000] to-[#2B0000] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl text-[#E53935] md:text-5xl font-extrabold mb-4">
            Questions? <br /> We’ve Got Answers <FaDumbbell />
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Get clarity before you begin your transformation. These FAQs cover
            what most clients ask before joining the program.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
              className="backdrop-blur-md bg-white/10 border border-white/10
               rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-5"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-[#E53935]" />
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-gray-300 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

