import { Link } from 'react-router-dom'
import { ArrowRight, Gem, Heart, Leaf } from 'lucide-react'
import { useStrkImages } from '@/lib/strk-images'

const VALUES = [
  { icon: Gem, title: 'Crafted by Hand', body: 'Every piece begins as a sketch and is finished by hand, with details you feel but rarely see.' },
  { icon: Heart, title: 'Made to be Worn', body: 'Demi-fine materials that stand up to everyday life — not just special occasions.' },
  { icon: Leaf, title: 'Responsibly Sourced', body: 'Recycled metals and conflict-free stones, because beauty shouldn’t cost the earth.' },
]

export default function About() {
  const ref = useStrkImages([])
  return (
    <div ref={ref} className="pt-24 md:pt-28">
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="about-hero-velmora-2b3c"
          data-strk-bg="[about-hero-title] [about-hero-sub]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 text-center px-5 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-cream/80 mb-5">Our Story</p>
          <h1 id="about-hero-title" className="font-serif text-cream text-5xl md:text-6xl font-light leading-tight">
            Quiet luxury, made to last
          </h1>
          <p id="about-hero-sub" className="mt-5 text-cream/85 leading-relaxed">
            Velmora was founded on a simple belief — that fine craftsmanship belongs in everyday life.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-4">Est. 2021</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-snug">
            We design demi-fine gold jewelry for the moments in between — the everyday heirlooms you
            never take off.
          </h2>
          <p className="mt-6 text-stone leading-relaxed">
            From a small studio, we obsess over the weight of a huggie, the catch of a clasp, the
            warmth of the gold. Each piece is drawn by hand, finished in 18K gold plating, and made
            to be worn — really worn — through the life you actually live.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-sand/60">
        <div className="max-w-8xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          {VALUES.map((v) => (
            <div key={v.title} className="text-center">
              <v.icon className="w-8 h-8 text-champagne mx-auto mb-5" strokeWidth={1.25} />
              <h3 className="font-serif text-2xl text-ink mb-3">{v.title}</h3>
              <p className="text-stone leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 text-center">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Find your everyday heirloom</h2>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 mt-8 bg-champagne text-ink text-[11px] uppercase tracking-[0.2em] font-semibold px-10 py-4 hover:bg-gold-deep transition-colors"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
