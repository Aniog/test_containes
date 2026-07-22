import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 bg-cream">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="eyebrow text-gold">Our Story</p>
          <h1 className="mt-4 font-serif text-ink text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]">
            Jewelry, <span className="italic font-normal">quietly</span> made.
          </h1>
          <p className="mt-6 text-muted text-[17px] leading-relaxed max-w-xl mx-auto">
            Velmora was started at a single studio table, with a sketch and a question: why do the pieces we wear most have to wait for the most special days?
          </p>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/5] bg-ink relative overflow-hidden">
              <img
                alt="Studio atelier"
                data-strk-img-id="about-1"
                data-strk-img="[about-headline] female jeweler working at studio bench editorial"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover img-placeholder"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div>
              <p className="eyebrow text-gold">The Beginning</p>
              <h2
                id="about-headline"
                className="mt-4 font-serif text-ink text-[clamp(1.75rem,3.8vw,2.75rem)] leading-[1.05]"
              >
                Designed for the everyday,<br />
                <span className="italic font-normal">finished by hand.</span>
              </h2>
              <p className="mt-6 text-muted text-[16px] leading-relaxed">
                Every Velmora piece is hand-finished in 18K gold plating by a small team of artisans, designed in-house, and made to be lived in. We don't chase trends. We chase the feeling of slipping on a piece you forgot you were wearing — and never wanting to take it off.
              </p>
              <p className="mt-4 text-muted text-[16px] leading-relaxed">
                The name <em>Velmora</em> comes from a quiet wish: that every woman finds the pieces that become part of her.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ink text-cream">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="eyebrow text-gold-soft">Our Promise</p>
          <h2 className="mt-4 font-serif text-cream text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            <span className="italic font-normal">Hypoallergenic.</span> Always.
          </h2>
          <p className="mt-5 text-cream/70 text-[16px] max-w-md mx-auto leading-relaxed">
            Free from nickel, lead, and cadmium. Safe for sensitive ears, designed to be worn every day.
          </p>
          <Link
            to="/shop"
            className="btn btn-outline-light mt-9 group"
          >
            Shop the Collection
            <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  )
}
