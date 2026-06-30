import { Link } from "react-router-dom"
import ImageLoader, { PLACEHOLDER } from "@/components/ImageLoader"
import Newsletter from "@/components/home/Newsletter"

export default function About() {
  return (
    <ImageLoader className="pt-16 md:pt-20" deps={[]}>
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-velmora-2b"
          data-strk-bg="[about-hero-title] [about-hero-sub] gold jewelry atelier craftsmanship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto w-full max-w-editorial px-6 md:px-10 text-center text-cream">
          <p className="eyebrow text-cream/80">Our Story</p>
          <h1 id="about-hero-title" className="mt-3 font-serif text-5xl md:text-6xl">
            Crafted to be Treasured
          </h1>
          <p id="about-hero-sub" className="mx-auto mt-4 max-w-md text-cream/85">
            A studio devoted to quiet, everyday luxury.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <p className="font-serif text-2xl italic leading-relaxed text-ink md:text-3xl">
          “We believe fine jewelry shouldn't wait for special occasions. It
          should be lived in, layered, and loved — every single day.”
        </p>
        <p className="mt-6 text-xs uppercase tracking-widest2 text-stone">— The Velmora Studio</p>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto grid max-w-editorial grid-cols-1 gap-12 px-6 md:grid-cols-3 md:px-10">
          {[
            { t: "Considered Design", d: "Each piece begins as a sketch in our studio, refined until every line feels inevitable." },
            { t: "Honest Materials", d: "18K gold plating over a hypoallergenic base — beautiful to wear, gentle on skin." },
            { t: "Made by Hand", d: "Finished and polished by hand, so every piece carries the mark of its maker." },
          ].map((b) => (
            <div key={b.t} className="text-center">
              <h3 className="font-serif text-2xl text-ink">{b.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-editorial px-6 py-20 text-center md:px-10 md:py-28">
        <h2 className="font-serif text-4xl text-ink md:text-5xl">Explore the Collection</h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-stone">
          Discover pieces designed to be worn and treasured.
        </p>
        <div className="mt-8">
          <Link to="/shop" className="btn-primary">Shop Now</Link>
        </div>
      </section>

      <Newsletter />
    </ImageLoader>
  )
}
