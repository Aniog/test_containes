export default function About() {
  return (
    <main className="pt-28 md:pt-36 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-20">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-velmora-sand flex items-center px-8 md:px-16 py-16">
            <div className="max-w-md">
              <span className="font-sans text-xs tracking-wider uppercase text-velmora-muted">
                Our Story
              </span>
              <h1 className="font-serif text-3xl md:text-4xl text-velmora-deep tracking-widetitle font-semibold mt-4 leading-tight">
                Quiet Luxury,<br />Redefined
              </h1>
              <p className="font-sans text-sm text-velmora-muted mt-6 leading-relaxed">
                Velmora was founded on a singular vision: that fine jewelry should feel personal,
                effortless, and accessible. We believe luxury is not defined by a price tag — it is
                defined by intention, craftsmanship, and the stories pieces carry.
              </p>
              <p className="font-sans text-sm text-velmora-muted mt-4 leading-relaxed">
                Every Velmora piece is designed in-house and crafted from 18K gold-plated brass
                by skilled artisans. By working directly with workshops and owning our supply chain,
                we eliminate the traditional retail markup — delivering demi-fine quality at a
                price that feels good.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          {[
            {
              title: 'Crafted with Intention',
              desc: 'Every piece is designed to last — 18K gold plating over solid brass, hypoallergenic materials, and rigorous quality checks.',
            },
            {
              title: 'Fairly Priced',
              desc: 'We cut out the middleman. Our direct-to-consumer model means you get the same quality as traditional fine jewelry, at a fraction of the cost.',
            },
            {
              title: 'Made for Real Life',
              desc: 'Designed to transition seamlessly from morning coffee to evening celebrations. Water-resistant, tarnish-resistant, and built for everyday wear.',
            },
          ].map((v) => (
            <div key={v.title}>
              <h3 className="font-serif text-lg text-velmora-deep tracking-widetitle font-semibold">
                {v.title}
              </h3>
              <p className="font-sans text-sm text-velmora-muted mt-3 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a href="/shop" className="btn-outline">
            Explore the Collection
          </a>
        </div>
      </div>
    </main>
  );
}
