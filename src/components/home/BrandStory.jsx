import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="page-container">
      <div className="grid md:grid-cols-2">
        {/* Image panel */}
        <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-amber-900/60 to-stone-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,188,140,0.1),transparent_60%)]" />
        </div>

        {/* Text panel */}
        <div className="flex items-center px-8 py-16 md:px-16 lg:px-24 bg-velmora-ivory">
          <div className="max-w-md">
            <p className="text-xs tracking-[0.2em] uppercase text-velmora-text-muted mb-5">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-text mb-6 leading-[1.2]">
              Jewelry that becomes
              <br />
              part of your story
            </h2>
            <p className="text-velmora-text-secondary text-sm leading-relaxed mb-8">
              Velmora was born from the belief that fine jewelry should feel
              personal — not precious. Each piece is designed in our London
              atelier using 18K gold plating on brass, crafted to outlast
              trends and become a quiet signature of your style.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-velmora-accent hover:text-velmora-accent/80 transition-colors font-medium"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}