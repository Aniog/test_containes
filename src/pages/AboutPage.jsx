export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-hairline/30">
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=900&q=80"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.25em] text-muted mb-3">About Velmora</p>
            <h1 className="text-3xl md:text-4xl text-charcoal font-semibold mb-6 leading-tight" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>
              The Art of
              <br />
              Everyday Luxury
            </h1>
            <div className="w-12 h-[1px] bg-gold mb-6" />
            <div className="space-y-4 text-taupe text-base leading-relaxed font-light">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should not be reserved for special occasions. We create pieces that elevate the everyday — thoughtfully designed, meticulously crafted, and consciously priced.
              </p>
              <p>
                Our name draws from "vel" (to wish) and "mora" (a pause) — a reminder to pause and appreciate the beauty in life's moments, big and small. Every Velmora piece is designed to be worn, loved, and passed down.
              </p>
              <p>
                We work directly with skilled artisans who share our commitment to quality and ethical production. By partnering with family-run workshops, we ensure fair wages, safe conditions, and exceptional craftsmanship — all while keeping our prices accessible.
              </p>
              <p>
                Each piece is plated in thick 18K gold, finished by hand, and rigorously tested. We stand behind everything we make with a one-year warranty and a 30-day happiness guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}