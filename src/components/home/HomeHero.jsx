import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroStats } from '@/siteData'
import StockImage from '@/components/site/StockImage'

function HomeHero() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-700">
            China sourcing support
          </p>
          <h1 id="home-hero-title" className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="home-hero-description" className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical support on the ground in China.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              to="/contact"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              to="/how-it-works"
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-700">{item.label}</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-3xl border border-sky-200 bg-sky-50 p-5 text-slate-700">
            <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-sky-700" />
            <p className="text-sm leading-7">
              Clear communication, structured supplier review, and practical production follow-up for brands, distributors, importers, and procurement teams.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p id="home-hero-image-context" className="sr-only">
              China factory sourcing meeting with product samples, supplier documents, export planning, and international buyer collaboration.
            </p>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
              <StockImage
                alt="China factory sourcing meeting with product samples"
                className="h-full min-h-[420px] w-full object-cover"
                imgId="home-hero-main-buyer-factory-71de42"
                query="[home-hero-image-context] [home-hero-description] [home-hero-title]"
                ratio="4x3"
                width="1100"
              />
            </div>
          </div>
          <div className="grid gap-5">
            <div>
              <p id="home-qc-image-context" className="sr-only">
                Quality control inspection inside a China factory with product checking, manufacturing line review, and export order inspection.
              </p>
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
                <StockImage
                  alt="Quality control inspection in a China factory"
                  className="h-56 w-full object-cover"
                  imgId="home-hero-qc-factory-check-6cb421"
                  query="[home-qc-image-context] [home-qc-note] [home-hero-title]"
                  ratio="3x4"
                  width="700"
                />
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
              <p id="home-qc-note" className="text-sm font-medium uppercase tracking-[0.16em] text-sky-300">
                Practical sourcing partner
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-tight">
                From supplier screening to final shipment readiness.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                We focus on the work that helps buyers reduce sourcing uncertainty and move orders forward with better visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
