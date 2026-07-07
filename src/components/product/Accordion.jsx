import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

function AccordionItem({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-gold/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-sans text-sm uppercase tracking-[0.1em] text-text-dark font-medium group-hover:text-brand-gold-dark transition-colors duration-300">
          {title}
        </span>
        <ChevronDown
          size={16}
          className={cn(
            'text-text-dark-secondary transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-400',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="pb-5 font-sans text-sm text-text-dark-secondary leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductAccordion({ product }) {
  return (
    <div className="mt-8">
      <AccordionItem title="Description" defaultOpen={true}>
        <p>{product.longDescription}</p>
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        <div className="space-y-3">
          <div>
            <p className="font-medium text-text-dark text-xs uppercase tracking-wider mb-1">Materials</p>
            <p>{product.materials}</p>
          </div>
          <div>
            <p className="font-medium text-text-dark text-xs uppercase tracking-wider mb-1">Care Instructions</p>
            <p>{product.care}</p>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        <div className="space-y-3">
          <p><strong className="text-text-dark">Free Shipping:</strong> All orders ship worldwide at no cost. Delivery takes 5–10 business days.</p>
          <p><strong className="text-text-dark">Express Shipping:</strong> Available for $12.99. Delivers in 2–4 business days.</p>
          <p><strong className="text-text-dark">Returns:</strong> Not in love? Return within 30 days for a full refund. Items must be unworn and in original packaging.</p>
        </div>
      </AccordionItem>
    </div>
  );
}
