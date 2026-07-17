export default function AboutPage() {
  return (
    <main className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1589674781759-c21c583561c3?w=1600&q=85"
          alt="Velmora craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-light">
              Our Story
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-ink-600 leading-relaxed">
            <p className="text-lg font-serif text-ink-900 leading-relaxed">
              Velmora was founded in 2020 with a simple belief: jewelry should be both beautiful and accessible. Not everything precious needs to come with a five-figure price tag.
            </p>
            <p>
              We set out to create demi-fine pieces that bridge the gap between costume jewelry and fine heirlooms. Using 18K gold plating, ethically sourced crystals, and hypoallergenic materials, each piece is designed in our New York atelier and finished by hand.
            </p>
            <p>
              Our collections are thoughtfully edited — not hundreds of forgettable styles, but a tight curation of pieces that earn their place in your jewelry box. We believe in buying less and choosing well.
            </p>
            <p>
              Every order arrives in packaging designed to be kept — because the experience of receiving jewelry should feel as special as wearing it.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 py-12 border-t border-ink-100">
            {[
              { number: '18K', label: 'Gold Plating' },
              { number: '100%', label: 'Hypoallergenic' },
              { number: '30', label: 'Day Returns' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-serif text-ink-900">{stat.number}</p>
                <p className="text-xs uppercase tracking-widest text-ink-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}