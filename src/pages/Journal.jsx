import React from 'react';

export default function Journal() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-serif mb-8 uppercase tracking-widest">Journal</h1>
      <p className="text-lg text-muted-foreground mb-12">Stories, styling tips, and editorial features.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="aspect-[4/3] bg-muted mb-4"></div>
        <div className="aspect-[4/3] bg-muted mb-4"></div>
        <div className="aspect-[4/3] bg-muted mb-4"></div>
      </div>
    </div>
  );
}