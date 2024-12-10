import { motion } from "framer-motion";

const experiences = [
  {
    role: "Internship",
    company: "Software Reserch Center Patna",
    duration: "June 2021 - Jan 2022",
    description: "Developed responsive web applications using Css, Bootstrap and Javascript",
  },
  {
    role: "Software Engineer",
    company: "Vedang Hospitality Pvt. Ltd.",
    duration: "Feb 2022 - Dec 2022",
    description: "Designed intuitive user interfaces and experiences for mobile and web platforms.",
  },
  {
    role: "Fullstack Developer",
    company: "Vedang Soft Pvt. Ltd.",
    duration: "Jan 2023 - Continue",
    description: "Created a new project built in Asp.Net Core which is fully responsive.",
  },
];

const ExperiencePage = () => {
  return (
    <section className="min-h-screen  text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Experience</h1>
          <p className="text-gray-300 max-w-lg mx-auto">
            A timeline of my professional journey and milestones.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 w-1 bg-gray-300 h-full transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center  ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } relative`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Content Box */}
                <div className="bg-gradient-to-r from-[#c6a2d0] to-[#913273] text-white p-6 rounded-lg shadow-lg w-full max-w-md transform transition hover:scale-105">
                  <h2 className="text-xl font-bold">{exp.role}</h2>
                  <h3 className="text-white text-sm font-medium">{exp.company}</h3>
                  <p className="text-white mt-2">{exp.duration}</p>
                  <p className="text-white mt-4">{exp.description}</p>
                </div>

                {/* Connector Dot */}
                <div className="w-6 h-6 bg-[#45cd5c] rounded-full absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:-translate-y-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
