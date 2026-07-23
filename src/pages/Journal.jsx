import React from 'react';

export default function Journal() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-lg px-4">
        <h1 className="font-serif text-3xl md:text-4xl text-velmora-base mb-4">
          The Journal
        </h1>
        <p className="text-velmora-muted leading-relaxed">
          Stories, styling tips, and behind-the-scenes looks at how we create our collections.
          Coming soon.
        </p>
      </div>
    </div>
  );
}
