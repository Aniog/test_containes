import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const accordionData = [
  {
    id: 'description',
    title: 'Description',
    content: null, // Will be passed as children
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    content: `18K Gold Plated: Our gold plating is applied thick and rich for long-lasting color.
    
Materials: Sterling silver base with 18K gold plating. High-quality cubic zirconia stones.

Care Instructions:
• Remove before swimming, showering, or exercising
• Apply perfume and lotions before wearing
• Store in the provided jewelry pouch
• Clean gently with a soft polishing cloth`,
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    content: `Shipping:
• Free standard shipping on all orders
• Express shipping available at checkout
• International shipping available
• Orders ship within 1-2 business days

Returns:
• 30-day return window from delivery date
• Items must be unworn and in original packaging
• Free return shipping label included
• Refund processed within 5-7 business days`,
  },
];

const AccordionItem = ({ title, isOpen, onClick, children, content }) => {
  return (
    <div className="border-b border-charcoal-100">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-charcoal-900">{title}</span>
        <ChevronDown 
          className={cn(
            'w-5 h-5 text-charcoal-400 transition-transform duration-200',
            isOpen && 'rotate-180'
          )} 
        />
      </button>
      <div 
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        {children || (
          <p className="text-charcoal-600 font-sans text-sm leading-relaxed whitespace-pre-line">
            {content}
          </p>
        )}
      </div>
    </div>
  );
};

const ProductAccordions = ({ description }) => {
  const [openItem, setOpenItem] = useState('description');

  const handleToggle = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="mt-12">
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          isOpen={openItem === item.id}
          onClick={() => handleToggle(item.id)}
          content={item.id === 'description' ? description : item.content}
        />
      ))}
    </div>
  );
};

export default ProductAccordions;
