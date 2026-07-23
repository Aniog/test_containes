import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="border-t border-velmora-border">
      {items.map((item, index) => (
        <div key={index} className="border-b border-velmora-border">
          <button
            onClick={() => toggle(index)}
            className="w-full py-4 flex items-center justify-between text-left font-sans font-medium text-velmora-charcoal"
          >
            {item.title}
            <ChevronDown
              className={`w-5 h-5 text-velmora-muted transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <p className="text-velmora-muted font-sans text-sm leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;