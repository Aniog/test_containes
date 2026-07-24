import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
        {product.images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setSelectedImage(i)}
            className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 border-2 transition-all duration-300 ${
              selectedImage === i
                ? 'border-gold-500'
                : 'border-charcoal-100 hover:border-charcoal-300'
            }`}
          >
            <div className="w-full h-full bg-gradient-to-br from-gold-100 to-gold-200 opacity-50" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] bg-charcoal-50 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <img
              data-strk-img-id={product.images[selectedImage].id}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
