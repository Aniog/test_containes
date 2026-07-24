import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const items = [
  { id: 'description', label: 'Description' },
  { id: 'materials', label: 'Materials & Care' },
  { id: 'shipping', label: 'Shipping & Returns' },
];

export default function ProductAccordion({ product }) {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  const content = {
    description: product.details,
    materials: (
      <div className="space-y-3">
        <div>
          <h4 className="text-xs tracking-[0.1em] uppercase text-charcoal/70 mb-1">Materials</h4>
          <p className="text-sm text-warm-gray leading-relaxed">{product.material}</p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.1em] uppercase text-charcoal/70 mb-1">Care Instructions</h4>
          <p className="text-sm text-warm-gray leading-relaxed">{product.care}</p>
        </div>
      </div>
    ),
    shipping: (
      <div className="space-y-3">
        <div>
          <h4 className="text-xs tracking-[0.1em] uppercase text-charcoal/70 mb-1">Shipping</h4>
          <p className="text-sm text-warm-gray leading-relaxed">{product.shipping}</p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.1em] uppercase text-charcoal/70 mb-1">Returns</h4>
          <p className="text-sm text-warm-gray leading-relaxed">{product.returns}</p>
        </div>
      </div>
    ),
  };

  return (
    <div className="border-t border-border-light mt-10">
      {items.map((item) => (
        <div key={item.id} className="border-b border-border-light">
          <button
            onClick={() => toggle(item.id)}
            className="w-full flex items-center justify-between py-4 text-sm tracking-[0.1em] uppercase text-charcoal hover:text-gold transition-colors"
          >
            {item.label}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                open === item.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === item.id ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <div className="text-sm text-warm-gray leading-relaxed pr-4">
              {content[item.id]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}