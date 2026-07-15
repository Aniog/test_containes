import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const sections = ['Description', 'Materials & Care', 'Shipping & Returns'];

export default function ProductAccordion({ product }) {
  const [open, setOpen] = useState(null);

  const toggle = (section) => setOpen(open === section ? null : section);

  const content = {
    Description: product.description,
    'Materials & Care': (
      <>
        <p className="text-sm text-taupe leading-relaxed mb-3">{product.details}</p>
        <p className="text-sm text-taupe leading-relaxed">{product.care}</p>
      </>
    ),
    'Shipping & Returns': <p className="text-sm text-taupe leading-relaxed">{product.shipping}</p>,
  };

  return (
    <div className="border-t border-taupe-pale mt-8">
      {sections.map((section) => (
        <div key={section} className="border-b border-taupe-pale">
          <button
            onClick={() => toggle(section)}
            className="w-full flex items-center justify-between py-4 text-sm tracking-wider uppercase font-sans font-medium text-warm-black hover:text-gold transition-colors"
          >
            {section}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                open === section ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === section ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <div className="text-sm text-taupe leading-relaxed">
              {content[section]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}