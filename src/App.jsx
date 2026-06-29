import './App.css'
import HomeHero from './components/home/HomeHero'
import ProductGrid from './components/home/ProductGrid'
import CapabilitySection from './components/home/CapabilitySection'
import ApplicationSection from './components/home/ApplicationSection'
import CallToAction from './components/home/CallToAction'
import SiteFooter from './components/home/SiteFooter'

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-950">
      <header className="border-b border-slate-200 bg-stone-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">ARTITECT MACHINERY</p>
            <p className="mt-1 text-sm text-slate-600">Elegant sheet metal folding solutions</p>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#products" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              Products
            </a>
            <a href="#applications" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              Applications
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 md:gap-10 md:py-10 lg:px-8 lg:py-12">
        <HomeHero />
        <ProductGrid />
        <CapabilitySection />
        <ApplicationSection />
        <CallToAction />
      </main>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SiteFooter />
      </div>
    </div>
  )
}

export default App
