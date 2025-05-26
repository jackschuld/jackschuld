import { motion } from "framer-motion";

const About = () => {
  const skillCategories = {
    "Languages & Frameworks": [
      "JavaScript", "TypeScript", "PHP", "Python", "React.js", "Angular", "Laravel", "Django", "HTML", "CSS"
    ],
    "Databases & Tools": [
      "MySQL", "PostgreSQL", "Redis", "Git", "GitHub", "Azure", "AWS", "Postman", "Insomnia"
    ],
    "APIs & Services": [
      "REST API", "Quickbooks API", "Shopify API", "YouTube API", "Google Maps API", "Spotify Web API", "Twilio API"
    ],
    "AI & Analytics": [
      "ChatGPT", "ChatGPT API", "Perplexity", "Gemini", "Semrush", "Tableau", "Salesforce"
    ]
  };

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
    <section id="about" className="py-20 bg-creative-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-creative-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-creative-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <motion.span 
              className="inline-block text-creative-accent text-sm uppercase tracking-[0.2em] font-medium mb-3"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Who I Am
            </motion.span>
            <h2 className="text-5xl font-serif font-bold text-creative-primary mb-2">About Me</h2>
            <div className="h-1 w-20 bg-creative-accent mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-[2fr,3fr] gap-12 items-start">
            {/* Left Column - Photo and Professional Summary */}
            <div className="space-y-8">
              <motion.div 
                className="aspect-square w-full max-w-md mx-auto overflow-hidden shadow-xl relative group"
                whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* <div className="absolute inset-0 bg-creative-accent/20 group-hover:bg-transparent transition-all duration-500 z-10"></div> */}
                <div className="absolute inset-0 transform group-hover:scale-105 transition-all duration-700">
                  <img 
                    src="/about-me.jpg" 
                    alt="Jack Schuld" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </motion.div>

              {/* Professional Summary moved here */}
              <motion.div 
                className="bg-white p-8 rounded-sm shadow-xl relative overflow-hidden"
                whileInView={{ y: [10, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 h-full w-2 bg-creative-accent"></div>
                <h3 className="text-2xl font-serif font-bold text-creative-primary mb-5">Professional Summary</h3>
                <p className="text-creative-primary/90 leading-relaxed text-lg">
                  As a <span className="font-bold text-creative-primary">Full Stack Developer & Digital Marketer</span>, I specialize in helping <span className="font-bold text-creative-primary">small businesses thrive online</span>. I create <span className="font-bold text-creative-primary">engaging customer-facing websites</span> and <span className="font-bold text-creative-primary">intuitive internal tools</span> that transform <span className="font-bold text-creative-primary">complex data into user-friendly solutions</span>. Using modern technologies like Laravel, Angular, and React, I deliver applications that are both <span className="font-bold text-creative-primary">powerful</span> and <span className="font-bold text-creative-primary">easy to use</span>.
                </p>
              </motion.div>

              {/* Education removed from here */}
            </div>

            {/* Right Column - Education, Technical Expertise, and Buttons */}
            <div className="space-y-10">
              {/* Education moved here */}
              <motion.div 
                className="bg-white p-8 rounded-sm shadow-xl border-b-4 border-creative-accent relative overflow-hidden"
                whileInView={{ x: [-10, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-24 h-24"></div>
                <h3 className="text-2xl font-serif font-bold text-creative-primary mb-6 relative z-10">Education</h3>
                <div className="space-y-6 relative">
                  <div className="relative pl-6 before:absolute before:w-1 before:top-0 before:bottom-0 before:left-0 before:bg-creative-accent">
                    <h4 className="font-bold text-lg text-creative-primary">Bachelor of Arts, Marketing & Advertising</h4>
                    <p className="text-creative-muted">Marquette University, Diederich College of Communication</p>
                    <p className="text-creative-muted/70 text-sm mt-1">August 2015 - May 2019</p>
                  </div>
                  <div className="relative pl-6 before:absolute before:w-1 before:top-0 before:bottom-0 before:left-0 before:bg-creative-accent">
                    <h4 className="font-bold text-lg text-creative-primary">Full Stack Development Certificate</h4>
                    <p className="text-creative-muted">devCodeCamp</p>
                    <p className="text-creative-muted/70 text-sm mt-1">December 2022 - March 2023</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="space-y-8"
                whileInView={{ y: [10, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <h3 className="text-2xl font-serif font-bold text-creative-primary">Technical Expertise</h3>
                  <div className="h-px flex-grow bg-creative-muted/30 ml-4"></div>
                </div>
                {Object.entries(skillCategories).map(([category, skills], index) => (
                  <motion.div 
                    key={category} 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-creative-primary font-bold text-lg">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, idx) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 + index * 0.2 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-white text-creative-primary/80 rounded-sm text-sm border border-creative-muted/30 hover:border-creative-accent hover:text-creative-accent hover:shadow-md transition-all group"
                        >
                          <span className="relative inline-block group-hover:translate-x-1 transition-transform">
                            {skill}
                          </span>
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                whileInView={{ y: [10, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a
                  href="#projects"
                  onClick={(e) => scrollToNext(e, 'projects')}
                  className="inline-flex items-center justify-center px-8 py-3 bg-creative-primary text-white rounded-sm shadow-md hover:bg-creative-accent transform hover:scale-105 transition-all duration-300"
                >
                  <span>View My Projects</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => scrollToNext(e, 'contact')}
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-creative-primary text-creative-primary rounded-sm hover:bg-creative-primary hover:text-white transition-all duration-300"
                >
                  <span>Contact Me</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
