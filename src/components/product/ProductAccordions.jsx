import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const accordionData = [
  {
    id: 'description',
    title: 'Description',
    content: (product) => product.longDescription,
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    content: (product) => (
      <>
        <p className="mb-3"><strong>Materials:</strong> {product.materials}</p>
        <p><strong>Care Instructions:</strong> {product.care}</p>
      </>
    ),
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    content: (product) => (
      <>
        <p className="mb-3">{product.shipping}</p>
        <p>{product.returns}</p>
      </>
    ),
  },
];

export default function ProductAccordions({ product }) {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="border-t border-charcoal/10">
      {accordionData.map((accordion) => (
        <div key={accordion.id} className="border-b border-charcoal/10">
          <button
            onClick={() => toggleAccordion(accordion.id)}
            className="w-full flex items-center justify-between py-5 text-left group"
          >
            <span 
              className="text-xs uppercase tracking-widest text-charcoal"
              style={{ letterSpacing: '0.15em' }}
            >
              {accordion.title}
            </span>
            <ChevronDown 
              size={16} 
              className={`text-charcoal/50 transition-transform duration-300 ${
                openId === accordion.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              openId === accordion.id ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <div className="text-sm text-charcoal/70 leading-relaxed">
              {accordion.content(product)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
