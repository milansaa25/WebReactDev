import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  "How fast can I hire a dedicated React developer through WPD?",
  "How fast can I hire a dedicated React developer through WPD?",
  "How fast can I hire a dedicated React developer through WPD?",
  "How fast can I hire a dedicated React developer through WPD?",
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
        <p className="text-sm text-gray-600 font-medium py-4">
          Get answers to common questions about hiring React JS developers and
          our services.
        </p>
      </h2>

      <div className="space-y-4">
        {faqs.map((q, i) => (
          <motion.div
            key={i}
            className="border rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
            >
              <span>{q}</span>
              <span>{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && (
              <div className="p-4 text-gray-600 bg-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. React
                developers are usually available within 24-48 hours.
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
