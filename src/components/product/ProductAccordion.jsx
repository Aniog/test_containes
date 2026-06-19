import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="border-b border-charcoal-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm tracking-wider uppercase text-charcoal-800">
          {title}
        </span>
        {isOpen ? (
          <Minus className="w-4 h-4 text-charcoal-500" />
        ) : (
          <Plus className="w-4 h-4 text-charcoal-500" />
        )}
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="pb-6 text-charcoal-600 leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
}

export default function ProductAccordion({ product }) {
  const [openIndex, setOpenIndex] = useState(0);

  const accordions = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-charcoal-800 mb-2">Materials</h4>
            <p>{product.materials}</p>
          </div>
          <div>
            <h4 className="font-medium text-charcoal-800 mb-2">Care Instructions</h4>
            <p>{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-charcoal-800 mb-2">Shipping</h4>
            <p>
              Free standard shipping on orders over $75. Express shipping available 
              at checkout. Orders typically ship within 1-2 business days.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-charcoal-800 mb-2">Returns</h4>
            <p>
              We want you to love your jewelry! If you're not completely satisfied, 
              return unworn items within 30 days for a full refund. Earrings are 
              final sale due to hygiene reasons.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-12">
      {accordions.map((accordion, index) => (
        <AccordionItem
          key={index}
          title={accordion.title}
          content={accordion.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
}