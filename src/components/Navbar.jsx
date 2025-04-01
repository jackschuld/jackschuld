const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-md z-50 flex justify-between items-center px-8 py-4">
      <h1 
        onClick={scrollToTop}
        className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-black transition-colors"
      >
        Jack Schuld
      </h1>
      <div className="space-x-6">
        <a href="#about" className="text-gray-700 hover:text-black transition">About</a>
        <a href="#projects" className="text-gray-700 hover:text-black transition">Projects</a>
        <a href="#contact" className="text-gray-700 hover:text-black transition">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;