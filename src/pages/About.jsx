export default function About() {
  return (
    <div className="min-h-screen bg-cream-100 pt-24 pb-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Hero section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-gold-500 font-medium mb-4">About Velmora</p>
          <h1 className="heading-serif text-3xl md:text-5xl text-warm-900 mb-6">
            Jewelry for the Life You Live
          </h1>
          <p className="text-sm md:text-base text-warm-800/70 leading-relaxed">
            We believe that beautiful jewelry shouldn't cost a month's rent. Velmora creates demi-fine pieces in 18K gold that look luxurious, feel incredible, and fit into your real life — not just special occasions.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Crafted with Care',
              text: 'Every piece is designed in our studio and crafted using 18K gold plating over quality base metals. We obsess over the details so you don\'t have to.',
            },
            {
              title: 'Made to Last',
              text: 'Our jewelry is built for everyday wear. With proper care, your Velmora pieces will maintain their beauty for years, not weeks.',
            },
            {
              title: 'Accessible Luxury',
              text: 'Premium quality at honest prices. We cut out the middlemen and retail markups to bring you designer-level jewelry at a fraction of the cost.',
            },
          ].map((value, i) => (
            <div key={i} className="text-center px-4">
              <h3 className="heading-serif text-xl text-warm-900 mb-3">{value.title}</h3>
              <p className="text-sm text-warm-800/60 leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>

        {/* Commitment section */}
        <div className="bg-stone-950 text-cream-100 section-padding text-center">
          <h2 className="heading-serif text-2xl md:text-3xl mb-4">Our Commitment</h2>
          <p className="text-sm text-cream-400/60 leading-relaxed max-w-lg mx-auto mb-6">
            We are committed to ethical sourcing, sustainable packaging, and giving back. Every order ships in recyclable packaging, and 1% of revenue supports women's education initiatives worldwide.
          </p>
          <div className="flex items-center justify-center gap-8 mt-8">
            {['Cruelty-Free', 'Recyclable Packaging', '1% for Education'].map(label => (
              <span key={label} className="text-[10px] md:text-xs tracking-wider uppercase text-gold-400">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
