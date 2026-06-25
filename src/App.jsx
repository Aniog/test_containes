import { useEffect, useRef } from 'react'
import { Factory, ShieldCheck, SlidersHorizontal } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import HeroSection from '@/components/site/HeroSection'
import StatsStrip from '@/components/site/StatsStrip'
import BenefitsSection from '@/components/site/BenefitsSection'
import ProductsSection from '@/components/site/ProductsSection'
import WorkflowSection from '@/components/site/WorkflowSection'
import ContactSection from '@/components/site/ContactSection'
import SiteFooter from '@/components/site/SiteFooter'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

const topFeatures = [
  {
    icon: SlidersHorizontal,
    title: 'Friendly controls',
    description: 'A smoother interface for faster setup and easier daily use.',
  },
  {
    icon: Factory,
    title: 'Industrial precision',
    description: 'Stable performance for demanding sheet metal applications.',
  },
  {
    icon: ShieldCheck,
    title: 'Confident reliability',
    description: 'Built to support production consistency and long-term value.',
  },
]

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-slate-950 text-white"
    >
      <header className="px-6 py-6 md:px-10 xl:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/6 px-5 py-4 backdrop-blur">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
              ARTITECT MACHINERY
            </p>
            <p className="mt-1 text-sm text-slate-300">Elegant metal folding solutions</p>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#products" className="transition hover:text-white">Products</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <StatsStrip />

        <section className="px-6 py-10 md:px-10 xl:px-16">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {topFeatures.map((feature) => {
              const Icon = feature.icon

              return (
                <article
                  key={feature.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 text-white backdrop-blur"
                >
                  <div className="inline-flex rounded-2xl bg-amber-400/15 p-3 text-amber-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold tracking-tight text-white">
                    {feature.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {feature.description}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        <BenefitsSection />
        <ProductsSection />
        <WorkflowSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
