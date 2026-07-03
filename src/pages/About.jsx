import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductImage from '@/components/shared/ProductImage'

const VALUES = [
  {
    title: 'Made by hand',
    body:
      'Every piece is cast, polished and plated by a workshop of seven in Porto. We visit them twice a year. We know their dogs by name.',
  },
  {
    title: 'Honest materials',
    body:
      '18K gold-plated brass and recycled sterling silver. Hypoallergenic, nickel-free, and tested against the same standards as fine jewelry.',
  },
  {
    title: 'Priced to gift',
    body:
      'We cut the middlemen, the wholesale markups and the celebrity campaigns, so the price you see is the price of the piece — and a fair wage.',
  },
]

export default function About() {
  return (
    <>
      <section className="pt-28 lg:pt-40 pb-16 lg:pb-24 bg-ivory-50">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">Our story</span>
              <h1 className="mt-4 font-serif text-ink-900 text-[44px] sm:text-[64px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] text-balance">
                Heirlooms, <em className="italic font-light text-gold-600">without the wait.</em>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[16px] lg:text-[18px] leading-[1.7] text-ink-600 max-w-[480px]">
                Velmora started in 2019 in a one-bedroom apartment in Lisbon, with
                a small tumbler, a pile of brass findings, and a stubborn belief
                that good jewelry should not cost a month of rent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-ivory-50">
        <div className="container-x">
          <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-ink-900 max-w-[1240px] mx-auto">
            <ProductImage art="brandStory" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" />
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 lg:py-28 bg-ivory-100">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {VALUES.map((v, i) => (
              <article key={v.title} className="bg-ivory-50 p-8 lg:p-10">
                <span className="font-serif text-gold-600 text-[44px] leading-none">
                  0{i + 1}
                </span>
                <h2 className="mt-4 font-serif text-[24px] text-ink-900">{v.title}</h2>
                <p className="mt-3 text-[14px] leading-[1.75] text-ink-600">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ivory-50">
        <div className="container-x text-center max-w-[760px]">
          <span className="eyebrow">Our promise</span>
          <p className="mt-5 font-serif text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.25] text-ink-900 text-balance">
            &ldquo;If a piece fades, chips, or breaks from normal wear, we will
            replate or replace it — for life. No questions, no receipts, no
            awkward emails.&rdquo;
          </p>
          <p className="mt-6 text-[12px] uppercase tracking-[0.22em] text-ink-500">
            — Marta, founder
          </p>
          <Link to="/shop" className="btn-primary mt-10">
            Explore the collection
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </>
  )
}
