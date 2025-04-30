import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Images
import aboutImage from "../components/Images/aboutimage.jpeg";
import member1 from "../components/Images/anas.jpg";
import member2 from "../components/Images/awais.jpg";
import member3 from "../components/Images/junaid.jpg";

const AboutPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-75"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl mb-6"
            >
              About <span className="text-blue-400">Our Vision</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-xl leading-8 text-gray-300 max-w-3xl mx-auto"
            >
              Pioneering innovation with purpose, we bridge the gap between
              technology and human potential.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20" ref={ref}>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInVariants} className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-75 group-hover:opacity-100 transition duration-500 blur-lg group-hover:blur-sm"></div>
              <img
                src={aboutImage}
                alt="Our Team"
                className="relative rounded-lg shadow-2xl transform group-hover:scale-101 transition duration-500"
              />
            </motion.div>

            <motion.div variants={containerVariants}>
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-white sm:text-4xl mb-8"
              >
                Redefining <span className="text-blue-400">Excellence</span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed mb-8"
              >
                We are a collective of visionaries, engineers, and creatives
                dedicated to building solutions that matter.
              </motion.p>
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Our <span className="text-blue-400">Core Values</span>
                </h3>
                <div className="space-y-6">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                    <h4 className="text-xl font-semibold text-blue-400">
                      Innovation
                    </h4>
                    <p className="text-gray-300 mt-2">
                      Continuously evolving to solve tomorrow’s challenges
                      today.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                    <h4 className="text-xl font-semibold text-blue-400">
                      Integrity
                    </h4>
                    <p className="text-gray-300 mt-2">
                      Upholding transparency, trust, and accountability in all
                      we do.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                    <h4 className="text-xl font-semibold text-blue-400">
                      Collaboration
                    </h4>
                    <p className="text-gray-300 mt-2">
                      Fostering synergy through inclusive and respectful
                      teamwork.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center text-white sm:text-4xl mb-12"
            >
              Meet Our <span className="text-blue-400">Team</span>
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {[
                { name: "Anas Imtiaz", image: member1 },
                { name: "Awais Khan", image: member2 },
                { name: "Muhammad Junaid", image: member3 },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/50 border border-gray-700/50 p-6 rounded-xl flex flex-col items-center hover:shadow-xl transition"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-500"
                  />
                  <h4 className="text-xl font-semibold text-white">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-400">Team Member</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
