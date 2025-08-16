import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Pages that have hero sections and should start with transparent navbar
  const heroPages = ['/', '/about', '/moments', '/films'];
  const isHeroPage = heroPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Videos', path: '/films' },
    { name: 'Contact', path: '/contact' },
  ];

  // Show white background if not on hero page OR if scrolled on hero page
  const shouldShowWhiteBg = !isHeroPage || isScrolled;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowWhiteBg ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-cormorant font-bold">
            <span className={`font-cormorant text-3xl font-light tracking-widest ${
              shouldShowWhiteBg ? 'text-black' : 'text-white'
            }`}>
              DAMA CAFE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-inter font-medium transition-colors duration-300 relative group ${
                  shouldShowWhiteBg ? 'text-black hover:text-gray-800' : 'text-white hover:text-gray-100'
                } ${location.pathname === item.path ? 'opacity-100' : 'opacity-95'}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  shouldShowWhiteBg ? 'bg-black' : 'bg-white'
                } ${location.pathname === item.path ? 'w-full' : ''}`} />
              </Link>
            ))}
            <a
              href="tel:+1234567890"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                shouldShowWhiteBg 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              <Phone size={16} />
              <span className="font-inter font-medium">Call</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              shouldShowWhiteBg ? 'text-black' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="py-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="block px-6 py-3 text-black hover:bg-gray-50 transition-colors duration-200 font-inter"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="px-6 py-3"
                >
                  <a
                    href="tel:+1234567890"
                    className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 w-fit"
                  >
                    <Phone size={16} />
                    <span className="font-inter font-medium">Call Now</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
