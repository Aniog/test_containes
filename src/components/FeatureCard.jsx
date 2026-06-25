import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="w-10 h-10 rounded-full bg-[#8159BB]/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-[#2E2E2F] mb-2">{title}</h3>
      <p className="text-sm text-[#636972]">{description}</p>
    </div>
  );
};

export default FeatureCard;
