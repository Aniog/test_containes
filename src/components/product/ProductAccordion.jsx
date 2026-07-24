import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function AccordionItem({ title, content, isOpen, onToggle }) {
  return (
    <div className="border-b border-charcoal-100/50">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-caption uppercase tracking-[0.15em] text-charcoal-600 group-hover:text-charcoal-800 transition-colors">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-charcoal-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="text-body text-charcoal-500 pb-5 leading-relaxed">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductAccordion({ product }) {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    { title: 'Description', content: product.details },
    { title: 'Materials & Care', content: `Materials: ${product.materials}. ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="mt-12 lg:mt-16 border-t border-charcoal-100/50">
      {items.map((item, i) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
