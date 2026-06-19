import { useState, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  const images = product.images || ['default-1', 'default-2'];

  return (
    <div ref={ref} className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 bg-velvet-100 rounded-sm overflow-hidden
              transition-all duration-200 ${i === selected ? 'ring-2 ring-gold-500' : 'ring-1 ring-velvet-200 hover:ring-velvet-400'}`}
          >
            <div
              data-strk-img-id={`gallery-thumb-${product.id}-${i}`}
              data-strk-img={`[gallery-title-${product.id}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
              className="w-full h-full"
            />
          </button>
        ))}
      </div>
      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-velvet-100 rounded-sm overflow-hidden">
        <div
          data-strk-img-id={`gallery-main-${product.id}`}
          data-strk-img={`[gallery-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          className="w-full h-full transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
