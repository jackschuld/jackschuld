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

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold text-gray-900 mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-[2fr,3fr] gap-12 items-start">
            {/* Left Column - Photo and Education */}
            <div className="space-y-8">
              <div className="aspect-square w-full max-w-md mx-auto bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <img 
                    src="/about-me.jpg" 
                    alt="Jack Schuld    " 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Bachelor of Arts, Marketing & Advertising</h4>
                    <p className="text-gray-600">Marquette University, Diederich College of Communication</p>
                    <p className="text-gray-500 text-sm">August 2015 - May 2019</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Full Stack Development Certificate</h4>
                    <p className="text-gray-600">devCodeCamp</p>
                    <p className="text-gray-500 text-sm">December 2022 - March 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Professional Summary and Skills */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Summary</h3>
                <p className="text-gray-700 leading-relaxed">
                  As a <span className="font-bold text-gray-900">Full Stack Software Developer</span>, I specialize in helping <span className="font-bold text-gray-900">small businesses thrive online</span>. I create <span className="font-bold text-gray-900">engaging customer-facing websites</span> and <span className="font-bold text-gray-900">intuitive internal tools</span> that transform complex data into user-friendly solutions. Using modern technologies like Laravel, Angular, and React, I deliver applications that are both <span className="font-bold text-gray-900">powerful and easy to use</span>.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Technical Expertise</h3>
                {Object.entries(skillCategories).map(([category, skills]) => (
                  <div key={category} className="space-y-3">
                    <h4 className="text-gray-900 font-medium">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200 hover:border-gray-900 hover:text-gray-900 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors"
                >
                  View My Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
