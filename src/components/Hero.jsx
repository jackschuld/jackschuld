import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      className="min-h-[90vh] flex flex-col justify-center items-center text-center text-white px-6 relative"
      style={{
        backgroundImage: 'url("/hero-3.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black/80" />
      
      {/* Content */}
      <motion.h1
        className="text-6xl font-bold tracking-tight relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Jack Schuld
      </motion.h1>
      <p className="text-2xl mt-4 opacity-80 relative z-10">Software Developer & Designer</p>
      <a
        href="#projects"
        className="mt-6 px-8 py-3 text-lg border border-white rounded-lg hover:bg-white hover:text-black transition relative z-10"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;