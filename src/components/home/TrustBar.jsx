import React from 'react';

export default function TrustBar() {
  const benefits = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-primary text-primary-foreground py-3 border-b border-primary/20">
      <div className="container mx-auto px-4 overflow-hidden">
        {/* Mobile: scrollable overflow or simple marquee, Desktop: evenly spaced */}
        <div className="flex justify-between items-center whitespace-nowrap overflow-x-auto pb-1 md:pb-0 hide-scrollbar gap-8 md:gap-0">
          {benefits.map((benefit, idx) => (
             <React.Fragment key={benefit}>
               <span className="text-xs md:text-sm tracking-widest uppercase inline-block whitespace-nowrap shrink-0">
                 {benefit}
               </span>
               {idx !== benefits.length - 1 && (
                 <span className="hidden md:inline-block opacity-50 shrink-0">·</span>
               )}
             </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}