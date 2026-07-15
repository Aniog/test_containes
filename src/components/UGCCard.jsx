import React from 'react';

const UGCCard = ({ caption, index }) => {
  // Create varied warm gradient backgrounds to simulate jewelry photos
  const gradients = [
    'from-[#C5B5A0] via-[#B89778] to-[#8C6F52]',
    'from-[#D4C9B8] via-[#B89778] to-[#9A8F85]',
    'from-[#E8E0D5] via-[#C5B5A0] to-[#B89778]',
    'from-[#B89778] via-[#8C6F52] to-[#6B6058]',
    'from-[#D4BFA3] via-[#B89778] to-[#8C6F52]',
  ];

  return (
    <div className="ugc-card">
      <div className={`w-full h-full bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center`}>
        <div className="text-center px-4">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full border-2 border-white/40" />
          <div className="text-white/60 text-[10px] tracking-[3px]">JEWELRY</div>
        </div>
      </div>
      <div className="ugc-caption">
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default UGCCard;
