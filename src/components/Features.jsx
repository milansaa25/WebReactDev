import React from "react";
import { FiTrendingUp, FiDollarSign, FiClock, FiCheckCircle } from "react-icons/fi";

const StatsSection = () => {
  const stats = [
    {
      icon: <FiTrendingUp className="text-green-500 text-4xl" />,
      value: "300%",
      title: "Average Performance Boost",
      desc: "Clients see dramatic improvements",
    },
    {
      icon: <FiDollarSign className="text-yellow-500 text-4xl" />,
      value: "60%",
      title: "Unmatched Cost Efficiency",
      desc: "Significant cost savings guaranteed",
    },
    {
      icon: <FiClock className="text-purple-500 text-4xl" />,
      value: "7 Days",
      title: "Rapid Onboarding",
      desc: "From interview to coding",
    },
    {
      icon: <FiCheckCircle className="text-blue-500 text-4xl" />,
      value: "98%",
      title: "On-Time Delivery",
      desc: "Industry-leading reliability",
    },
  ];

  return (
    <section className="py-16 bg-sky-100">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-600 mt-2">
          Our track record speaks for itself. Here's what sets us apart from the competition.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center border hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="text-2xl font-bold mt-4">{item.value}</h3>
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
