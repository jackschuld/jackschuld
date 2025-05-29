import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for background effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    
    // EmailJS configuration
    const serviceId = 'service_ufiqt7e';
    const templateId = 'template_qops3ur';
    const publicKey = 'q_rkQl5tLNjzeIevE';
    
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setIsSubmitting(false);
        setSubmitError(true);
        
        // Reset error message after 5 seconds
        setTimeout(() => {
          setSubmitError(false);
        }, 5000);
      });
  };

  return (
    <section id="contact" className="py-24 relative bg-creative-primary overflow-hidden">
      
      <motion.div 
        className="absolute -top-20 -right-20 text-creative-light opacity-10 transform"
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 40, ease: "linear" },
          scale: { repeat: Infinity, duration: 8, ease: "easeInOut" }
        }}
      >
        <svg width="400" height="400" viewBox="0 0 200 200">
          <path fill="currentColor" d="M45.3,-76.2C56.9,-69.1,63.3,-52.8,71.2,-37.7C79.1,-22.7,88.5,-8.9,88.5,5C88.5,19,79,33.1,67.8,44.1C56.5,55,43.3,63,29.4,69.7C15.5,76.5,0.8,82,-15.6,82.6C-32,83.1,-50.3,78.6,-64.1,67.7C-77.9,56.8,-87.2,39.4,-88.8,22.1C-90.4,4.8,-84.2,-12.4,-78.2,-30.8C-72.1,-49.3,-66.2,-68.9,-53.6,-75.8C-40.9,-82.7,-21.5,-76.9,-2.6,-72.8C16.3,-68.6,33.6,-66.2,45.3,-76.2Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute -bottom-24 -left-24 text-creative-light opacity-10 transform"
        animate={{ 
          rotate: -360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 50, ease: "linear" },
          scale: { repeat: Infinity, duration: 12, ease: "easeInOut" }
        }}
      >
        <svg width="400" height="400" viewBox="0 0 200 200">
          <path fill="currentColor" d="M45.6,-77.8C60.3,-71.2,74.2,-60.8,81.6,-46.9C89,-33,89.9,-16.5,87.6,-1.3C85.4,13.8,80,27.7,72.1,39.7C64.2,51.7,53.9,62,41.5,69.1C29.2,76.3,14.6,80.4,-0.2,80.7C-15.1,81,-30.1,77.5,-41.3,69.4C-52.4,61.3,-59.5,48.7,-64.8,36C-70.2,23.3,-73.6,10.7,-74.2,-2.6C-74.9,-15.9,-72.8,-29.7,-66.4,-41.9C-60,-54.1,-49.4,-64.5,-37.1,-72.5C-24.7,-80.4,-10.7,-85.7,2.8,-90.3C16.3,-94.9,32.6,-98.7,45.6,-77.8Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
      
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block text-creative-accent text-sm uppercase tracking-[0.2em] font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.span>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-serif font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's Create Something <span className="text-creative-accent italic">Amazing</span>
          </motion.h2>
          
          <div className="h-1 w-24 bg-creative-accent mx-auto mb-6"></div>
          
          <motion.p 
            className="text-creative-light/70 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have a project in mind or just want to connect? I'd love to hear from you.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-8 rounded-sm shadow-xl border border-white/10 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-creative-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6 relative">Send a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative">
              <div>
                <label htmlFor="name" className="block text-creative-light/80 mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-creative-accent focus:ring-1 focus:ring-creative-accent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-creative-light/80 mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-creative-accent focus:ring-1 focus:ring-creative-accent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-creative-light/80 mb-2 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-creative-accent focus:ring-1 focus:ring-creative-accent resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-sm text-creative-dark font-bold transition-all duration-300 overflow-hidden relative ${
                  isSubmitting 
                    ? 'bg-white/50 cursor-wait' 
                    : 'bg-creative-accent hover:bg-white'
                }`}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </motion.button>
              
              {submitSuccess && (
                <motion.div 
                  className="mt-4 py-3 px-4 bg-green-500/20 border border-green-500/30 text-green-100 rounded-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitError && (
                <motion.div 
                  className="mt-4 py-3 px-4 bg-red-500/20 border border-red-500/30 text-red-100 rounded-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Failed to send message. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            className="text-white space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Get in Touch</h3>
              <p className="text-creative-light/70 mb-6">
                Whether you're looking for a website, digital marketing expertise, 
                or a collaboration, I'm here to help turn your vision into reality.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="mt-1 bg-white/10 p-2 rounded-sm">
                    <svg className="w-5 h-5 text-creative-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">Email</h4>
                    <a 
                      href="mailto:schuldjack@gmail.com" 
                      className="text-creative-light hover:text-creative-accent transition-colors"
                    >
                      schuldjack@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="mt-1 bg-white/10 p-2 rounded-sm">
                    <svg className="w-5 h-5 text-creative-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">Social</h4>
                    <div className="flex space-x-4 mt-1">
                      <a 
                        href="https://github.com/jackschuld" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-creative-light hover:text-creative-accent transition-colors"
                      >
                        GitHub
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/jackschuld/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-creative-light hover:text-creative-accent transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 