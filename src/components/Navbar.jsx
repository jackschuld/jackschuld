import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-md z-50">
      <div className="flex justify-between items-center px-8 py-4">
        <h1 
          onClick={scrollToTop}
          className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-black transition-colors flex items-center gap-2"
        >
          <img src="/parson-icon.png" alt="Logo" width={32} height={32} />
          Jack Schuld
        </h1>

        {/* Hamburger button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
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
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-black transition">About</a>
          <a href="#projects" className="text-gray-700 hover:text-black transition">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-black transition">Contact</a>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-4 pt-2 pb-4 space-y-3">
          <a href="#about" className="block text-gray-700 hover:text-black transition px-4 py-2">About</a>
          <a href="#projects" className="block text-gray-700 hover:text-black transition px-4 py-2">Projects</a>
          <a href="#contact" className="block text-gray-700 hover:text-black transition px-4 py-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;