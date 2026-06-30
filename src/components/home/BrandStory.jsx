const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <span className="font-sans text-xs uppercase tracking-widest text-gold">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso mt-4 leading-snug">
              Where Timeless Design Meets Accessible Luxury
            </h2>
            <p className="mt-6 text-warm-gray font-sans text-sm leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that feels special without the luxury price tag. Our pieces are crafted with 18K gold plating over premium metals, designed in small batches, and made to last.
            </p>
            <p className="mt-4 text-warm-gray font-sans text-sm leading-relaxed">
              Each design is inspired by the quiet confidence of the women who wear them — pieces that whisper rather than shout, that complement rather than compete.
            </p>
            <a
              href="#"
              className="inline-block mt-8 font-sans text-sm text-gold border-b border-gold pb-0.5 hover:text-gold-light hover:border-gold-light transition-colors"
            >
              Read Our Full Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
