import { motion } from 'framer-motion';
import Project from './Project';

const Projects = () => {
  const onlineRecordsProject = {
    title: "Virtual Vinyl (Capstone)",
    description: "A full-stack web application that allows users to manage their record collection digitally including album collection management, wishlist functionality, interactive music playback, and album reviews!",
    images: [
      { 
        src: '/record-store/homepage.png', 
        alt: 'Homepage',
        description: 'Welcome to Virtual Vinyl - Your digital record collection manager'
      },
      { 
        src: '/record-store/2010s-search.png', 
        alt: 'Search Results',
        description: 'Search through albums by artist, album name, or song title'
      },
      { 
        src: '/record-store/album-top.png', 
        alt: 'Album View Top',
        description: 'Detailed album information with integrated Spotify player'
      },
      { 
        src: '/record-store/album-bottom.png', 
        alt: 'Album View Bottom',
        description: 'User reviews and related music videos from YouTube'
      },
      { 
        src: '/record-store/collection.png', 
        alt: 'User Collection',
        description: 'View and manage your personal record collection'
      },
      { 
        src: '/record-store/wishlist.png', 
        alt: 'Wishlist',
        description: 'Keep track of albums you want to add to your collection'
      }
    ],
    features: [
      'User authentication with JWT',
      'Album collection & wishlist management',
      'Interactive music player (Spotify API)',
      'Album reviews and ratings',
      'Related music videos (YouTube API)',
      'Advanced search functionality'
    ],
    repositoryLinks: [
      {
        text: 'View Repo',
        url: 'https://github.com/jackschuld/Online_Record_Store'
      },
      {
        text: 'Frontend Code',
        url: 'https://github.com/jackschuld/Online_Record_Store/tree/main/frontend'
      },
      {
        text: 'Backend Code',
        url: 'https://github.com/jackschuld/Online_Record_Store/tree/main/backend'
      }
    ]
  };

  const aiMarketplaceProject = {
    title: "AI Marketplace",
    description: "A full-stack application built with React and .NET that integrates with OpenAI's API to provide AI services. Features a C# backend with MySQL database for robust data management and API handling.",
    images: [
      { 
        src: '/aimarketplace/chat.png', 
        alt: 'AI Marketplace Homepage',
        description: 'AI Marketplace - Access powerful AI tools and services'
      },
      { 
        src: '/aimarketplace/levels.png', 
        alt: 'AI Marketplace Homepage',
        description: 'AI Marketplace - Access powerful AI tools and services'
      },
      { 
        src: '/aimarketplace/login.png', 
        alt: 'AI Marketplace Homepage',
        description: 'AI Marketplace - Access powerful AI tools and services'
      }
    ],
    features: [
      'React frontend with modern UI/UX',
      '.NET C# backend architecture',
      'MySQL database integration',
      'OpenAI API integration',
      'Secure user authentication',
      'RESTful API design'
    ],
    repositoryLinks: [
      {
        text: 'Live Demo',
        url: 'https://marketplace.jackschuld.com'
      },
      {
        text: 'Frontend Code',
        url: 'https://github.com/jackschuld/aimarketplace-ui'
      },
      {
        text: 'Backend Code',
        url: 'https://github.com/jackschuld/aimarketplace-api'
      }
    ]
  };

  const salesSiteProject = {
    title: "Sales Portfolio",
    description: "A React-based website designed to showcase my web development skills and services to potential clients. Features responsive design, dark mode integration, and email contact integration.",
    images: [
      { 
        src: '/sales/hero.png', 
        alt: 'Sales Site Hero',
        description: 'Professional web development services showcase'
      },
      { 
        src: '/sales/phone.png', 
        alt: 'Mobile View',
        description: 'Fully responsive design for all devices'
      },
      { 
        src: '/sales/lets_connect.png', 
        alt: 'Contact Section',
        description: 'Direct client communication through integrated contact form'
      }
    ],
    features: [
      'React frontend with modern UI components',
      'Responsive design for all devices',
      'EmailJS integration for contact form',
      'Portfolio showcase',
      'Service offerings display',
      'Client testimonials section'
    ],
    repositoryLinks: [
      {
        text: 'Live Demo',
        url: 'https://website.jackschuld.com'
      },
      {
        text: 'Frontend Code',
        url: 'https://github.com/jackschuld/sales'
      }
    ]
  };

  const spacePiratesProject = {
    title: "Space Pirates (Game)",
    description: "A desktop game where you battle pirates in space! Download and play on Windows.",
    images: [
      { 
        src: '/spacepirates/launch.png',
        alt: 'Space Pirates Start Screen',
        description: 'Screenshot of the start screen'
      },
      { 
        src: '/spacepirates/start.png',
        alt: 'Space Pirates Galaxy Screen',
        description: 'Screenshot of the galaxy screen'
      },
      { 
        src: '/spacepirates/explore.png',
        alt: 'Space Pirates Solar System Details',
        description: 'Screenshot of the solar system details'
      },
      { 
        src: '/spacepirates/solarsystem.png',
        alt: 'Space Pirates Solar System Screen',
        description: 'Screenshot of the solar system screen'
      }
    ],
    features: [
      'Random map generation',
      'Inventory system',
      'Exploration features',
      'Upgrades',
      'Save and load system'
    ],
    repositoryLinks: [
      {
        text: 'Download Game (ZIP)',
        url: '/spacepirates/SpacePirates.zip'
      }
    ],
    instructions: [
      "Download and unzip the file.",
      "Double-click the launch file to start the game.",
      "Requires .NET runtime."
    ]
  };

  const projects = [spacePiratesProject, salesSiteProject, aiMarketplaceProject, onlineRecordsProject];

  return (
    <section id="projects" className="py-24 bg-white px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-creative-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-creative-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.span 
            className="inline-block text-creative-accent text-sm uppercase tracking-[0.2em] font-medium mb-3"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Work
          </motion.span>
          <h2 className="text-5xl font-serif font-bold text-creative-primary mb-2">Featured Projects</h2>
          <div className="h-1 w-20 bg-creative-accent mb-6"></div>
          <p className="text-creative-primary/80 max-w-xl text-lg">
            Explore my latest work showcasing a blend of creative design and technical expertise.
          </p>
        </motion.div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Project {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;