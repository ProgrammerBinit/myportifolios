import { useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiOracle, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb,
  SiMysql, SiSqlite, SiDotnet
} from "react-icons/si";
import { 
  Database, Server, Layers, CloudLightning, CloudCog
} from "lucide-react";

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const skillCategories = [
    {
      name: "Frontend",
      icon: Layers,
      skills: [
        { name: "HTML", level: 95, color: "bg-orange-600", icon: FaHtml5 },
        { name: "CSS", level: 85, color: "bg-blue-500", icon: FaCss3 },
        { name: "Tailwind CSS", level: 55, color: "bg-teal-500", icon: SiTailwindcss },
        { name: "Bootstrap", level: 85, color: "bg-purple-500", icon: FaBootstrap },
        { name: "JavaScript", level: 80, color: "bg-yellow-500", icon: SiJavascript },
        { name: "React", level: 60, color: "bg-blue-400", icon: FaReact  },
      ],
    },
    {
      name: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 65, color: "bg-green-600", icon: SiNodedotjs },
        { name: "Express.js", level: 60, color: "bg-gray-700", icon: SiExpress },
        { name: "Asp.Net C#", level: 80, color: "bg-blue-600", icon: SiDotnet  },
        { name: "Asp.Net Core", level: 70, color: "bg-blue-500", icon: SiDotnet  },
      ],
    },
    {
      name: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 60, color: "bg-green-500", icon: SiMongodb },
        { name: "MySQL", level: 75, color: "bg-orange-600", icon: SiMysql },
        { name: "MsSql", level: 90, color: "bg-green-300", icon: SiSqlite },
        { name: "Oracle", level: 90, color: "bg-red-500", icon: SiOracle  },
      ],
    },
    {
      name: "DevOps",
      icon: CloudLightning,
      skills: [
        { name: "AWS", level: 45, color: "bg-orange-500", icon: CloudCog },
      ],
    },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skillCategories.flatMap((category) => category.skills)
      : skillCategories.find((cat) => cat.name === activeCategory)?.skills ||
        [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-auto p-4 md:p-8"
    >
      <div className="container mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white"
        >
          My Skills
        </motion.h1>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8 md:mb-12">
          <motion.button
            onClick={() => setActiveCategory("All")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 md:px-6 py-2 text-sm rounded-full ${
              activeCategory === "All"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 shadow-md"
            }`}
          >
            All Skills
          </motion.button>
          {skillCategories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-2 md:px-4 sm:py-2 py-1 text-sm rounded-full flex items-center space-x-1 ${
                activeCategory === category.name
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 shadow-md"
              }`}
            >
              <category.icon
                size={16}
                className="md:size-6 sm:size-0.5 xl:size-10 lg:size-8"
              />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.01,
                  type: "spring",
                  stiffness: 50,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#e0a5d9] via-[#b1b1ce] to-[#b77dce] rounded-lg shadow-md p-4 md:p-6 transition-all cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-10 h-6 md:w-12 md:h-12 rounded-full ${skill.color} flex items-center justify-center mr-4`}
                  >
                    <SkillIcon size={20} className="text-white md:text-24" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1,
                      type: "spring",
                      stiffness: 50,
                    }}
                    className={`${skill.color} h-2 rounded-full`}
                  ></motion.div>
                </div>
                <p className="text-right text-xs md:text-sm text-gray-600 mt-2">
                  {skill.level}%
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsPage;