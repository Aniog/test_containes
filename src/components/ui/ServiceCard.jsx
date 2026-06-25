import React from 'react';
import { cn } from '@/lib/utils';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features = [],
  link,
  className = ''
}) => {
  return (
    <div className={cn(
      'bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100',
      className
    )}>
      {Icon && (
        <div className="w-14 h-14 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center mb-5">
          <Icon className="w-7 h-7 text-[#1e3a5f]" />
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
        {title}
      </h3>
      
      <p className="text-[#2d3748] mb-4 leading-relaxed">
        {description}
      </p>
      
      {features.length > 0 && (
        <ul className="space-y-2 mb-5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-[#2d3748]">
              <svg 
                className="w-5 h-5 text-[#38a169] mr-2 flex-shrink-0 mt-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
