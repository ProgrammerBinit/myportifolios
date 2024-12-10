import { motion } from "framer-motion";
import imgEcommerce from '../assets/e-cemmerce.jpg';
import imgRRMS from '../assets/rrms.jpg';
import imgVipRef from '../assets/vipreferences.jpg';

const projects = [
  {
    title: "E-Commerce",
    description: "A beautiful web application built with React.",
    image: imgEcommerce,
    link: "#",
  },
  {
    title: "Record Room Management System",
    description: "It is web friendly application which is handling file management system.",
    image: imgRRMS,
    link: "http://ddaservices.dda.org.in/compactor/",
  },
  {
    title: "Vip References",
    description: "This is a web friendly application which is for the employees related to Delhi Development Authority.",
    image: imgVipRef,
    link: "http://ddaservices.dda.org.in/vipreferences/",
  },
];

const PortfolioPage = () => {
  return (
    <section className="min-h-screen text-white text-[clamp(8px, 4vw, 18px)] sm:text-base" id="project">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:text-sm">
        {/* Header Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-gray-300 max-w-lg mx-auto">
            A showcase of my projects and creations. Click on any project to
            learn more.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { delayChildren: 0.3, staggerChildren: 0.2 },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
            key={index}
            className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition 
                       w-full"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:cursor-pointer"
              />
            </a>
            <div className="p-4">
            <h2 className="font-semibold  md:text-lg">
                {project.title}
            </h2>

              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
              >
                View Project →
              </a>
            </div>
          </motion.div>
          
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPage;
