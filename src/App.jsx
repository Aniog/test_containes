import Navbar from './components/microcosmos/Navbar'
import Hero from './components/microcosmos/Hero'
import Explore from './components/microcosmos/Explore'
import Organisms from './components/microcosmos/Organisms'
import Scale from './components/microcosmos/Scale'
import Science from './components/microcosmos/Science'
import CTA from './components/microcosmos/CTA'
import Footer from './components/microcosmos/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#05060d] text-slate-200 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Explore />
        <Organisms />
        <Scale />
        <Science />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
