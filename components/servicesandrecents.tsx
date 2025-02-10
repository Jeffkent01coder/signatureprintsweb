import React, { useState } from 'react';

interface Project {
  title: string;
  description: string;
  images: string[];
  videoUrl: string | null;
  fullDescription: string;
  client: string;
  type: string;
  year: string;
  previewUrl: string;
  polycrest?: string;
  quote: string;
  quoteAuthor: string;
}

const ServicesAndRecents: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      title: 'Product Branding',
      description:
        'Your vision transformed into a seamless digital experience that engages and resonates with your audience. Every element reflects your brand’s unique identity.',
      images: ['/images/coffee_cup_mockup.png', '/images/sw_2.jpg', '/images/sw_3.jpg'],
      videoUrl: null,
      fullDescription:
        'This project features a sleek, minimalistic website built with Next.js and styled using Tailwind CSS, emphasizing clean aesthetics and user-friendly navigation. The site includes an integrated AI chatbot that enhances user interaction by providing real-time assistance and personalized responses.',
      client: 'Stanbest Group (EA) Limited, Polycrest Africa, Indie Games Group Kenya',
      type: 'Software Development',
      year: '2024',
      previewUrl: 'https://github.com/Jeffkent01coder',
      polycrest: 'https://polycrest.africa/',
      quote:
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      quoteAuthor: 'Martin Fowler',
    },
    {
      title: 'Graphics Design',
      description:
        'Your brand’s personality, captured in a single, powerful logo.',
      images: [
        '/images/graphics.png',
        '/images/mockup_2.jpg',
        '/images/mockup_3.jpg',
        '/images/mockup_4.jpg',
        '/images/mockup_5.jpg',
        '/images/mockup_6.jpg',
        '/images/mockup_7.jpg',
      ],
      videoUrl: null,
      fullDescription:
        'Blending creativity with purpose, our graphic design transforms visuals into compelling stories that resonate. Every color, line, and layout is thoughtfully crafted to capture attention and inspire action.',
      client: 'Stancap Enterprises',
      type: 'Graphic',
      year: '2024',
      previewUrl: 'https://www.behance.net/geoffreyerastus',
      quote:
        'Great design is more than just aesthetics; it’s a visual story that speaks louder than words and lingers longer than a glance',
      quoteAuthor: 'AI',
    },
    {
      title: 'Cloth Branding',
      description:
        'Seamlessly blending aesthetics with functionality, our UI/UX design transforms user interactions into delightful experiences.',
      images: [
        '/images/embroiderjamper.png',
        '/images/UI_1.png',
        '/images/UIDesign.jpg',
        '/images/UIDesign_2.jpg',
      ],
      videoUrl: null,
      fullDescription:
        'I design with a deep understanding that great user experiences go beyond just looks. My UI/UX design blends creative flair with strategic thinking, creating interfaces that are both visually striking and user-friendly.',
      client: 'Stanbest Group (EA) Limited',
      type: 'User Interface/User Experience Design',
      year: '2024',
      previewUrl:
        'https://www.figma.com/design/CALoyJqgn3oYv2ryML7BFv/Stanbest?node-id=0-1&t=TtBFpTfzeHyUwW0T-1',
      quote:
        "We tend to forget that behind every product, there's a person – a human with dreams, struggles, and emotions. UX design is about connecting the heart of the designer to the heart of the user",
      quoteAuthor: 'Aarron Walter',
    },
    {
      title: 'Plain Cloth Delivery',
      description: 'This is a dummy project for demonstration purposes.',
      images: ['/images/plainJamper.png', '/images/dummy2.jpg'],
      videoUrl: null,
      fullDescription:
        'This dummy project serves as an example of the project grid. It does not contain real content but illustrates how additional projects would appear.',
      client: 'Dummy Client',
      type: 'Dummy Type',
      year: '2023',
      previewUrl: '#',
      quote: 'This is a dummy quote.',
      quoteAuthor: 'Dummy Author',
    },
  ];

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    if (selectedProject && !selectedProject.videoUrl) {
      setCurrentImageIndex((currentImageIndex + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject && !selectedProject.videoUrl) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length
      );
    }
  };

  return (
    <div>
      {/* Project Grid */}
      <div className="bg-gray-900 w-full py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white inline-block">Latest Work</h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openProject(project)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedProject && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 overflow-y-auto"
          onClick={closeModal}
        >
          <div className="min-h-screen flex items-center justify-center p-4" onClick={e => e.stopPropagation()}>
            <div className="bg-gray-800 w-full max-w-4xl lg:max-w-6xl xl:max-w-7xl rounded-lg overflow-hidden flex flex-col relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-gray-700 rounded-full p-2 hover:bg-gray-600 transition-colors z-10"
                aria-label="Close Modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Content */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative h-64 lg:h-[calc(100vh-8rem)] max-h-[800px]">
                    {selectedProject.videoUrl ? (
                      <video controls className="w-full h-full object-cover">
                        <source src={selectedProject.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      selectedProject.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${selectedProject.title} - Image ${index + 1}`}
                          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${
                            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  {!selectedProject.videoUrl && selectedProject.images.length > 1 && (
                    <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
                      <button onClick={prevImage} className="bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button onClick={nextImage} className="bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>

                {/* Right Side - Content */}
                <div className="w-full lg:w-1/2 p-6 md:p-8 bg-gray-800 overflow-y-auto max-h-[calc(100vh-8rem)]">
                  <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-300 mb-6 text-sm md:text-base">{selectedProject.fullDescription}</p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <span className="text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <span className="font-semibold w-20 text-gray-400">Client:</span>
                      <span className="text-blue-400 flex-grow">{selectedProject.client}</span>
                    </div>
                    <div className="h-px bg-gray-700 w-full"></div>
                    <div className="flex items-center">
                      <span className="text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                      <span className="font-semibold w-20 text-gray-400">Type:</span>
                      <span className="text-blue-400 flex-grow">{selectedProject.type}</span>
                    </div>
                    <div className="h-px bg-gray-700 w-full"></div>
                    <div className="flex items-center">
                      <span className="text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span className="font-semibold w-20 text-gray-400">Year:</span>
                      <span className="flex-grow text-gray-400">{selectedProject.year}</span>
                    </div>
                    <div className="h-px bg-gray-700 w-full"></div>
                    <div className="flex items-center">
                      <span className="text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                      <span className="font-semibold w-20 text-gray-400">Preview:</span>
                      <a href={selectedProject.previewUrl} className="text-orange-500 hover:underline flex-grow">
                        More Work
                      </a>
                    </div>
                    {selectedProject.polycrest && (
                      <div className="flex items-center">
                        <span className="text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                        <span className="font-semibold w-20 text-gray-400">Preview:</span>
                        <a href={selectedProject.polycrest} className="text-orange-500 hover:underline flex-grow">
                          Polycrest Africa
                        </a>
                      </div>
                    )}
                  </div>
                  <blockquote className="border-l-4 border-gray-700 pl-4 italic text-gray-300 text-sm md:text-base">
                    &quot;{selectedProject.quote}&quot;
                    <footer className="text-gray-400 mt-2">— {selectedProject.quoteAuthor}</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesAndRecents;
