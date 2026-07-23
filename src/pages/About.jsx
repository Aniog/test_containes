import React from 'react';

export default function About() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-lg px-4">
        <h1 className="font-serif text-3xl md:text-4xl text-velmora-base mb-4">
          About Velmora
        </h1>
        <p className="text-velmora-muted leading-relaxed">
          We believe that beautiful jewelry should be accessible to everyone. Every piece is
          thoughtfully designed and crafted with 18K gold plating for a premium look and feel
          without the premium price tag.
        </p>
      </div>
    </div>
  );
}
