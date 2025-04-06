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

  const projects = [aiMarketplaceProject, onlineRecordsProject];

  return (
    <section id="projects" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold text-gray-900 mb-12">Featured Projects</h2>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;