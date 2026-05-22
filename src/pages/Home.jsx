import HomeHero from '@/components/home/HomeHero'
import HomeFeatures from '@/components/home/HomeFeatures'
import HomeFeatured from '@/components/home/HomeFeatured'
import HomeReviews from '@/components/home/HomeReviews'
import HomeBookingCTA from '@/components/home/HomeBookingCTA'

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeFeatured />
      <HomeReviews />
      <HomeBookingCTA />
    </>
  )
}
