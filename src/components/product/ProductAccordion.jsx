import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-sand">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-semibold text-charcoal tracking-[0.1em] uppercase">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-warm-gray transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-warm-gray leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};

const ProductAccordion = ({ product }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <div>
            <p className="font-medium text-charcoal mb-1">Materials:</p>
            <p className="text-warm-gray">{product.materials}</p>
          </div>
          <div>
            <p className="font-medium text-charcoal mb-1">Care Instructions:</p>
            <p className="text-warm-gray">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <div>
            <p className="font-medium text-charcoal mb-1">Shipping:</p>
            <p className="text-warm-gray">{product.shipping}</p>
          </div>
          <div>
            <p className="font-medium text-charcoal mb-1">Returns:</p>
            <p className="text-warm-gray">{product.returns}</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-8">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default ProductAccordion;
