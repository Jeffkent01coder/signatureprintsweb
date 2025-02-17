import React, { useState } from "react";

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
  // polycrest?: string;
  quote: string;
  quoteAuthor: string;
}

const ServicesAndRecents: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "Product Branding",
      description:
        "We offer professional product branding services across Kenya, helping businesses create unique, eye-catching packaging, labels, and designs that enhance brand recognition and market appeal.",
      images: [
        "/images/coffee_cup_mockup.png",
        "/images/Free_Pen_Mockup_4.jpg",
        "/images/5887072.jpg",
        "/images/wire-bound-notebook-mockup (1).png",
        "/images/wire-bound-notebook-mockup (2).png",
      ],
      videoUrl: null,
      fullDescription:
        "Our product branding services in Kenya cover everything from packaging design and labels to customized promotional materials. We work closely with businesses to develop visually compelling and strategic branding that makes products stand out in the market. Whether you need custom prints, labels, or full product packaging solutions, we ensure high-quality, innovative designs that align with your brand identity and target audience.",
      client:
        "Several Clients across the country",
      type: "Branding",
      year: "2024, 2025",
      previewUrl: "#",
      quote:
        "A brand is not just a product, it's a promise.",
      quoteAuthor: "David Aaker",
    },
    {
      title: "Graphics Design",
      description:
        "We offer professional graphic design services across Kenya, creating stunning posters, logos, banners, and more. Our designs are tailored to enhance your brand identity and make a lasting impact.",
      images: [
        "/images/Poster.jpg",
        "/images/mlogo.png",
        "/images/logo.png",
      ],
      videoUrl: null,
      fullDescription:
        "Our graphic design services in Kenya cover everything from logos and posters to banners, business cards, and digital content. Whether you're a business looking to establish a strong brand identity or an individual in need of eye-catching visuals, we deliver high-quality, creative designs that stand out. With a keen eye for detail and a passion for aesthetics, we ensure that every project is unique, visually appealing, and aligned with your vision.",
      client: "Several Clients across the country",
      type: "Graphic Design",
      year: "2024, 2025",
      previewUrl: "#",
      quote:
        "Design is the silent ambassador of your brand.",
      quoteAuthor: "Paul Rand",
    },
    {
      title: "Cloth Branding",
      description:
        "We offer professional cloth branding services across Kenya, helping businesses and individuals customize fabrics with logos, designs, and prints",
      images: [
        "/images/embroiderjamper.png",
        "/images/Free Back Hoddie Mockup.png",
        "/images/e1.jpg",
        "/images/reusable-bag-top-view-mockup.png",
        "/images/e2.jpg",
        "/images/simple-t-shirt-mockup.png",
        "/images/t1.jpg",
        "/images/t2.jpg",
        "/images/t3.jpg",
        "/images/tote.jpg",
        "/images/gt1.jpg",
        "/images/gt2.jpg",
        "/images/gt3.jpg",
        "/images/gt4.jpg",
        "/images/gt5.jpg",
        "/images/gt6.jpg",
      ],
      videoUrl: null,
      fullDescription:
        "We provide cloth branding services countywide in Kenya, helping businesses and individuals customize their fabrics with unique designs and logos. Our efficient process ensures high-quality branding with fast delivery, allowing clients to enhance their identity without delays",
      client: "Several Clients across the country, GameTribe",
      type: "Branding",
      year: "2024, 2025",
      previewUrl:
        "#",
      quote:
        "Quality means doing it right when no one is looking.",
      quoteAuthor: "Henry Ford",
    },
    {
      title: "Plain Cloth Delivery",
      description: "Kenya's plain cloth delivery services have expanded nationwide, offering a reliable and efficient way for businesses and individuals to receive fabrics directly to their doorstep",
      images: [
        "/images/plainJamper.png",
        "/images/p1.jpg",
        "/images/p2.jpg",
        "/images/p3.jpg",
        "/images/p4.jpg",
        "/images/p5.jpg",
        "/images/p6.jpg",
        "/images/p7.jpg",
        "/images/p8.jpg",
        "/images/p9.jpg",
        "/images/p10.jpg",
        "/images/p11.jpg",
        "/images/p12.jpg",
        "/images/p13.jpg",
      ],
      videoUrl: null,
      fullDescription:
        "We offer plain cloth delivery services countywide in Kenya, ensuring that businesses and individuals receive quality fabrics quickly and conveniently. Our reliable logistics network allows customers to access a variety of textiles without the hassle of traveling, saving both time and costs",
      client: "Several Clients Country Wide",
      type: "Sales and Delivery",
      year: "2024, 2025",
      previewUrl: "#",
      quote: "Coming together is a beginning, staying together is progress, and working together is success.",
      quoteAuthor: "Henry Ford",
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
      setCurrentImageIndex(
        (currentImageIndex + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && !selectedProject.videoUrl) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  return (
    <div id="services">
      {/* Project Grid */}
      <div className="bg-gray-900 w-full py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white inline-block">
              Services and Latest Work
            </h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto mt-2"></div>
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
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
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
          <div
            className="min-h-screen flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gray-800 w-full max-w-4xl lg:max-w-6xl xl:max-w-7xl rounded-lg overflow-hidden flex flex-col relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-gray-700 rounded-full p-2 hover:bg-gray-600 transition-colors z-10"
                aria-label="Close Modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Content */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative h-64 lg:h-[calc(100vh-8rem)] max-h-[800px]">
                    {selectedProject.videoUrl ? (
                      <video controls className="w-full h-full object-cover">
                        <source
                          src={selectedProject.videoUrl}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      selectedProject.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${selectedProject.title} - Image ${index + 1}`}
                          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${
                            currentImageIndex === index
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                      ))
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  {!selectedProject.videoUrl &&
                    selectedProject.images.length > 1 && (
                      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
                        <button
                          onClick={prevImage}
                          className="bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                </div>

                {/* Right Side - Content */}
                <div className="w-full lg:w-1/2 p-6 md:p-8 bg-gray-800 overflow-y-auto max-h-[calc(100vh-8rem)]">
                  <h2 className="text-yellow-500 text-2xl md:text-3xl font-bold mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-300 mb-6 text-sm md:text-base">
                    {selectedProject.fullDescription}
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <span className="text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>
                      <span className="font-semibold w-20 text-gray-400">
                        Client:
                      </span>
                      <span className="text-blue-400 flex-grow">
                        {selectedProject.client}
                      </span>
                    </div>
                    <div className="h-px bg-gray-700 w-full"></div>
                    <div className="flex items-center">
                      <span className="text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span className="font-semibold w-20 text-gray-400">
                        Type:
                      </span>
                      <span className="text-blue-400 flex-grow">
                        {selectedProject.type}
                      </span>
                    </div>
                    <div className="h-px bg-gray-700 w-full"></div>
                    <div className="flex items-center">
                      <span className="text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                      <span className="font-semibold w-20 text-gray-400">
                        Year:
                      </span>
                      <span className="flex-grow text-gray-400">
                        {selectedProject.year}
                      </span>
                    </div>
                    <div className="h-px bg-gray-700 w-full"></div>
                    <div className="flex items-center">
                      <span className="text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                      <span className="font-semibold w-20 text-gray-400">
                        Preview:
                      </span>
                      <a
                        href={selectedProject.previewUrl}
                        className="text-yellow-500 hover:underline flex-grow"
                      >
                        More Work
                      </a>
                    </div>
                    {/* {selectedProject.polycrest && (
                      <div className="flex items-center">
                        <span className="text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </span>
                        <span className="font-semibold w-20 text-gray-400">
                          Preview:
                        </span>
                        <a
                          href={selectedProject.polycrest}
                          className="text-orange-500 hover:underline flex-grow"
                        >
                          Polycrest Africa
                        </a>
                      </div>
                    )} */}
                  </div>
                  <blockquote className="border-l-4 border-gray-700 pl-4 italic text-gray-300 text-sm md:text-base">
                    &quot;{selectedProject.quote}&quot;
                    <footer className="text-gray-400 mt-2">
                      — {selectedProject.quoteAuthor}
                    </footer>
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
