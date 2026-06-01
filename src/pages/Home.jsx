import Hero from '../components/home/Hero'
import StatsSection from '../components/home/StatsSection'
import FeaturedMemories from '../components/home/FeaturedMemories'
import BrowseCategories from '../components/home/BrowseCategories'
import ContributeCTA from '../components/home/ContributeCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedMemories />
      <BrowseCategories />
      <ContributeCTA />
    </>
  )
}
