import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const sections = [
  {
    id: 'description',
    title: 'Description',
    content: null, // Will be passed as prop
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    content: (
      <div className="space-y-4 text-charcoal-light">
        <div>
          <h4 className="font-medium text-charcoal mb-2">Materials</h4>
          <ul className="list-disc list-inside space-y-1 text-body-sm">
            <li>18K gold plating over sterling silver</li>
            <li>High-quality crystals and cubic zirconia</li>
            <li>Hypoallergenic and nickel-free</li>
            <li>Tarnish-resistant finish</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-charcoal mb-2">Care Instructions</h4>
          <ul className="list-disc list-inside space-y-1 text-body-sm">
            <li>Remove before swimming, showering, or exercising</li>
            <li>Apply perfume and lotions before wearing</li>
            <li>Store in the provided jewelry pouch when not in use</li>
            <li>Clean gently with a soft, dry cloth</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    content: (
      <div className="space-y-4 text-charcoal-light">
        <div>
          <h4 className="font-medium text-charcoal mb-2">Shipping</h4>
          <ul className="list-disc list-inside space-y-1 text-body-sm">
            <li>Free worldwide shipping on orders over $75</li>
            <li>Standard shipping: 5-7 business days</li>
            <li>Express shipping: 2-3 business days</li>
            <li>Tracking provided on all orders</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-charcoal mb-2">Returns</h4>
          <ul className="list-disc list-inside space-y-1 text-body-sm">
            <li>30-day return window from delivery date</li>
            <li>Items must be unworn and in original packaging</li>
            <li>Free return shipping label provided</li>
            <li>Refund processed within 5-7 business days</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function ProductAccordion({ description }) {
  const [openSection, setOpenSection] = useState('description');

  const getContent = (section) => {
    if (section.id === 'description') {
      return <p className="text-charcoal-light leading-relaxed">{description}</p>;
    }
    return section.content;
  };

  return (
    <div className="border-t border-sand">
      {sections.map((section) => (
        <div key={section.id} className="border-b border-sand">
          <button
            onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
            className="w-full flex items-center justify-between py-5 text-left"
          >
            <span className="font-serif text-lg text-charcoal">
              {section.title}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-charcoal-light transition-transform duration-200 ${
                openSection === section.id ? 'rotate-180' : ''
              }`}
              strokeWidth={1.5}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openSection === section.id ? 'max-h-[500px] pb-6' : 'max-h-0'
            }`}
          >
            {getContent(section)}
          </div>
        </div>
      ))}
    </div>
  );
}
