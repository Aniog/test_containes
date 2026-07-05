import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ProductAccordions = () => {
  const [openAccordion, setOpenAccordion] = useState('description');

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: (
        <div className="space-y-4 text-[var(--color-warm-gray)] leading-relaxed">
          <p>
            Each Velmora piece is designed with meticulous attention to detail, combining timeless elegance with modern sensibility. Our demi-fine jewelry is crafted to be worn daily, offering luxury that doesn't compromise on comfort or durability.
          </p>
          <p>
            This piece features a refined silhouette that transitions effortlessly from day to night, making it a versatile addition to any jewelry collection.
          </p>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-4 text-[var(--color-warm-gray)] leading-relaxed">
          <p>
            <strong className="text-[var(--color-charcoal)]">Materials:</strong> 18K gold plated over sterling silver base. Hypoallergenic and nickel-free.
          </p>
          <p>
            <strong className="text-[var(--color-charcoal)]">Care Instructions:</strong> Store in the provided pouch when not wearing. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.
          </p>
          <p>
            <strong className="text-[var(--color-charcoal)]">Longevity:</strong> With proper care, your Velmora piece will maintain its beauty for years. Re-plating service available after 2+ years of regular wear.
          </p>
        </div>
      )
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4 text-[var(--color-warm-gray)] leading-relaxed">
          <p>
            <strong className="text-[var(--color-charcoal)]">Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout.
          </p>
          <p>
            <strong className="text-[var(--color-charcoal)]">Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging. Return shipping is free for US orders.
          </p>
          <p>
            <strong className="text-[var(--color-charcoal)]">Gift Wrapping:</strong> Complimentary gift wrapping available. Select at checkout.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="mt-12 border-t border-[var(--color-border)]">
      {accordions.map((accordion) => (
        <div key={accordion.id} className="border-b border-[var(--color-border)]">
          <button
            onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
            className="w-full flex items-center justify-between py-5 text-left"
          >
            <span className="text-sm tracking-wider uppercase">{accordion.title}</span>
            {openAccordion === accordion.id ? (
              <ChevronUp className="w-5 h-5 text-[var(--color-gold)]" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {openAccordion === accordion.id && (
            <div className="pb-6">
              {accordion.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductAccordions;
