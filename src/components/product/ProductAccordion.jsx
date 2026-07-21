import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const defaultSections = [
  {
    id: 'description',
    title: 'Description',
    content: null, // Will be passed as prop
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    content: `Crafted with 18K gold plating over a hypoallergenic sterling silver base. 
    <br/><br/>
    <strong>Care Instructions:</strong><br/>
    • Store in the provided pouch or a soft-lined jewelry box<br/>
    • Avoid contact with water, perfumes, and harsh chemicals<br/>
    • Clean gently with a soft, dry cloth<br/>
    • Apply perfume before putting on jewelry`,
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    content: `<strong>Shipping:</strong><br/>
    • Free standard shipping on all orders (5-7 business days)<br/>
    • Express shipping available at checkout (2-3 business days)<br/>
    • International shipping to 50+ countries<br/>
    <br/>
    <strong>Returns:</strong><br/>
    • 30-day hassle-free returns<br/>
    • Items must be unworn and in original packaging<br/>
    • Free return shipping on all domestic orders<br/>
    • Contact our team for exchange options`,
  },
];

export default function ProductAccordion({ description }) {
  const [openSection, setOpenSection] = useState('description');
  
  const sections = [
    { ...defaultSections[0], content: description },
    ...defaultSections.slice(1),
  ];
  
  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };
  
  return (
    <div className="border-t border-charcoal-200">
      {sections.map((section) => (
        <div key={section.id} className="border-b border-charcoal-200">
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full flex items-center justify-between py-4 text-left"
            aria-expanded={openSection === section.id}
          >
            <span className="text-sm font-medium tracking-ultra-wide uppercase text-charcoal-800">
              {section.title}
            </span>
            <ChevronDown
              className={cn(
                'w-4 h-4 text-charcoal-500 transition-transform duration-300',
                openSection === section.id ? 'rotate-180' : ''
              )}
            />
          </button>
          
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openSection === section.id ? 'max-h-96 pb-4' : 'max-h-0'
            )}
          >
            <div
              className="text-sm text-charcoal-600 leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
