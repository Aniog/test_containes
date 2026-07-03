export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-text-dark font-light">
            Our Story
          </h1>
          <div className="w-12 h-px bg-brand-accent mx-auto mt-4" />
        </div>

        <div className="aspect-[16/9] overflow-hidden bg-brand-card mb-12">
          <img
            data-strk-img-id="about-hero-k3l4"
            data-strk-img="[about-subtitle] [about-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora workshop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 id="about-title" className="font-serif text-2xl md:text-3xl tracking-wide text-brand-text-dark font-light mb-6">
            Jewelry Made to Be Worn
          </h2>
          <p id="about-subtitle" className="text-sm md:text-base text-brand-muted font-light leading-relaxed mb-6">
            Velmora was founded on a simple premise: beautiful, well-crafted jewelry shouldn't come with a luxury markup. We design every piece in-house, work directly with artisan workshops, and sell exclusively online — cutting out the middlemen so we can offer demi-fine quality at accessible prices.
          </p>
          <p className="text-sm md:text-base text-brand-muted font-light leading-relaxed mb-6">
            Each piece is crafted with 18K gold plating over brass, using hypoallergenic materials that are gentle on sensitive skin. Our designs are inspired by the quiet luxury movement — understated elegance that speaks for itself.
          </p>
          <p className="text-sm md:text-base text-brand-muted font-light leading-relaxed mb-6">
            We believe jewelry should be lived in. Not saved for special occasions, but worn to the office, on coffee runs, and everywhere in between. That's why we design for durability and everyday comfort, without compromising on beauty.
          </p>

          <div className="border-t border-brand-border pt-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-serif text-3xl text-brand-accent mb-2">18K</h3>
                <p className="text-xs uppercase tracking-[0.1em] text-brand-muted font-light">Gold Plated</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-brand-accent mb-2">30</h3>
                <p className="text-xs uppercase tracking-[0.1em] text-brand-muted font-light">Day Returns</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-brand-accent mb-2">100%</h3>
                <p className="text-xs uppercase tracking-[0.1em] text-brand-muted font-light">Hypoallergenic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
