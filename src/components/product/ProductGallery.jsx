import { useState } from 'react';

const thumbnails = [
  'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=100&q=80',
  'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=100&q=80&fit=crop&crop=bottom',
  'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=100&q=80&fit=crop&crop=top',
];

export default function ProductGallery({ images }) {
  const [selected, setSelected] = useState(0);
  const galleryImages = images?.length ? images : thumbnails;

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails - vertical on desktop, horizontal on mobile */}
      <div className="flex md:flex-col gap-2 order-2 md:order-1">
        {galleryImages.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`w-14 h-16 md:w-16 md:h-20 flex-shrink-0 overflow-hidden border transition-all duration-300 ${
              selected === index
                ? 'border-gold-300 opacity-100'
                : 'border-warm-200 opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={img}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] bg-warm-100 overflow-hidden order-1 md:order-2">
        <img
          src={galleryImages[selected]}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}