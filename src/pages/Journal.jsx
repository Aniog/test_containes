import { useEffect } from 'react';

export default function Journal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20 md:py-32">
          <span className="font-sans text-[11px] tracking-widest uppercase text-gold mb-4 block">
            Coming Soon
          </span>
          <h1 className="section-title mb-4">The Velmora Journal</h1>
          <p className="section-subtitle max-w-md mx-auto">
            Styling guides, behind-the-scenes, and the stories behind our collections.
          </p>
        </div>
      </div>
    </main>
  );
}
