import React from 'react';

const ProductCard = ({ title, description, specs, icon: Icon }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-[#C5A46E] hover:shadow-lg transition-all duration-300">
      <div className="w-14 h-14 bg-[#0A1628] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C5A46E] transition-colors">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-[#0A1628] mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
      {specs && specs.length > 0 && (
        <ul className="space-y-2">
          {specs.map((spec, index) => (
            <li key={index} className="text-sm text-gray-500 flex items-start gap-2">
              <span className="text-[#C5A46E] mt-1">•</span>
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductCard;
