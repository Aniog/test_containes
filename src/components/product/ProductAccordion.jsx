import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ProductAccordion({ product }) {
  const [openSection, setOpenSection] = useState('description');

  const sections = [
    {
      id: 'description',
      title: 'Description',
      content: product.details.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <>
          <p className="mb-2"><strong>Materials:</strong> {product.details.materials}</p>
          <p><strong>Care:</strong> {product.details.care}</p>
        </>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <>
          <p className="mb-2"><strong>Shipping:</strong> Free worldwide shipping on orders over $75. Standard shipping takes 5-7 business days.</p>
          <p><strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
        </>
      ),
    },
  ];

  return (
    <div className="border-t border-[#E8E2DA]">
      {sections.map((section, index) => (
        <div key={section.id} className="border-b border-[#E8E2DA]">
          <button
            onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="text-sm uppercase tracking-wider">{section.title}</span>
            {openSection === section.id ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {openSection === section.id && (
            <div className="pb-4 text-sm text-[#6B6560] leading-relaxed">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
