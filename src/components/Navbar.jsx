const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-md z-50 flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Jack Schuld</h1>
        <div className="space-x-6">
          <a href="#projects" className="text-gray-700 hover:text-black transition">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-black transition">Contact</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;