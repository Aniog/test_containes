import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2, Factory, Search, ShieldCheck, Ship } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const proofItems = [
  'Supplier search and screening',
  'Factory checks before order placement',
  'QC inspection and shipment coordination',
]

const HomeHero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(31,111,235,0.28),transparent_34%),linear-gradient(135deg,rgba(8,25,45,0.98),rgba(15,35,58,0.92))]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="mb-4 inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
            China-based sourcing support for overseas buyers
          </p>
          <h1 id="home-hero-title" className="text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="home-hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China with a practical B2B sourcing partner.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-card transition hover:bg-blue-700">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/how-it-works" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white hover:bg-white/15">
              View sourcing process
            </Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-100">
            {proofItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 flex-none text-teal-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            className="min-h-[430px] rounded-[2rem] border border-white/10 bg-cover bg-center shadow-2xl"
            data-strk-bg-id="home-hero-factory-qc-shipping-4f7a2d"
            data-strk-bg="[home-hero-subtitle] [home-hero-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1200"
          >
            <div className="flex h-full min-h-[430px] flex-col justify-end rounded-[2rem] bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent p-6">
              <div className="grid gap-3 sm:grid-cols-3">
                {[Search, Factory, ShieldCheck].map((Icon, index) => (
                  <div key={index} className="rounded-2xl border border-white/15 bg-white/90 p-4 text-slate-950 shadow-card">
                    <Icon className="h-5 w-5 text-blue-700" />
                    <p className="mt-3 text-sm font-semibold">{['Source', 'Verify', 'Inspect'][index]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 left-5 right-5 rounded-3xl border border-slate-200 bg-white p-5 text-slate-950 shadow-card md:left-auto md:w-72">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
                <Ship className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-950">End-to-end visibility</p>
                <p className="text-xs leading-5 text-slate-600">From first quote to shipment handover.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
