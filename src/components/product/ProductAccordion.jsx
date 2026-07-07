import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const items = ['Description', 'Materials & Care', 'Shipping & Returns'];

export default function ProductAccordion({ product }) {
  const [openIndex, setOpenIndex] = useState(0);

  const content = [
    product.description,
    <div key="materials" className="space-y-2">
      <p className="text-sm text-warm-gray"><strong className="text-warm-dark">Materials:</strong> {product.materials}</p>
      <p className="text-sm text-warm-gray"><strong className="text-warm-dark">Care:</strong> {product.care}</p>
    </div>,
    <div key="shipping" className="space-y-2">
      <p className="text-sm text-warm-gray">{product.shipping}</p>
      <p className="text-sm text-warm-gray mt-2">{product.returns}</p>
    </div>,
  ];

  return (
    <div className="border-t border-warm-border mt-8">
      {items.map((item, i) => (
        <div key={item} className="border-b border-warm-border">
          <button
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-sans text-xs uppercase tracking-[0.15em] text-warm-dark">
              {item}
            </span>
            <ChevronDown
              size={16}
              className={`text-warm-gray transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <div className="text-sm text-warm-gray leading-relaxed">{content[i]}</div>
          </div>
        </div>
      ))}
    </div>
  );
}