import { motion } from 'framer-motion';
// import { Code, User, Laptop, Presentation } from 'lucide-react';
import { User, Laptop } from 'lucide-react';
import profilepic from "../assets/myProfilePic.png";
const AboutUsPage = () => {
  return (
    <>
    <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-100"
          >
            About Me...
          </motion.h1>
    <div className="min-h-screen flex items-center justify-center px-4 py-12" id='about'>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full  shadow-xl rounded-2xl flex flex-col md:flex-row overflow-hidden bg-gradient-to-r from-[#c6a2d0] to-[#913273]"
      >
       
        {/* Left Side - Developer Image */}
        <div className="md:w-1/3 relative">
          <motion.img 
            src={profilepic} 
            alt="B.Kumar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-opacity-50"></div>
        </div>

        {/* Right Side - Profile Details */}
        <div className="md:w-2/3 p-8 space-y-6">
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-100"
          >
            Binit Kumar
          </motion.h1>

          <motion.p 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-100"
          >
            Computer Science & Engineering Student | MERN Stack | Asp.Net C# Developer
          </motion.p>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-4">
              <User className="text-white" />
              <p className="text-white">My Master of Computer application was completed in 2024.</p>
            </div>

            <div className="flex items-center space-x-4">
              <Laptop className="text-green-600" />
              <p className="text-white">My graduation was completed in 2021.</p>
            </div>

            <div className="flex items-center space-x-4">
              {/* <Code className="text-purple-600" />
              <p>Programming Languages: C#, C, C++, Java</p> */}
            </div>

            <div className="flex items-center space-x-4">
              {/* <Presentation className="text-red-600" />
              <p>Skills: Web Development</p> */}
            </div>
          </motion.div>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-6"
          >
            <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Contact Me
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
    </>
    
  );
};
export default AboutUsPage;