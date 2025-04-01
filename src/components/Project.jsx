import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';

const Project = ({ title, description, images, features, repositoryLinks }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg overflow-hidden h-full flex flex-col border border-gray-200">
        <div className="p-6 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600 mb-4 text-sm">
            {description}
          </p>
          
          <div className="mb-4 flex-grow">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="w-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center">
                    <div className="p-1 w-full">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="rounded-lg shadow-md hover:shadow-xl transition-shadow w-full h-auto cursor-pointer"
                        onClick={() => handleImageClick(image)}
                      />
                    </div>
                    <p className="mt-2 text-gray-600 text-sm image-description">
                      {image.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h4>
            <ul className="grid grid-cols-1 gap-2 text-left">
              {(showAllFeatures ? features : features.slice(0, 3)).map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-gray-600 text-sm">• {feature}</span>
                </li>
              ))}
              {!showAllFeatures && features.length > 3 && (
                <li>
                  <button 
                    onClick={() => setShowAllFeatures(true)}
                    className="text-gray-500 hover:text-gray-700 text-sm cursor-pointer transition-colors"
                  >
                    + Show {features.length - 3} more features
                  </button>
                </li>
              )}
              {showAllFeatures && (
                <li>
                  <button 
                    onClick={() => setShowAllFeatures(false)}
                    className="text-gray-500 hover:text-gray-700 text-sm cursor-pointer transition-colors"
                  >
                    Show less
                  </button>
                </li>
              )}
            </ul>
          </div>

          <div className="mt-4 flex gap-2">
            {repositoryLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-black transition"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Full-scale Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-7xl w-full max-h-[90vh]">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            {selectedImage.description && (
              <p className="mt-4 text-white text-center text-lg">
                {selectedImage.description}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Project; 