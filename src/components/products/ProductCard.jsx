import React from 'react';

const ProductCard = ({ title, description, features }) => {
  return (
    <div className="group bg-white border border-[#E8E6E1] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="h-1.5 bg-[#C5A46E]"></div>
      
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-[#0A1628] mb-4 tracking-[-0.3px] group-hover:text-[#C5A46E] transition-colors">
          {title}
        </h3>
        
        <p className="text-[#2C3E50] text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        <div className="pt-6 border-t border-[#E8E6E1]">
          <div className="text-xs tracking-[1.5px] text-[#C5A46E] font-medium mb-3">KEY FEATURES</div>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-[#2C3E50] flex items-start gap-2">
                <span className="text-[#C5A46E] mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;