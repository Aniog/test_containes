import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1600&h=800&fit=crop"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-velmora-cream px-4">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 text-velmora-cream/80">Est. 2024</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
            Our Story
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="prose prose-lg mx-auto">
          <p className="font-serif text-xl leading-relaxed text-velmora-charcoal/80 mb-8">
            Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. 
            We set out to create demi-fine pieces that feel as good as they look — lightweight, hypoallergenic, 
            and designed for real life.
          </p>

          <div className="w-12 h-px bg-velmora-gold/40 my-10" />

          <p className="text-velmora-gray leading-relaxed mb-6">
            Our founder, inspired by the quiet elegance of European jewelry houses, saw a gap in the market. 
            Women wanted pieces that could transition from boardroom to bar, from brunch to bedtime — without 
            the hefty price tag or the skin irritation that came with cheap alternatives.
          </p>

          <p className="text-velmora-gray leading-relaxed mb-6">
            Every Velmora piece starts as a hand-drawn sketch. We work with artisans who share our commitment 
            to quality, using 18K gold plating over recycled brass. The result is jewelry that looks and feels 
            luxurious, while remaining accessible and kind to the planet.
          </p>

          <p className="text-velmora-gray leading-relaxed mb-6">
            We believe in slow fashion. Our collections are intentionally small, each piece designed to be 
            worn and loved for years. We don't chase trends — we create timeless pieces that become part of 
            your personal story.
          </p>

          <div className="w-12 h-px bg-velmora-gold/40 my-10" />

          <h2 className="font-serif text-2xl font-light tracking-wide mb-4">Our Promise</h2>
          <ul className="space-y-3 text-velmora-gray">
            <li className="flex items-start gap-3">
              <span className="text-velmora-gold mt-1">◆</span>
              <span>18K gold plating over recycled brass — never base metals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-velmora-gold mt-1">◆</span>
              <span>Hypoallergenic and nickel-free — safe for sensitive skin</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-velmora-gold mt-1">◆</span>
              <span>Free worldwide shipping on every order</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-velmora-gold mt-1">◆</span>
              <span>30-day hassle-free returns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-velmora-gold mt-1">◆</span>
              <span>Beautiful gift packaging included</span>
            </li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="text-xs tracking-widest uppercase text-velmora-charcoal border-b border-velmora-charcoal/30 pb-0.5 hover:border-velmora-gold hover:text-velmora-gold transition-colors"
          >
            Explore the Collection
          </Link>
        </div>
      </section>
    </main>
  )
}
