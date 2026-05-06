import Layout from '@/components/shared/Layout'
import HomeHero from '@/components/home/HomeHero'
import SocialProof from '@/components/home/SocialProof'
import HowItWorks from '@/components/home/HowItWorks'
import ServiceHighlights from '@/components/home/ServiceHighlights'
import HomeCTA from '@/components/home/HomeCTA'

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <SocialProof />
      <HowItWorks />
      <ServiceHighlights />
      <HomeCTA />
    </Layout>
  )
}
