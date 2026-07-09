import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const accordions = [
  {
    id: 'description',
    label: 'Description',
    content: null, // filled from product
  },
  {
    id: 'materials',
    label: 'Materials & Care',
    content: null,
  },
  {
    id: 'shipping',
    label: 'Shipping & Returns',
    content: null,
  },
];

export default function ProductAccordion({ product }) {
  const [open, setOpen] = useState('description');

  const items = [
    { id: 'description', label: 'Description', content: product.description },
    { id: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="border-t border-sand">
      {items.map(item => (
        <div key={item.id} className="border-b border-sand">
          <button
            onClick={() => setOpen(open === item.id ? null : item.id)}
            className="w-full flex items-center justify-between py-4 text-left group"
          >
            <span className="font-sans text-xs uppercase tracking-widest-md font-medium text-ink group-hover:text-gold transition-colors">
              {item.label}
            </span>
            <ChevronDown
              size={14}
              strokeWidth={1.5}
              className={`text-muted transition-transform duration-300 ${
                open === item.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              open === item.id ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="font-sans text-sm text-muted leading-relaxed whitespace-pre-line">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
