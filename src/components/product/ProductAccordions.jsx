import React, { useState } from 'react';

const ProductAccordions = ({ description, details, care, shipping }) => {
  const [open, setOpen] = useState('description');

  const items = [
    { id: 'description', label: 'Description', content: description },
    { id: 'materials', label: 'Materials & Care', content: `${details}\n\n${care}` },
    { id: 'shipping', label: 'Shipping & Returns', content: shipping },
  ];

  return (
    <div className="mt-10 divide-y divide-border border-t border-border">
      {items.map((item) => (
        <div key={item.id}>
          <button
            type="button"
            onClick={() => setOpen((prev) => (prev === item.id ? '' : item.id))}
            className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-ink"
            aria-expanded={open === item.id}
          >
            <span>{item.label}</span>
            <span className="text-ink-muted">{open === item.id ? '−' : '+'}</span>
          </button>
          {open === item.id && (
            <div className="pb-4 text-sm text-ink-secondary leading-relaxed whitespace-pre-line">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductAccordions;
