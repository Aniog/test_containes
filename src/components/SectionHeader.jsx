import React from 'react';
import { cn } from '@/lib/utils';

const SectionHeader = ({ title, subtitle, className }) => {
  return (
    <div className={cn("mb-12 md:mb-16 text-center px-4", className)}>
      {subtitle && (
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 text-neutral-400 font-semibold">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A]">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
