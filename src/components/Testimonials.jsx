import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Initial Consultation & Discovery",
    description:
      "Our process begins with a confidential, obligation-free consultation with a senior project manager. We listen carefully to your business goals, project requirements, technology stack, timeline, team dynamics, and compliance needs.",
    highlight:
      "You get: Clear advice on team structure, a realistic feasibility assessment, and an estimated budget.",
  },
  {
    id: 9,
    title: "Secure, Transparent Billing",
    description:
      "You receive weekly or monthly invoices with contribution reports, sprint summaries, and no hidden 'bench' costs.",
    highlight:
      "You get: Complete transparency and predictable cost management.",
  },
  // ➝ add more steps here
];

export default function HiringSteps() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) =>
      prev === 0 ? steps.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-100 px-4 py-10">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Steps for React JS Developer Hiring: Step-by-Step
      </h2>
      <p className="text-gray-500 max-w-2xl text-center mb-8">
        Looking to hire dedicated React JS developers for your next project?
        Our hiring process is streamlined, secure, and designed to match
        your business with world-class talent—fast.
      </p>

      {/* Step Card */}
      <motion.div
        key={steps[currentStep].id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4 }}
        className="bg-white shadow-lg rounded-2xl p-6 max-w-xl w-full text-center border"
      >
        <span className="text-blue-600 font-semibold">
          Step {steps[currentStep].id} of {steps.length}
        </span>

        <h3 className="text-xl font-semibold mt-3 mb-2 text-gray-800">
          {steps[currentStep].title}
        </h3>

        <p className="text-gray-600 mb-4">{steps[currentStep].description}</p>

        <p className="text-blue-700 font-medium italic">
          {steps[currentStep].highlight}
        </p>
      </motion.div>

      {/* Navigation */}
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={prevStep}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>
        <button
          onClick={nextStep}
          className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition"
        >
          <FaChevronRight className="text-white" />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-2 mt-6">
        {steps.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentStep ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
