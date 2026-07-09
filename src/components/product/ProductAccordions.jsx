import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const accordionItems = [
  {
    title: 'Description',
    key: 'description',
  },
  {
    title: 'Materials & Care',
    key: 'materials',
  },
  {
    title: 'Shipping & Returns',
    key: 'shipping',
  },
];

export default function ProductAccordions({ product }) {
  const [openIndex, setOpenIndex] = useState(0);

  const content = {
    description: product.longDescription,
    materials:
      'Crafted with 18K gold plating over a durable brass base. All pieces are hypoallergenic, nickel-free, and lead-free. To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently wipe with a soft cloth after each use.',
    shipping:
      'Free worldwide shipping on all orders. Standard delivery takes 5–10 business days. Express shipping (2–4 business days) is available at checkout. We offer a 30-day return policy — items must be unworn and in original packaging. Gift sets are final sale.',
  };

  return (
    <div className="border-t border-border">
      {accordionItems.map((item, i) => (
        <div key={item.key} className="border-b border-border">
          <button
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            className="w-full flex items-center justify-between py-5 text-left"
          >
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-text-primary">
              {item.title}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-text-secondary transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="pb-5">
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {content[item.key]}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
