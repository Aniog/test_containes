import { useState, useCallback } from 'react'
import { strings, categories, featuredGenerators, allGenerators, slugify } from '@/data/strings.js'
import TopBar from '@/components/generators/TopBar.jsx'
import Breadcrumb from '@/components/generators/Breadcrumb.jsx'
import Hero from '@/components/generators/Hero.jsx'
import FeaturedGenerators from '@/components/generators/FeaturedGenerators.jsx'
import BrowseByCategory from '@/components/generators/BrowseByCategory.jsx'
import AllGenerators from '@/components/generators/AllGenerators.jsx'
import HowItWorks from '@/components/generators/HowItWorks.jsx'
import WhyStrikingly from '@/components/generators/WhyStrikingly.jsx'
import FAQ from '@/components/generators/FAQ.jsx'
import ClosingCTA from '@/components/generators/ClosingCTA.jsx'
import Footer from '@/components/generators/Footer.jsx'

const t = strings.en

export default function GeneratorsHub() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = useCallback((query) => {
    setSearchQuery(query)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Breadcrumb t={t} />
      <main>
        <Hero t={t} />
        <FeaturedGenerators t={t} generators={featuredGenerators} slugify={slugify} />
        <BrowseByCategory t={t} categories={categories} />
        <AllGenerators
          t={t}
          categories={categories}
          generators={allGenerators}
          slugify={slugify}
          searchQuery={searchQuery}
          onSearch={handleSearch}
        />
        <HowItWorks t={t} />
        <WhyStrikingly t={t} />
        <FAQ t={t} />
        <ClosingCTA t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
