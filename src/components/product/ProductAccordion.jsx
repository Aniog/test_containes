import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const accordionData = [
  {
    id: 'description',
    title: 'Description',
    content: null, // Will be set dynamically
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    content: null, // Will be set dynamically
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    content: `We offer free worldwide shipping on all orders over $50. Orders under $50 have a flat $8 shipping fee.

Standard shipping (5-7 business days) is available for all domestic orders. Express shipping (2-3 business days) is available for an additional fee.

We want you to love your Velmora jewelry! If you're not completely satisfied, you can return unworn items within 30 days of delivery for a full refund. Items must be in original condition with all packaging included.

To initiate a return, please contact our customer service team at returns@velmora.com with your order number.`,
  },
];

export function ProductAccordion({ product }) {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `Materials: ${product.materials}

Care Instructions: ${product.care}`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: accordionData[2].content,
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-hairline border-t border-hairline">
      {items.map((item, index) => (
        <div key={item.id}>
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between py-5 text-left group"
          >
            <span className="font-medium text-sm uppercase tracking-wider">
              {item.title}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-stone transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="text-stone text-sm leading-relaxed whitespace-pre-line">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
