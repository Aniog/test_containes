import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-gray-100 last:border-none">
    <button 
      onClick={onClick}
      className="flex justify-between items-center w-full py-6 text-left group"
    >
      <span className="uppercase tracking-widest font-bold text-[10px] group-hover:text-accent transition-colors">{title}</span>
      <ChevronDown 
        size={14} 
        className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "")} 
      />
    </button>
    <div className={cn(
      "overflow-hidden transition-all duration-300 ease-in-out",
      isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
    )}>
      <div className="text-gray-500 text-sm font-light leading-relaxed whitespace-pre-line">
        {children}
      </div>
    </div>
  </div>
);

const Accordions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const sections = [
    {
      title: "Description",
      content: "A masterclass in understated elegance. This piece features refined curves and a high-polish finish that captures the light from every angle. Designed for comfort and effortless transition from dawn to dusk."
    },
    {
      title: "Materials & Care",
      content: "• 18K Gold Plated or Sterling Silver Rhodium finish.\n• Hypoallergenic and nickel-free.\n• Avoid contact with cosmetics, perfumes, and water to maintain luster.\n• Store in provided Velmora dust bag when not in use."
    },
    {
      title: "Shipping & Returns",
      content: "• Free worldwide express shipping on orders over $100.\n• Delivery within 3-5 business days.\n• 30-day hassle-free returns for all unused items.\n• Secure eco-friendly packaging included."
    }
  ];

  return (
    <div className="mt-12 md:mt-24 border-t border-gray-100">
      {sections.map((sec, i) => (
        <AccordionItem
          key={i}
          title={sec.title}
          isOpen={openIndex === i}
          onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
        >
          {sec.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordions;
