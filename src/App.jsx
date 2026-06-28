import './index.css'
import strings from './strings'
import { featuredGenerators, categories, allGenerators } from './data'
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

const s = strings.en

function App() {
  return (
    <div className="min-h-screen bg-white text-[var(--color-body-text)]">
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero strings={s} />
        <FeaturedGenerators strings={s} generators={featuredGenerators} />
        <BrowseByCategory strings={s} categories={categories} />
        <AllGenerators strings={s} generators={allGenerators} categories={categories} />
        <HowItWorks strings={s} />
        <WhyStrikingly strings={s} />
        <FAQ strings={s} />
        <ClosingCTA strings={s} />
      </main>
      <Footer strings={s} />
    </div>
  )
}

export default App
