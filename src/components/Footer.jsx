import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-creative-dark py-12 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(rgba(255,159,28,0.3) 2px, transparent 2px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and tagline */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif italic text-2xl flex items-center">
              <span className="font-normal text-white">Jack</span>
              <span className="font-bold text-white ml-1">Schuld</span>
            </h3>
            <p className="text-creative-light/70 max-w-sm">
              Building engaging digital experiences that combine creativity with technical precision.
            </p>
            <div className="pt-4">
              <button 
                onClick={scrollToTop}
                className="flex items-center text-creative-accent hover:text-white group transition-all duration-300"
                aria-label="Back to top"
              >
                <span className="mr-2 text-sm">Back to top</span>
                <motion.div 
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="border border-creative-accent/30 rounded-full p-1 group-hover:border-white/30 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </motion.div>
              </button>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-medium mb-4 pb-2 border-b border-creative-accent/20">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-creative-light/70 hover:text-creative-accent transition-colors">About Me</a>
              </li>
              <li>
                <a href="#projects" className="text-creative-light/70 hover:text-creative-accent transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-creative-light/70 hover:text-creative-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div className="md:col-span-4">
            <h4 className="text-white font-medium mb-4 pb-2 border-b border-creative-accent/20">Connect</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-creative-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:schuldjack@gmail.com" className="text-creative-light/70 hover:text-creative-accent transition-colors">
                  schuldjack@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-creative-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <a 
                  href="https://github.com/jackschuld" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-creative-light/70 hover:text-creative-accent transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-creative-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
                </svg>
                <a 
                  href="https://www.linkedin.com/in/jackschuld/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-creative-light/70 hover:text-creative-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-creative-light/50 text-sm">
            © {currentYear} Jack Schuld. All rights reserved.
          </p>
          <p className="text-creative-light/50 text-sm mt-2 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;