const Projects = () => {
    return (
      <section id="projects" className="py-20 bg-white text-center px-6">
        <h2 className="text-4xl font-semibold text-gray-900">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((project) => (
            <div key={project} className="p-6 bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-gray-800">Project {project}</h3>
              <p className="text-gray-600 mt-2">A brief description of this awesome project.</p>
              <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition">
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;