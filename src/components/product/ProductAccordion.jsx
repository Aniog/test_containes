import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function ProductAccordion({ product }) {
  const [openSection, setOpenSection] = useState('description');

  const sections = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-charcoal mb-1">Materials</h4>
            <p className="text-charcoal/70">{product.material}</p>
          </div>
          <div>
            <h4 className="font-medium text-charcoal mb-1">Care Instructions</h4>
            <p className="text-charcoal/70">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-charcoal mb-1">Shipping</h4>
            <p className="text-charcoal/70">{product.shipping}</p>
          </div>
          <div>
            <h4 className="font-medium text-charcoal mb-1">Returns</h4>
            <p className="text-charcoal/70">{product.returns}</p>
          </div>
        </div>
      ),
    },
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="border-t border-charcoal/10">
      {sections.map((section) => (
        <div key={section.id} className="border-b border-charcoal/10">
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-sans text-sm tracking-wide text-charcoal">
              {section.title}
            </span>
            <ChevronDown
              size={18}
              className={`text-charcoal/50 transition-transform duration-300 ${
                openSection === section.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openSection === section.id ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <div className="text-charcoal/70 text-sm leading-relaxed">
              {section.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
