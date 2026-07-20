import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProductAccordions({ product }) {
  const sections = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="divide-y divide-clay">
      {sections.map((section) => (
        <AccordionItem key={section.key} title={section.title}>
          <p className="text-umber text-sm leading-relaxed whitespace-pre-line">
            {section.content}
          </p>
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-xs tracking-widest uppercase text-espresso font-medium">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-umber transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
