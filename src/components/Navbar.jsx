import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const smoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-creative-light/95 backdrop-blur-md shadow-md py-2' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 
            onClick={scrollToTop}
            className={`font-serif italic text-3xl cursor-pointer transition-colors flex items-center gap-2 ${
              scrolled ? 'text-creative-primary' : 'text-white'
            }`}
          >
            <span className="font-normal">Jack</span>
            <span className="font-bold">Schuld</span>
          </h1>
          <p className={`text-xs font-light tracking-widest uppercase ${
            scrolled ? 'text-creative-muted' : 'text-white/70'
          }`}>Digital Craftsman</p>
        </motion.div>

        {/* Hamburger button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className={`w-6 h-6 transition-colors ${
              scrolled ? 'text-creative-primary' : 'text-white'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <a 
            href="#about" 
            onClick={(e) => smoothScroll(e, 'about')}
            className={`creative-link text-sm tracking-wide font-medium ${
              scrolled ? 'text-creative-primary' : 'text-white'
            }`}
          >
            About Me
          </a>
          <a 
            href="#projects" 
            onClick={(e) => smoothScroll(e, 'projects')}
            className={`creative-link text-sm tracking-wide font-medium ${
              scrolled ? 'text-creative-primary' : 'text-white'
            }`}
          >
            Creative Work
          </a>
          <a 
            href="#contact" 
            onClick={(e) => smoothScroll(e, 'contact')}
            className={`creative-link text-sm tracking-wide font-medium ${
              scrolled ? 'text-creative-primary' : 'text-white'
            }`}
          >
            Let's Connect
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className={`px-8 pt-4 pb-6 space-y-4 bg-creative-light/95 backdrop-blur-md`}>
          <a 
            href="#about" 
            onClick={(e) => smoothScroll(e, 'about')}
            className="block text-creative-primary hover:text-creative-accent font-medium transition px-4 py-2 border-l-2 border-creative-muted"
          >
            About Me
          </a>
          <a 
            href="#projects" 
            onClick={(e) => smoothScroll(e, 'projects')}
            className="block text-creative-primary hover:text-creative-accent font-medium transition px-4 py-2 border-l-2 border-creative-muted"
          >
            Creative Work
          </a>
          <a 
            href="#contact" 
            onClick={(e) => smoothScroll(e, 'contact')}
            className="block text-creative-primary hover:text-creative-accent font-medium transition px-4 py-2 border-l-2 border-creative-muted"
          >
            Let's Connect
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;