import TopBar from './components/generators/TopBar'
import Breadcrumb from './components/generators/Breadcrumb'
import Hero from './components/generators/Hero'
import FeaturedGenerators from './components/generators/FeaturedGenerators'
import BrowseByCategory from './components/generators/BrowseByCategory'
import AllGenerators from './components/generators/AllGenerators'
import HowItWorks from './components/generators/HowItWorks'
import WhyStrikingly from './components/generators/WhyStrikingly'
import FAQ from './components/generators/FAQ'
import ClosingCTA from './components/generators/ClosingCTA'
import Footer from './components/generators/Footer'

function App() {
  return (
    <>
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
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
