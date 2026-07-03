import React from 'react';

const Journal = () => {
  return (
    <main>
      <section className="section-container py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-ultra text-accent">Journal</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ink">Stories & guides</h1>
        <p className="mt-4 max-w-2xl text-sm md:text-base text-ink-secondary">
          Discover styling tips, gift guides, and behind-the-scenes stories from the Velmora atelier.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <article key={item} className="rounded-2xl border border-border bg-white p-5 transition-shadow hover:shadow-soft">
              <div className="aspect-[16/9] overflow-hidden rounded-xl bg-background">
                <img
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
                  alt="Journal"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-ultra text-accent">Guide</p>
              <h3 className="mt-2 font-serif text-xl text-ink">How to layer gold jewelry</h3>
              <p className="mt-2 text-sm text-ink-secondary">A simple framework for mixing earrings, necklaces, and huggies.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Journal;
