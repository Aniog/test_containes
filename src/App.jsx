import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBanner from '@/components/StatsBanner'
import Products from '@/components/Products'
import Features from '@/components/Features'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBanner />
      <Products />
      <Features />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
