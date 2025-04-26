import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
      <motion.div 
        className="bg-white rounded-sm shadow-xl overflow-hidden h-full flex flex-col border-b-4 border-creative-accent relative group"
        whileHover={{ 
          y: -5,
          transition: { duration: 0.2 }
        }}
      >
        <div className="p-7 flex flex-col h-full">
          <h3 className="text-2xl font-serif font-bold text-creative-primary mb-3 relative">
            {title}
            <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-creative-accent"></span>
          </h3>
          <p className="text-creative-primary/80 mb-5 text-sm leading-relaxed">
            {description}
          </p>
          
          <div className="mb-4 flex-grow">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              effect="fade"
              fadeEffect={{ crossFade: true }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="w-full rounded-sm overflow-hidden"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center">
                    <div className="w-full overflow-hidden">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="rounded-sm w-full h-auto cursor-pointer transition-transform duration-700 group-hover:scale-105"
                        onClick={() => handleImageClick(image)}
                      />
                    </div>
                    <p className="mt-2 text-creative-primary/70 text-sm image-description italic">
                      {image.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-auto">
            <h4 className="text-lg font-serif font-bold text-creative-primary mb-3 flex items-center">
              <span className="inline-block mr-2 w-5 h-0.5 bg-creative-accent"></span>
              Key Features
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-left mb-5">
              {(showAllFeatures ? features : features.slice(0, 3)).map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-creative-primary/80 text-sm flex items-start">
                    <span className="text-creative-accent mr-2">•</span> 
                    {feature}
                  </span>
                </motion.li>
              ))}
              {!showAllFeatures && features.length > 3 && (
                <li>
                  <button 
                    onClick={() => setShowAllFeatures(true)}
                    className="text-creative-accent hover:text-creative-primary text-sm cursor-pointer transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Show {features.length - 3} more features
                  </button>
                </li>
              )}
              {showAllFeatures && (
                <li>
                  <button 
                    onClick={() => setShowAllFeatures(false)}
                    className="text-creative-accent hover:text-creative-primary text-sm cursor-pointer transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                    Show less
                  </button>
                </li>
              )}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {repositoryLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-creative-primary text-white text-sm rounded-sm hover:bg-creative-accent transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.text}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Full-scale Image Modal */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 bg-creative-primary/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="relative max-w-7xl w-full max-h-[90vh]"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white hover:text-creative-accent z-10 p-2 bg-creative-dark/30 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-sm shadow-2xl"
            />
            {selectedImage.description && (
              <motion.p 
                className="mt-4 text-white text-center text-lg font-serif italic"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {selectedImage.description}
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Project; 