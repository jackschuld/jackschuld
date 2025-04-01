const Footer = () => {
    return (
      <footer id="contact" className="py-10 bg-gray-900 text-white text-center">
        <h2 className="text-3xl">Contact Me</h2>
        <p className="text-gray-400 mt-2">Email: schuldjack@gmail.com</p>
        <div className="mt-4 space-x-4">
          <a href="https://github.com/jackschuld" className="text-gray-400 hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/jackschuld/" className="text-gray-400 hover:text-white transition">LinkedIn</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;