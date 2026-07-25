import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const VALUES = [
  {
    title: 'Demi-Fine, Honestly Priced',
    copy: 'Thick 18K gold over recycled brass, priced between $30 and $120. No middlemen, no mystery markups — the quality of fine jewelry at a price that invites everyday wear.',
  },
  {
    title: 'Small-Batch Craft',
    copy: 'Every piece is finished by hand in limited runs. We would rather sell out than overproduce, keeping each design feeling considered and rare.',
  },
  {
    title: 'Made to Be Kept',
    copy: 'Nickel-free, hypoallergenic, and e-coated against tarnish. Our pieces are designed for real life — showers, workouts, and the years in between.',
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 sm:pt-20">
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-ink">
        <img
          data-strk-img-id="about-hero-img"
          data-strk-img="elegant gold jewelry arranged on dark textured stone with soft warm light, moody luxury editorial banner"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Velmora gold jewelry in warm light"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/30" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-luxe text-gold">
            Our Story
          </p>
          <h1 className="font-serif text-4xl font-medium leading-tight text-cream sm:text-6xl">
            Quiet luxury,
            <br />
            <em className="italic text-gold">honestly made</em>
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-luxe text-gold-deep">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Founded 2021 · Lisbon
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl">
              A workbench, a sketchbook, and a stubborn idea
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-mocha sm:text-base">
              <p>
                Velmora was founded by two jewelers who kept hearing the same
                story from friends: pieces they loved cost too much, and pieces
                they could afford faded within months.
              </p>
              <p>
                We spent a year testing platings, alloys, and closures before
                releasing our first five pieces. Today we still design every
                collection at the same small atelier table, and every order
                still ships in packaging we would be proud to hand over in
                person.
              </p>
              <p>
                Our promise is simple: jewelry that looks and feels like it
                belongs in a velvet-lined inheritance box, priced so you can
                actually wear it on a Tuesday.
              </p>
            </div>
            <Link to="/shop" className="mt-8 inline-block">
              <Button variant="primary" size="lg">Shop the Pieces</Button>
            </Link>
          </div>
          <div className="overflow-hidden bg-sand">
            <div className="aspect-[4/5]">
              <img
                data-strk-img-id="about-portrait-img"
                data-strk-img="portrait of two women jewelers in a bright atelier examining a gold necklace, warm natural light, editorial photography"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora founders in their atelier"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-sand py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-luxe text-gold-deep">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl">
              Three Quiet Promises
            </h2>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {VALUES.map((value, i) => (
              <article key={value.title} className="border border-line bg-cream p-8">
                <p className="font-serif text-4xl font-medium text-gold" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-5 font-serif text-xl font-medium text-ink">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mocha">{value.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
