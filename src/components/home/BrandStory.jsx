import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-velmora-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="aspect-[4/5] md:aspect-auto bg-gradient-to-br from-velmora-muted via-velmora-accent-light/20 to-velmora-surface relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-velmora-accent/20 via-velmora-accent-light/40 to-transparent opacity-40" />
              <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-velmora-accent/5 blur-2xl" />
            </div>
            {/* Subtle frame */}
            <div className="absolute inset-8 md:inset-12 border border-velmora-border/30" />
          </div>

          {/* Text side */}
          <div className="flex items-center px-8 md:px-16 lg:px-20 py-16 md:py-24">
            <div className="max-w-md">
              <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-subtle mb-4">
                Our Philosophy
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-dark tracking-wide leading-tight mb-6">
                Gold That Tells<br />Your Story
              </h2>
              <div className="w-10 h-[1px] bg-velmora-accent mb-8" />
              <p className="font-sans text-sm text-velmora-body leading-relaxed mb-6">
                Velmora was born from the belief that luxury should feel personal, not performative. 
                Each piece is designed in our London atelier and crafted with 18K gold plating over 
                ethically sourced base metals — because beautiful jewelry shouldn't come at a hidden cost.
              </p>
              <p className="font-sans text-sm text-velmora-body leading-relaxed mb-8">
                Every curve, every clasp, every crystal is chosen with intention. This is jewelry that 
                becomes part of your rhythm — the piece you never take off, the one that gets passed down.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-accent hover:text-velmora-accent-deep transition-colors"
              >
                Our Story
                <span className="w-8 h-[1px] bg-velmora-accent/50" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
