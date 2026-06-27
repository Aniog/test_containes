import TopBar from './components/TopBar'
import Breadcrumb from './components/Breadcrumb'
import Hero from './components/Hero'
import FeaturedGenerators from './components/FeaturedGenerators'
import BrowseByCategory from './components/BrowseByCategory'
import AllGenerators from './components/AllGenerators'
import HowItWorks from './components/HowItWorks'
import WhyStrikingly from './components/WhyStrikingly'
import Faq from './components/Faq'
import ClosingCta from './components/ClosingCta'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-[family-name:var(--font-body)] text-[color:var(--color-text-body)]">
      <TopBar />
      <div className="max-w-[1200px] mx-auto px-5 w-full">
        <Breadcrumb />
      </div>
      <Hero />
      <FeaturedGenerators />
      <BrowseByCategory />
      <AllGenerators />
      <HowItWorks />
      <WhyStrikingly />
      <Faq />
      <ClosingCta />
      <Footer />
    </div>
  )
}

export default App
