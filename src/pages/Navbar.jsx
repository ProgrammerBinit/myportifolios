import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Users, Settings, MessageCircle } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Users, label: 'About', href: '#about' },
    { icon: MessageCircle, label: 'Contact', href: '#contact' },
    { icon: Settings, label: 'Project', href: '#project' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { 
      opacity: 0, 
      x: '100%',
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1, 
      y: 0,
      transition: {
        delay: custom * 0.1
      }
    })
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#ddbaba] via-[#a58888] to-[#c79898] shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
        <a href="/">B.Kumar</a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="mr-2" size={20} />
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button 
          className="md:hidden z-50"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg md:hidden"
            >
              <div className="flex flex-col h-full pt-20 px-6 space-y-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center text-gray-700 hover:text-blue-600"
                    variants={menuItemVariants}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={toggleMenu}
                  >
                    <item.icon className="mr-4" size={24} />
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;