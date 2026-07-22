import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const sections = ['Description', 'Materials & Care', 'Shipping & Returns'];

export default function ProductAccordion({ product }) {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  const content = {
    Description: product.description,
    'Materials & Care': (
      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-[#1A1A1A] mb-1">Materials</p>
          <p className="text-sm text-[#6B6B6B] leading-relaxed">{product.details}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-[#1A1A1A] mb-1">Care Instructions</p>
          <p className="text-sm text-[#6B6B6B] leading-relaxed">{product.care}</p>
        </div>
      </div>
    ),
    'Shipping & Returns': (
      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-[#1A1A1A] mb-1">Shipping</p>
          <p className="text-sm text-[#6B6B6B] leading-relaxed">{product.shipping}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-[#1A1A1A] mb-1">Returns</p>
          <p className="text-sm text-[#6B6B6B] leading-relaxed">{product.returns}</p>
        </div>
      </div>
    ),
  };

  return (
    <div className="space-y-0">
      {sections.map((section) => (
        <div key={section} className="border-t border-[#E8E2D8]">
          <button
            onClick={() => toggle(section)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-serif text-lg text-[#1A1A1A]">{section}</span>
            <ChevronDown
              className={`w-4 h-4 text-[#6B6B6B] transition-transform duration-300 ${
                open === section ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === section ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <div className="text-sm text-[#6B6B6B] leading-relaxed">
              {content[section]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}