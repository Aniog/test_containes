import './App.css'
import CapabilityGrid from './components/home/CapabilityGrid'
import ContactCta from './components/home/ContactCta'
import HomeHero from './components/home/HomeHero'
import ProcessSection from './components/home/ProcessSection'
import ProductShowcase from './components/home/ProductShowcase'

function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-sm font-semibold tracking-[0.28em] text-slate-900">
            ARTITECT MACHINERY
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#products" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Products
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <HomeHero />
        <ProductShowcase />
        <CapabilityGrid />
        <ProcessSection />
        <ContactCta />
      </main>
    </div>
  )
}

export default App
