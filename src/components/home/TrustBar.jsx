import React from 'react';
import { trustBarItems } from '@/data/products';

export default function TrustBar() {
  return (
    <div className="bg-deep-900 border-t border-deep-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4">
          {trustBarItems.map((item, i) => (
            <React.Fragment key={item}>
              {i > 0 && (
                <span className="hidden sm:block text-deep-600 text-xs">·</span>
              )}
              <span className="text-xs tracking-wider uppercase text-deep-400 font-light">
                {item}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
