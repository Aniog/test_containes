import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const SECTIONS = [
  {
    id: 'description',
    title: 'Description',
    field: 'description',
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    field: 'materials',
    extra: 'care',
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    field: 'shipping',
  },
];

export default function ProductAccordions({ product }) {
  const [open, setOpen] = useState('description');

  return (
    <div className="border-t border-hairline">
      {SECTIONS.map((section) => {
        const isOpen = open === section.id;
        return (
          <div key={section.id} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : section.id)}
              className="w-full flex items-center justify-between py-5 md:py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-xl md:text-2xl text-ink-soft">
                {section.title}
              </span>
              {isOpen ? (
                <Minus className="w-4 h-4 text-ink-soft" strokeWidth={1.4} />
              ) : (
                <Plus className="w-4 h-4 text-ink-soft" strokeWidth={1.4} />
              )}
            </button>
            <div
              className={cn(
                'grid transition-all duration-500 ease-editorial',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-6 md:pb-8 pr-8 max-w-prose">
                  <p className="text-base text-ink/80 leading-relaxed">
                    {product[section.field]}
                  </p>
                  {section.extra && (
                    <p className="mt-4 text-base text-ink/80 leading-relaxed">
                      {product[section.extra]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
