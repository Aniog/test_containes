export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1515562141589-67f0d93e2e4e?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <span className="text-xs tracking-widest uppercase text-brand-gold font-sans">Our Story</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-light text-brand-charcoal leading-snug">
              Where Timeless Design Meets Modern Craft
            </h2>
            <p className="mt-6 text-sm text-brand-muted leading-relaxed">
              Born from a love of understated elegance, Velmora creates jewelry that bridges the gap between fine and fashion. Each piece is thoughtfully designed in our London studio and crafted using 18K gold plating over hypoallergenic metals — delivering luxury you can wear every day without compromise.
            </p>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed">
              We believe jewelry should be personal, not precious. Something you reach for instinctively, that becomes part of your story.
            </p>
            <button className="mt-8 border border-brand-charcoal text-brand-charcoal px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-brand-charcoal hover:text-white transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
