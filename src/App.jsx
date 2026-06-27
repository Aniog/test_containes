import './App.css'
import TopBar from '@/components/TopBar'
import Breadcrumb from '@/components/Breadcrumb'
import Hero from '@/components/Hero'
import FeaturedGenerators from '@/components/FeaturedGenerators'
import BrowseByCategory from '@/components/BrowseByCategory'
import AllGenerators from '@/components/AllGenerators'
import HowItWorks from '@/components/HowItWorks'
import WhyStrikingly from '@/components/WhyStrikingly'
import FAQ from '@/components/FAQ'
import ClosingCta from '@/components/ClosingCta'
import Footer from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
