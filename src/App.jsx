import './App.css'
import AdvantagesSection from './components/home/AdvantagesSection'
import ContactSection from './components/home/ContactSection'
import HeroSection from './components/home/HeroSection'
import ProcessSection from './components/home/ProcessSection'
import ProductsSection from './components/home/ProductsSection'
import SiteHeader from './components/home/SiteHeader'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProductsSection />
        <AdvantagesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <footer className="border-t border-slate-300 bg-white px-6 py-8 text-center text-sm text-slate-700 md:px-10 lg:px-16">
        <p className="font-semibold tracking-[0.12em] text-slate-950">ARTITECT MACHINERY</p>
        <p className="mt-2">Elegant and user-friendly folding machine presentation for modern industrial buyers.</p>
      </footer>
    </div>
  )
}

export default App
