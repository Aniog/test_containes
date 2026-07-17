import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'

const VALUES = [
  {
    title: 'Demi-fine, not disposable',
    body: 'We work in 18K gold plate over solid brass or sterling silver — substantial enough to wear every day, accessible enough to gift often.',
  },
  {
    title: 'Small batches, by hand',
    body: 'Each piece is cast in small runs and hand-finished in our atelier. If we can\'t make a piece in a way we\'re proud of, we don\'t make it.',
  },
  {
    title: 'Quietly designed',
    body: 'No logos. No loud stones. Just proportions, finish, and a sense of weight that makes the piece feel like it has always been yours.',
  },
]

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-20 text-center">
        <p className="eyebrow">Our Story</p>
        <h1 className="mt-5 font-serif text-4xl md:text-6xl text-espresso font-light tracking-tight leading-[1.05]">
          Jewelry that feels like a <em className="italic">keepsake</em>.
        </h1>
        <p className="mt-7 text-espresso/75 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Velmora started at a kitchen table in 2021, with a single ear cuff and
          a belief that demi-fine jewelry should feel as considered as fine —
          without the heirloom price tag.
        </p>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-beige">
              <img
                alt="A founder at the Velmora workbench, hands shaping gold jewelry"
                data-strk-img-id="about-img"
                data-strk-img="artisan hands shaping gold jewelry in warm atelier light"
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6">
            <h2 className="font-serif text-3xl md:text-4xl text-espresso font-light tracking-tight">
              How we <em className="italic">work</em>
            </h2>
            <p className="mt-6 text-espresso/80 font-light leading-relaxed text-[15px]">
              We design slowly. Every Velmora piece starts as a hand sketch, is
              prototyped in pewter, and refined until the weight, the drape, and
              the way it catches the light are exactly right. Then we cast in
              18K gold plate over solid brass or sterling silver, and hand-finish
              each piece before it ships.
            </p>
            <p className="mt-5 text-espresso/80 font-light leading-relaxed text-[15px]">
              We make in small batches, sell direct, and put the savings into
              the materials rather than the marketing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-beige/40 mt-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <p className="eyebrow text-center">What we believe</p>
          <h2 className="mt-4 text-center font-serif text-3xl md:text-4xl text-espresso font-light tracking-tight">
            Three things, <em className="italic">mostly</em>
          </h2>
          <ul className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {VALUES.map((v) => (
              <li key={v.title} className="border-l border-taupe pl-6">
                <h3 className="font-serif text-2xl text-espresso font-light">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm text-espresso/75 font-light leading-relaxed">
                  {v.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-24 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-espresso font-light tracking-tight">
          Find your <em className="italic">first piece</em>
        </h2>
        <Link to="/shop" className="mt-8 inline-flex items-center gap-2 btn-primary">
          Shop the Collection <ArrowRight size={14} strokeWidth={1.5} />
        </Link>
      </section>
    </div>
  )
}
