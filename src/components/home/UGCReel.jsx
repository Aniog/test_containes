import React from 'react';

const UGCReel = ({ items }) => {
  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-40 md:w-48 snap-start"
          >
            <div className="aspect-[9/16] rounded-xl overflow-hidden bg-brand-warm">
              <img
                src={item.image}
                alt={item.caption}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-white text-xs font-medium truncate">{item.caption}</p>
              <p className="text-white/70 text-[10px] mt-0.5">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UGCReel;
