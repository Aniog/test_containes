import React from 'react';

export default function TrustBar() {
  const trustItems = [
    { icon: 'shipping', label: 'Free Worldwide Shipping' },
    { icon: 'returns', label: '30-Day Returns' },
    { icon: 'gold', label: '18K Gold Plated' },
    { icon: 'hypo', label: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-cream-dark border-y border-border">
      <div className="container-velmora py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center space-x-3 py-2">
              <div className="text-gold">
                {item.icon === 'shipping' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                )}
                {item.icon === 'returns' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )}
                {item.icon === 'gold' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                )}
                {item.icon === 'hypo' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              <span className="text-xs md:text-sm tracking-wide uppercase font-medium text-charcoal">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
