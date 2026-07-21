import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import useStockImages from '@/lib/useStockImages'
import StockImage from '@/components/ui/StockImage'

const VALUES = [
  {
    title: 'Made in small batches',
    body: 'Each Velmora piece is finished in runs of 50–200 at a time. We never overstock. When a piece sells out, we make more — but never at the cost of the people who make them.',
  },
  {
    title: 'Recycled before mined',
    body: 'Our brass is 100% recycled. Our packaging is FSC-certified, plastic-free, and printed with soy-based ink. The earth doesn\u2019t need more mined gold.',
  },
  {
    title: 'Paying forward',
    body: '2% of every order goes to women-led artisan cooperatives in Jaipur and Porto. Jewelry is an old craft — we want to keep the lineage alive.',
  },
]

export default function About() {
  const ref = useRef(null)
  useStockImages(ref, [])

  return (
    <article ref={ref}>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-cream-2 border-b border-line">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Our Story</p>
            <h1
              id="about-title"
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.05]"
              style={{ fontWeight: 400 }}
            >
              We started with a single <span className="italic">gold sheet</span> and a question.
            </h1>
            <p
              id="about-subtitle"
              className="mt-7 text-base md:text-lg text-ink/80 leading-relaxed font-light max-w-xl"
            >
              Why does everyday jewelry have to feel disposable? Velmora is our quiet
              answer: demi-fine gold, made by hand, designed to be lived in.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial image + text */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
              <div className="relative aspect-[4/5] overflow-hidden bg-espresso">
                <StockImage
                  imgId="about-editorial-1"
                  query="[about-title] [about-subtitle] woman putting on gold jewelry at warm vanity editorial"
                  ratio="4x5"
                  width={900}
                  alt="Founder at the atelier"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <p className="eyebrow mb-4">The atelier</p>
              <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-tight" style={{ fontWeight: 400 }}>
                A small studio <span className="italic">by the sea.</span>
              </h2>
              <p className="mt-5 text-ink/80 leading-relaxed font-light">
                Our atelier is in Alfama, the oldest quarter of Lisbon, two streets
                from the river. The light is the kind of light you'd want a piece
                of gold to be made in — warm, oblique, generous.
              </p>
              <p className="mt-4 text-ink/80 leading-relaxed font-light">
                We have five artisans, two polishing benches, and a stubborn
                commitment to doing things the slow way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-cream-2 border-y border-line">
        <div className="container-x">
          <div className="max-w-2xl mb-12 md:mb-16">
            <p className="eyebrow mb-3">What we believe</p>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-tight" style={{ fontWeight: 400 }}>
              Three <span className="italic">commitments.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
            {VALUES.map((v, i) => (
              <article key={v.title} className="bg-cream p-8 md:p-10">
                <span className="eyebrow text-gold mb-4 block">0{i + 1}</span>
                <h3 className="font-serif text-2xl text-espresso mb-3" style={{ fontWeight: 400 }}>
                  {v.title}
                </h3>
                <p className="text-sm text-ink/75 leading-relaxed font-light">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-28">
        <div className="container-x text-center">
          <p className="eyebrow mb-4">Begin your collection</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-tight max-w-2xl mx-auto" style={{ fontWeight: 400 }}>
            The pieces you'll reach for, <span className="italic">made to last.</span>
          </h2>
          <Link
            to="/shop"
            className="mt-9 inline-flex items-center gap-3 btn-primary group"
          >
            Shop the Collection
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </section>
    </article>
  )
}
