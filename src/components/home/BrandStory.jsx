export default function BrandStory() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-gradient-to-br from-linen via-sand/50 to-gold/10 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-2 border-gold/20 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gold/10" />
              </div>
            </div>
            {/* Decorative corner accents */}
            <div className="absolute top-6 left-6 w-12 h-px bg-gold/30" />
            <div className="absolute top-6 left-6 w-px h-12 bg-gold/30" />
            <div className="absolute bottom-6 right-6 w-12 h-px bg-gold/30" />
            <div className="absolute bottom-6 right-6 w-px h-12 bg-gold/30" />
          </div>

          {/* Text */}
          <div className="md:pl-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-light mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
              Jewelry That Tells<br />Your Story
            </h2>
            <p className="text-charcoal/70 font-light leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is — without the luxury markup.
            </p>
            <p className="text-charcoal/70 font-light leading-relaxed mb-8">
              Each piece is thoughtfully designed in our London studio and crafted with 18K gold plating over hypoallergenic metals. We obsess over the details so you can wear your pieces every day, from morning coffee to evening out.
            </p>
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-charcoal font-sans border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors cursor-pointer">
              Read Our Full Story
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
