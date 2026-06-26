import React from 'react';

const FeatureCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#0A1628]" />
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-[#0A1628] mb-2">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
