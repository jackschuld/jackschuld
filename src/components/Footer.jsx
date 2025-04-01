const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="py-12 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
      <p className="text-gray-400 mt-2 hover:text-gray-300 transition">
        <a href="mailto:schuldjack@gmail.com">schuldjack@gmail.com</a>
      </p>
      <div className="mt-6 space-x-6">
        <a href="https://github.com/jackschuld" className="text-gray-400 hover:text-white transition">GitHub</a>
        <a href="https://www.linkedin.com/in/jackschuld/" className="text-gray-400 hover:text-white transition">LinkedIn</a>
      </div>
      <div className="mt-8 text-sm text-gray-500">
        © {currentYear} Jack Schuld. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;