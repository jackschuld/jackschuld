import { motion } from "framer-motion";

const Hero = () => {
  const scrollToNext = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center text-center text-white px-6 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/hero-3.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      }}
      id="hero"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-creative-dark/80 to-creative-primary/90" />
      
      {/* Content */}
      <div className="container mx-auto max-w-4xl z-10">
        <motion.span
          className="block font-sans text-creative-accent text-sm uppercase tracking-[0.2em] mb-4 font-light"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Web Developer & Digital Marketer
        </motion.span>
        
        <motion.h1
          className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight relative mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="block">Crafting Digital</span>
          <span className="block">That <span className="text-creative-accent italic">Captivates</span></span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mt-4 mb-8 opacity-80 font-light max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I build compelling digital experiences that combine creativity with 
          technical precision to deliver outstanding results.
        </motion.p>
        
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            onClick={(e) => scrollToNext(e, 'projects')}
            className="px-8 py-3 bg-creative-accent text-creative-dark font-medium rounded-sm hover:bg-white transition-colors duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToNext(e, 'contact')}
            className="px-8 py-3 border border-white/50 rounded-sm hover:bg-white/10 transition-all duration-300"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
      
      {/* Creative scroll indicator */}
      <a 
        href="#about" 
        onClick={(e) => scrollToNext(e, 'about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-white/70 text-xs uppercase tracking-widest mb-2 group-hover:text-creative-accent transition-colors duration-300">Explore</span>
          <motion.div
            className="w-8 h-12 rounded-full border-2 border-white/40 flex justify-center pt-2 group-hover:border-creative-accent transition-colors duration-300"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-3 rounded-full bg-white/60 group-hover:bg-creative-accent transition-colors duration-300"
              animate={{ 
                y: [0, 6, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </a>
    </section>
  );
};

export default Hero;