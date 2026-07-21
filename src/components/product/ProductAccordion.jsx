import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProductAccordion({ product }) {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'materials', label: 'Materials & Care', content: `${product.materials}. ${product.care}` },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  const toggle = (key) => {
    setOpenSection(openSection === key ? null : key);
  };

  return (
    <div className="border-t border-velvet-950/10">
      {sections.map((section) => (
        <div key={section.key} className="border-b border-velvet-950/10">
          <button
            onClick={() => toggle(section.key)}
            className="w-full flex items-center justify-between py-5 text-left"
          >
            <span className="text-xs tracking-widest uppercase font-medium text-velvet-950">
              {section.label}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-velvet-500 transition-transform duration-300 ${
                openSection === section.key ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openSection === section.key ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-velvet-700 leading-relaxed">{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}