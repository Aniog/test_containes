import './App.css'
import Nav from '@/components/microcosmos/Nav'
import Hero from '@/components/microcosmos/Hero'
import About from '@/components/microcosmos/About'
import Inhabitants from '@/components/microcosmos/Inhabitants'
import Scale from '@/components/microcosmos/Scale'
import Gallery from '@/components/microcosmos/Gallery'
import CTA from '@/components/microcosmos/CTA'
import Footer from '@/components/microcosmos/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased scroll-smooth">
      <Nav />
      <main>
        <Hero />
        <About />
        <Inhabitants />
        <Scale />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
