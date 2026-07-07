import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { StrkImage } from '@/components/product/StrkImage'

const VALUES = [
  {
    id: 'value-craft',
    title: 'Made slowly, worn daily.',
    body: 'Each piece is drawn by hand in our New York studio and cast in small batches with partner ateliers we have known for years.',
  },
  {
    id: 'value-metal',
    title: 'Demi-fine, properly made.',
    body: 'Recycled brass, plated in 18K gold at a generous 2.5 microns. Hypoallergenic, lead-free, and tarnish-resistant for daily wear.',
  },
  {
    id: 'value-price',
    title: 'Premium, not priced like it.',
    body: 'By selling direct, we offer the weight and finish of fine jewelry at a price that fits the way you actually shop.',
  },
]

export default function About() {
  return (
    <div className="bg-cream">
      <section className="pt-32 md:pt-44 pb-16">
        <div className="container-page text-center max-w-3xl mx-auto">
          <p className="eyebrow text-mocha">Our Story</p>
          <h1 className="display-1 mt-5 text-deep">
            A small studio on Greene Street,
            <br className="hidden md:block" />
            making jewelry for the everyday.
          </h1>
          <p className="body-base mt-7 max-w-xl mx-auto">
            Velmora began with a single question: what if demi-fine jewelry felt as
            considered as the heirlooms we grew up borrowing from our mothers? That
            question is still the one we ask, every morning, at the workbench.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative aspect-[4/5] bg-sand overflow-hidden">
              <StrkImage
                id="about-studio-img"
                query="[about-studio-context] [about-studio-title] jewelry studio workbench editorial portrait warm light"
                ratio="4x5"
                width={900}
                alt="Inside the Velmora studio"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 id="about-studio-title" className="display-2 text-deep">
                Designed in New York.
              </h2>
              <p id="about-studio-context" className="body-base mt-6 max-w-md">
                Our studio sits on Greene Street in SoHo, where the light still slips in
                through tall north-facing windows. Every Velmora piece begins as a
                hand-drawn sketch, is then prototyped in recycled brass, and only enters
                production when it earns its place.
              </p>
              <p className="body-base mt-4 max-w-md">
                We work with two partner ateliers — one in Bangkok, one in Istanbul — whom
                we visit every season. They are not vendors to us; they are family, and
                their work is the reason a Velmora piece feels the way it does in the
                hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand/40 py-20 md:py-28">
        <div className="container-page">
          <p className="eyebrow text-mocha text-center">What We Believe</p>
          <h2 className="display-2 mt-3 text-center text-deep">Three quiet principles</h2>
          <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {VALUES.map((v, i) => (
              <li key={v.id} className="text-center">
                <span
                  aria-hidden="true"
                  className="font-serif italic text-gold text-3xl block mb-4"
                >
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl text-deep">{v.title}</h3>
                <p className="body-base mt-4 max-w-xs mx-auto">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page text-center max-w-2xl mx-auto">
          <h2 className="display-2 text-deep">Find a piece to call yours.</h2>
          <p className="body-base mt-4">
            Browse the collection — earrings, necklaces, huggies, and gift sets.
          </p>
          <Link to="/shop" className="btn-primary mt-8 inline-flex">
            Shop the Collection
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  )
}
