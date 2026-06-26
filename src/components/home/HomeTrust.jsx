import { useEffect, useRef } from 'react'
import { Users, Globe2, FileCheck, Wallet, Headphones, MapPin } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

const points = [
  {
    icon: MapPin,
    title: 'Based in China',
    description:
      'Our sourcing managers work directly in Yiwu and Shenzhen — close to the factories, ports and trade shows.',
  },
  {
    icon: Users,
    title: 'Buyer-side only',
    description:
      'We work for the buyer, not the factory. We do not take commissions from suppliers.',
  },
  {
    icon: FileCheck,
    title: 'Documented at every step',
    description:
      'Quotes, audits, inspections and shipping documents are all shared with you in a clear, written format.',
  },
  {
    icon: Wallet,
    title: 'Transparent pricing',
    description:
      'A clear service fee or percentage agreed up front. No hidden mark-ups on factory prices.',
  },
  {
    icon: Globe2,
    title: 'Buyers in 40+ countries',
    description:
      'Experience working with importers, e-commerce sellers and brands across North America, Europe and the Middle East.',
  },
  {
    icon: Headphones,
    title: 'One point of contact',
    description:
      'A dedicated sourcing manager handles your project from first inquiry to delivered goods.',
  },
]

export default function HomeTrust() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              Why buyers choose us
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Practical, on-the-ground sourcing support
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              We focus on doing the unglamorous work of sourcing well — verifying suppliers,
              checking products, and keeping you informed.
            </p>

            <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200">
              <img
                alt="Sourcing manager visiting a factory in China"
                data-strk-img-id="home-trust-photo-d4f1a2"
                data-strk-img="[home-trust-quote] sourcing manager factory visit china"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>

            <blockquote
              id="home-trust-quote"
              className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-sm text-slate-700 italic leading-relaxed">
                "Working with SSourcing China saved us from a costly mistake on our first
                order — they caught a critical defect during pre-shipment inspection and
                arranged rework before the goods left the factory."
              </p>
              <footer className="mt-3 text-xs text-slate-500">
                — Operations Manager, kitchenware brand, Germany
              </footer>
            </blockquote>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:border-blue-200 hover:shadow-sm transition"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
