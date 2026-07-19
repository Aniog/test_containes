import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const sections = [
  {
    title: 'Description',
    content: 'Each Velmora piece is crafted with care from 18K gold-plated metals, designed to maintain its warm glow through daily wear. Our demi-fine approach balances heirloom-quality craftsmanship with accessible luxury.',
  },
  {
    title: 'Materials & Care',
    content: '18K gold plated over brass. Hypoallergenic, nickel-free, and lead-free. To preserve your jewelry\'s luster, avoid contact with water, perfume, and lotions. Store in a cool, dry place. Gently polish with a soft cloth.',
  },
  {
    title: 'Shipping & Returns',
    content: 'Free worldwide shipping on all orders. Orders are processed within 1-2 business days. 30-day return window for unworn items in original packaging. Full refund to original payment method.',
  },
];

export default function ProductAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="border-t border-brand-taupe divide-y divide-brand-taupe">
      {sections.map((section, index) => (
        <div key={section.title}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="text-sm uppercase tracking-[0.1em] text-brand-charcoal font-medium">
              {section.title}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-brand-warm-gray transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-40 pb-4' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-brand-warm-gray leading-relaxed font-light">
              {section.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}