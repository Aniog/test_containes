import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velvet-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[4/5] bg-velvet-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=85"
              alt="Artisan jewelry crafting"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-lg">
            <p className="text-[11px] uppercase tracking-[0.2em] text-velvet-500 mb-4 font-sans">
              About Velmora
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-ink leading-tight mb-6">
              Jewelry that tells
              <br />
              <span className="italic">your story</span>
            </h2>
            <div className="w-12 h-[1px] bg-velvet-300 mb-6" />
            <p className="text-ink/70 text-sm md:text-base leading-relaxed mb-6">
              At Velmora, we believe fine jewelry shouldn't be reserved for
              special occasions. Every piece in our collection is designed to
              be worn daily — to accompany you through life's quiet moments and
              grand celebrations alike.
            </p>
            <p className="text-ink/70 text-sm md:text-base leading-relaxed mb-8">
              Using ethically sourced materials and 18K gold plating, we craft
              pieces that are as responsible as they are beautiful. No
              compromise, no pretense — just enduring quality you can feel.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-ink border-b border-ink pb-0.5 hover:text-velvet-700 hover:border-velvet-700 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}