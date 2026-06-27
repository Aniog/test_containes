import './App.css'
import TopBar from './components/topbar/TopBar'
import Breadcrumb from './components/breadcrumb/Breadcrumb'
import Hero from './components/hero/Hero'
import Featured from './components/featured/Featured'
import BrowseByCategory from './components/browse/BrowseByCategory'
import AllGenerators from './components/allGenerators/AllGenerators'
import HowItWorks from './components/howItWorks/HowItWorks'
import WhyStrikingly from './components/why/WhyStrikingly'
import FAQ from './components/faq/FAQ'
import ClosingCTA from './components/closing/ClosingCTA'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <Featured />
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
