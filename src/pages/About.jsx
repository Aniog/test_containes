import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <div className="pt-20">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-01"
          data-strk-bg="[about-hero-sub] [about-hero-title] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 text-[11px] uppercase tracking-ultra text-cream/80">
            Est. with intention
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-4xl text-cream md:text-6xl"
          >
            Our Story
          </h1>
          <p
            id="about-hero-sub"
            className="mt-4 max-w-md text-sm text-cream/70"
          >
            Quiet luxury, made to be lived in.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <p className="text-[11px] uppercase tracking-ultra text-gold mb-4 text-center">
          The Velmora Philosophy
        </p>
        <h2 className="font-serif text-3xl text-espresso md:text-4xl text-center">
          Fine craftsmanship, within reach
        </h2>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-espresso/70 md:text-base">
          <p>
            Velmora began with a simple belief: that fine craftsmanship should be
            within reach. Each piece is designed in our studio and finished in
            18K gold over sterling silver — hypoallergenic, durable, and made to
            be worn every day. We skip the markup, not the meaning.
          </p>
          <p>
            From the first sketch to the final polish, every detail is
            considered. We source our materials responsibly, finish each piece by
            hand, and package every order in our signature keepsake box. The
            result is jewelry that feels considered, personal, and quietly yours.
          </p>
          <p>
            Whether it's a gift for someone you love or a well-earned
            self-purchase, we believe the pieces you wear should feel like
            treasures — not transactions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { title: "18K Gold Plated", text: "Over sterling silver, for warmth that lasts." },
            { title: "Hypoallergenic", text: "Nickel-free and lead-free, safe for sensitive skin." },
            { title: "Made by Hand", text: "Each piece finished and inspected in studio." },
          ].map((item) => (
            <div key={item.title} className="border border-espresso/10 bg-cream p-6 text-center">
              <h3 className="font-serif text-lg uppercase tracking-widest text-espresso">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-espresso/60">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-gold px-10 py-4 text-[11px] uppercase tracking-widest text-cream transition-colors hover:bg-gold-dark"
          >
            Shop the Collection
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
