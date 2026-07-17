import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const sections = [
  {
    title: 'Description',
    content: null, // passed via children or custom content
  },
  {
    title: 'Materials & Care',
    content: '18K gold-plated brass with an anti-tarnish coating. To preserve your piece, avoid contact with water, perfume, and lotions. Store in the provided Velmora pouch away from direct sunlight. Wipe gently with a soft cloth after each wear.',
  },
  {
    title: 'Shipping & Returns',
    content: 'Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days. We offer a 30-day return window for unworn items in original packaging. Refunds are processed within 10 business days of receiving the return.',
  },
];

export default function ProductAccordion({ description, materials }) {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    { title: 'Description', content: description },
    { title: 'Materials & Care', content: materials },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days. We offer a 30-day return window for unworn items in original packaging. Refunds are processed within 10 business days of receiving the return.',
    },
  ];

  return (
    <div className="border-t border-sand divide-y divide-sand">
      {items.map((item, i) => (
        <div key={item.title}>
          <button
            onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="text-[11px] tracking-widest uppercase font-medium text-charcoal">
              {item.title}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-warm-gray transition-transform duration-300 ${
                i === openIndex ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              i === openIndex ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-warm-gray leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
