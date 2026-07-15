import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProductAccordion({ product }) {
  const [openIndex, setOpenIndex] = useState(0);

  const sections = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-sans text-sm font-medium text-charcoal mb-2">Materials</h4>
            <p className="font-sans text-sm text-charcoal/70">{product.materials}</p>
          </div>
          <div>
            <h4 className="font-sans text-sm font-medium text-charcoal mb-2">Care Instructions</h4>
            <p className="font-sans text-sm text-charcoal/70">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4 font-sans text-sm text-charcoal/70">
          <p>
            <strong className="text-charcoal">Free Worldwide Shipping</strong> on all orders over $75. 
            Standard shipping (5-7 business days) is $8 for orders under $75.
          </p>
          <p>
            <strong className="text-charcoal">Express Shipping</strong> (2-3 business days) available for $15.
          </p>
          <p>
            <strong className="text-charcoal">30-Day Returns</strong> — We want you to love your jewelry. 
            If you're not completely satisfied, return unworn items within 30 days for a full refund.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="border-t border-sand">
      {sections.map((section, index) => (
        <div key={section.title} className="border-b border-sand">
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-serif text-lg text-charcoal">
              {section.title}
            </span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-charcoal/50 transition-transform duration-300',
                openIndex === index && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
            )}
          >
            <div className="font-sans text-sm text-charcoal/70 leading-relaxed">
              {section.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
