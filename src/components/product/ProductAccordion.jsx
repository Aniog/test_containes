import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const defaultContent = {
  description: `Each piece from Velmora is crafted with attention to detail and designed to be worn every day. Our demi-fine jewelry combines premium materials with thoughtful design, creating pieces that are both elegant and durable.

Our 18K gold plated jewelry features a thick layer of gold over hypoallergenic stainless steel, ensuring a beautiful shine that lasts.`,
  materials: `Materials: 18K Gold Plated, Hypoallergenic Stainless Steel

Care Instructions:
- Store in a cool, dry place
- Clean gently with a soft cloth
- Avoid contact with water, perfumes, and lotions
- Put on after applying beauty products

All our pieces are nickel-free and suitable for sensitive skin.`,
  shipping: `Shipping:
- Free worldwide shipping on all orders
- Standard delivery: 5-10 business days
- Express delivery: 2-5 business days

Returns:
- 30-day return policy
- Items must be unworn and in original packaging
- Free return shipping on all orders
- Refunds processed within 5-7 business days`
};

export default function ProductAccordion({ product }) {
  const [openIndex, setOpenIndex] = useState(0);

  const sections = [
    { title: 'Description', content: defaultContent.description },
    { title: 'Materials & Care', content: defaultContent.materials },
    { title: 'Shipping & Returns', content: defaultContent.shipping }
  ];

  return (
    <div className="divide-y divide-[var(--color-border)]">
      {sections.map((section, index) => (
        <div key={section.title}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-5 flex items-center justify-between text-left hover:text-[var(--color-gold)] transition-colors"
          >
            <span className="text-sm uppercase tracking-wider">{section.title}</span>
            {openIndex === index ? (
              <Minus className="w-4 h-4" />
            ) : (
              <Plus className="w-4 h-4" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
