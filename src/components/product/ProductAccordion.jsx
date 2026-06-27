import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const accordionSections = [
  {
    id: 'description',
    title: 'Description',
    getContent: (product) => product.description
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    getContent: (product) => (
      <div className="space-y-3">
        <div>
          <p className="font-medium text-[var(--color-charcoal)] mb-1">Materials</p>
          <p className="text-[var(--color-warm-gray)]">{product.materials}</p>
        </div>
        <div>
          <p className="font-medium text-[var(--color-charcoal)] mb-1">Care Instructions</p>
          <p className="text-[var(--color-warm-gray)]">{product.care}</p>
        </div>
      </div>
    )
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    getContent: (product) => (
      <p className="text-[var(--color-warm-gray)]">{product.shipping}</p>
    )
  }
];

export default function ProductAccordion({ product }) {
  const [openSection, setOpenSection] = useState('description');
  
  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };
  
  return (
    <div className="border-t border-[var(--color-sand)]">
      {accordionSections.map((section) => (
        <div key={section.id} className="border-b border-[var(--color-sand)]">
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="text-sm font-medium text-[var(--color-charcoal)]">
              {section.title}
            </span>
            <ChevronDown 
              className={cn(
                'w-4 h-4 text-[var(--color-taupe)] transition-transform duration-200',
                openSection === section.id && 'rotate-180'
              )} 
            />
          </button>
          
          <div 
            className={cn(
              'overflow-hidden transition-all duration-300',
              openSection === section.id ? 'max-h-96 pb-4' : 'max-h-0'
            )}
          >
            <div className="text-sm text-[var(--color-warm-gray)] leading-relaxed">
              {typeof section.getContent(product) === 'string' 
                ? section.getContent(product)
                : section.getContent(product)
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
