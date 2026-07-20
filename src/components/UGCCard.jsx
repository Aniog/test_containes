import React from 'react';

const UGCCard = ({ image, caption }) => {
  return (
    <div className="ugc-card flex-shrink-0 w-[160px] md:w-[180px] relative rounded-sm overflow-hidden aspect-[9/16] bg-[#F5F2ED]">
      <img
        src={image}
        alt={caption}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
        <p className="text-white text-xs font-serif tracking-wide leading-tight">
          {caption}
        </p>
      </div>
    </div>
  );
};

export default UGCCard;
