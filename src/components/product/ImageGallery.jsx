import { useState } from 'react';

const gradients = [
  'from-velmora-cream via-velmora-sand/40 to-velmora-cream',
  'from-velmora-sand/30 via-velmora-cream to-velmora-sand/40',
  'from-velmora-cream via-velmora-sand/50 to-velmora-cream',
];

export default function ImageGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const actualImages = images?.length ? images : ['default-1', 'default-2', 'default-3'];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
        {actualImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 border transition-colors ${
              i === activeIndex
                ? 'border-velmora-gold'
                : 'border-transparent hover:border-velmora-sand'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center`}>
              <div className="w-6 h-6 rounded-full bg-velmora-gold/20" />
            </div>
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-velmora-cream overflow-hidden">
        <div className={`w-full h-full bg-gradient-to-br ${gradients[activeIndex % gradients.length]} flex items-center justify-center transition-all duration-500`}>
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-velmora-gold/25 to-velmora-gold/5 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-velmora-gold/15" />
          </div>
        </div>
      </div>
    </div>
  );
}
