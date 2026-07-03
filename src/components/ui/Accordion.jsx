import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-cream">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left
                   hover:text-gold-500 transition-colors duration-300"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-sm tracking-wide uppercase text-charcoal">
          {title}
        </span>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <Minus className="w-4 h-4 text-gold-500" />
          ) : (
            <Plus className="w-4 h-4 text-charcoal" />
          )}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-smooth ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-warmGray font-sans leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="divide-y divide-cream">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
