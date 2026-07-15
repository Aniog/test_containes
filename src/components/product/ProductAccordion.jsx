import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProductAccordion({ product }) {
  const sections = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="border-t border-velmora-sand">
      {sections.map((section) => (
        <AccordionItem key={section.title} title={section.title} content={section.content} />
      ))}
    </div>
  );
}

function AccordionItem({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-velmora-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-widest uppercase font-medium text-velmora-espresso">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-velmora-stone transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-velmora-stone leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  );
}
