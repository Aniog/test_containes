import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const sections = [
  { key: 'description', title: 'Description' },
  { key: 'materials', title: 'Materials & Care' },
  { key: 'shipping', title: 'Shipping & Returns' },
];

export function ProductAccordion({ product }) {
  const [open, setOpen] = useState('description');

  const content = {
    description: product.description,
    materials: (
      <>
        <p className="mb-3">{product.materials}</p>
        <p>{product.care}</p>
      </>
    ),
    shipping: product.shipping,
  };

  return (
    <div className="border-t border-velmora-taupe/30">
      {sections.map((section) => (
        <div key={section.key} className="border-b border-velmora-taupe/30">
          <button
            type="button"
            onClick={() => setOpen(open === section.key ? null : section.key)}
            className="flex w-full items-center justify-between py-4 text-left"
          >
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-velmora-espresso">
              {section.title}
            </span>
            <ChevronDown
              size={16}
              className={`text-velmora-brown transition-transform duration-300 ${
                open === section.key ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-out-lux ${
              open === section.key ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <div className="font-display text-sm font-light leading-relaxed text-velmora-brown">
              {content[section.key]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
