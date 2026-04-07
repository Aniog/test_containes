import React, { useState } from 'react';
import { X, Heart, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample cat images - in a real app, these would come from your cat photos
  const catImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop',
      alt: 'Adorable orange tabby cat',
      title: 'Sunny Afternoon',
      description: 'Basking in the warm sunlight by the window'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&h=600&fit=crop',
      alt: 'Cute gray and white kitten',
      title: 'Playful Moments',
      description: 'Always ready for the next adventure'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=800&h=600&fit=crop',
      alt: 'Beautiful black cat with green eyes',
      title: 'Mysterious Beauty',
      description: 'Those enchanting green eyes'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=800&h=600&fit=crop',
      alt: 'Fluffy Persian cat',
      title: 'Fluffy Dreams',
      description: 'The softest fur you\'ve ever seen'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&h=600&fit=crop',
      alt: 'Siamese cat with blue eyes',
      title: 'Blue Eyes',
      description: 'Striking blue eyes that captivate everyone'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop',
      alt: 'Tabby cat sleeping',
      title: 'Sweet Dreams',
      description: 'Peaceful slumber in the afternoon'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=600&fit=crop',
      alt: 'Maine Coon cat',
      title: 'Majestic Maine Coon',
      description: 'Regal and magnificent in every way'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop',
      alt: 'Calico cat portrait',
      title: 'Colorful Personality',
      description: 'A beautiful mix of colors and character'
    }
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % catImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(catImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + catImages.length) % catImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(catImages[prevIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, currentIndex]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {catImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white gallery-item"
            onClick={() => openLightbox(image, index)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 gallery-image"
                loading="lazy"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-semibold text-sm">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 modal-backdrop">
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative max-w-full max-h-full modal-content">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-gray-200 text-sm">{selectedImage.description}</p>
                <div className="flex items-center mt-3 text-gray-300 text-sm">
                  <span>{currentIndex + 1} of {catImages.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;