import React from 'react';

const UGCCard = ({ caption, imageIndex }) => {
  const colors = ['EDE4D7', 'F5EDE3', 'D4B99A', 'E8DFD0', 'C9B8A3'];
  const color = colors[imageIndex % colors.length];
  
  return (
    <div className="ugc-card">
      <img 
        src={`https://placehold.co/360x640/${color}/1C1917?text=`}
        alt={caption}
      />
      <div className="ugc-caption">{caption}</div>
    </div>
  );
};

export default UGCCard;
