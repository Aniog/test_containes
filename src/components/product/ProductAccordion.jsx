import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';

const ProductAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="divide-y divide-linen border-t border-linen">
      {items.map((item, index) => (
        <div key={item.title}>
          <button
            onClick={() => toggleIndex(index)}
            className="w-full flex items-center justify-between py-5 text-left group"
          >
            <span className="font-sans text-sm font-medium text-espresso group-hover:text-gold transition-colors">
              {item.title}
            </span>
            <span className="text-taupe group-hover:text-gold transition-colors">
              {openIndex === index ? (
                <Minus className="w-4 h-4" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
            </span>
          </button>
          
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            )}
          >
            <p className="text-sm text-taupe leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductAccordion;
