import React, { useEffect, useState } from 'react';
import { ugcItems } from '@/data/products';
import { resolveStrkImgUrl } from '@/lib/utils';

function UGCImage({ item }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const url = resolveStrkImgUrl(item.imgId);
    if (url) setSrc(url);
  }, [item.imgId]);

  if (!src) {
    return <div className="absolute inset-0 bg-warm-600 animate-pulse" />;
  }

  return (
    <img
      src={src}
      alt={item.caption}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  );
}

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-warm-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="font-sans text-[10px] tracking-widest-2xl uppercase text-gold-light mb-3">
            #VelmoraStyle
          </p>
          <h2 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-white">
            Styled by You
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-5" />
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-x-auto scrollbar-hide px-4 md:px-8">
        <div className="flex gap-4 md:gap-5 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-40 md:w-48 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <UGCImage item={item} />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm md:text-base text-white italic leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
