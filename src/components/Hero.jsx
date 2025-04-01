import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black text-white px-6">
      <motion.h1
        className="text-6xl font-bold tracking-tight"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Jack Schuld
      </motion.h1>
      <p className="text-2xl mt-4 opacity-80">Software Developer & Designer</p>
      <a
        href="#projects"
        className="mt-6 px-8 py-3 text-lg border border-white rounded-lg hover:bg-white hover:text-black transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;