import React from "react";
import {FiCode,FiDatabase,FiShoppingCart,FiRefreshCw,FiLayers,FiShield,FiZap,FiGitBranch,
} from "react-icons/fi";

const About = () => {
  const services = [
    {
      icon: <FiCode className="text-pink-500 text-3xl" />,
      title: "Custom Laravel Apps",
      desc: "Scalable web applications built to your exact specifications",
    },
    {
      icon: <FiDatabase className="text-purple-500 text-3xl" />,
      title: "API Development",
      desc: "RESTful and GraphQL APIs with enterprise-grade security",
    },
    {
      icon: <FiShoppingCart className="text-green-500 text-3xl" />,
      title: "E-commerce Solutions",
      desc: "High-converting online stores with advanced features",
    },
    {
      icon: <FiRefreshCw className="text-yellow-500 text-3xl" />,
      title: "Legacy Migration",
      desc: "Seamless migration from old PHP frameworks to Laravel",
    },
    {
      icon: <FiLayers className="text-orange-500 text-3xl" />,
      title: "SaaS Architecture",
      desc: "Multi-tenant applications with isolated data layers",
    },
    {
      icon: <FiShield className="text-red-500 text-3xl" />,
      title: "Security Hardening",
      desc: "Enterprise-grade security with compliance standards",
    },
    {
      icon: <FiZap className="text-blue-500 text-3xl" />,
      title: "Performance Optimization",
      desc: "Lightning-fast applications with advanced caching",
    },
    {
      icon: <FiGitBranch className="text-pink-400 text-3xl" />,
      title: "DevOps Integration",
      desc: "CI/CD pipelines and cloud-native deployments",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          What We Do as Your React JS Development Company?
        </h2>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
          Our hired React JS developers specialize in crafting enterprise-grade
          solutions that ensure scalability, security, and performance for your
          business needs.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-center border hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
