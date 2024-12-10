import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin
} from 'lucide-react';

const Footer = ({ 
  companyName = 'B.Kumar', 
  socialLinks = {}, 
  navigationLinks = {} 
}) => {
  // Default social links if not provided
  const defaultSocialLinks = {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com'
  };

  // Default contact information
   // Default navigation links
  const defaultNavigationLinks = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
    products: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Integrations', href: '/integrations' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Support', href: '/support' },
      { name: 'Documentation', href: '/docs' },
    ]
  };

  // Merge provided links with defaults
  const mergedSocialLinks = { ...defaultSocialLinks, ...socialLinks };
  const mergedNavLinks = { 
    company: navigationLinks.company || defaultNavigationLinks.company,
    products: navigationLinks.products || defaultNavigationLinks.products,
    resources: navigationLinks.resources || defaultNavigationLinks.resources
  };

  // Social media icon components
  const SocialIcons = [
    { Icon: Facebook, key: 'facebook' },
    { Icon: Twitter, key: 'twitter' },
    { Icon: Instagram, key: 'instagram' },
    { Icon: Linkedin, key: 'linkedin' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{companyName}</h3>
            <p className="text-gray-400 mb-4">
              Innovative solutions for a connected world.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {SocialIcons.map(({ Icon, key }) => (
                <motion.a
                  key={key}
                  href={mergedSocialLinks[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(mergedNavLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-lg capitalize">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ translateX: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 pt-6 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500">
            © {new Date().getFullYear()} {companyName}. All Rights Reserved.
            <span className="ml-4 text-sm">
              <a 
                href="/privacy" 
                className="hover:text-white transition-colors mr-2"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

// PropTypes Validation
Footer.propTypes = {
  companyName: PropTypes.string,
  socialLinks: PropTypes.shape({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string,
    linkedin: PropTypes.string
  }),
  contactInfo: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string
  }),
  navigationLinks: PropTypes.shape({
    company: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
    ),
    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
    ),
    resources: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
    )
  })
};

export default Footer;