import { Link } from 'react-router-dom'
import { useStrkImages, StrkImg } from '@/components/StrkImage'

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <StrkImg
          imgId="about-hero-velmora-2b7e91"
          query="[about-hero-sub] [about-hero-title] gold jewelry atelier craftsmanship"
          ratio="16x9"
          width={1600}
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-12">
          <p className="text-[11px] uppercase tracking-widest2 text-ivory/80 mb-3">Our Story</p>
          <h1
            id="about-hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl leading-tight"
          >
            Made to be <span className="italic text-gold-soft">Treasured</span>
          </h1>
          <p id="about-hero-sub" className="sr-only">
            Velmora fine jewelry atelier crafting demi-fine gold pieces.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">Est. with intention</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
            Fine craftsmanship, honestly priced.
          </h2>
          <div className="mt-6 space-y-5 text-base text-ink/80 leading-relaxed">
            <p>
              Velmora was founded on a simple belief: that fine craftsmanship should
              be within reach. We work directly with our ateliers, skipping the
              markups and middlemen that define traditional fine jewelry, so what
              reaches you is honest, warm, and made to last.
            </p>
            <p>
              Each piece is hand-finished in 18K gold over sterling silver —
              hypoallergenic, nickel-free, and designed for everyday wear rather
              than the back of a drawer. We believe jewelry should be lived in,
              not saved for someday.
            </p>
            <p>
              From the first sketch to the signature gift box, every detail is
              considered. This is quiet luxury: restrained, warm, and made to be
              treasured for years to come.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-hairline pt-10">
            {[
              { n: '18K', l: 'Gold Plated' },
              { n: '30', l: 'Day Returns' },
              { n: '100%', l: 'Hypoallergenic' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-gold">{s.n}</p>
                <p className="mt-2 text-[11px] uppercase tracking-widest2 text-sand">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="inline-block bg-gold text-ivory text-[11px] uppercase tracking-widest2 font-medium px-10 py-4 hover:bg-gold-soft transition-colors"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
