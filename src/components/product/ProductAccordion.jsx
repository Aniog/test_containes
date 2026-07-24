import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b border-stone-200">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left hover:text-gold transition-colors"
    >
      <span className="text-sm uppercase tracking-wider font-medium">
        {title}
      </span>
      <ChevronDown
        className={`w-5 h-5 transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-[500px] pb-5' : 'max-h-0'
      }`}
    >
      <div className="text-stone-600 leading-relaxed">{children}</div>
    </div>
  </div>
);

export default function ProductAccordion({ product }) {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: 'Description',
      content: product.longDescription,
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <div>
            <p className="font-medium text-stone-800 mb-1">Materials</p>
            <p>{product.materials}</p>
          </div>
          <div>
            <p className="font-medium text-stone-800 mb-1">Care Instructions</p>
            <p>{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ];

  return (
    <div className="border-t border-stone-200 mt-10">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
