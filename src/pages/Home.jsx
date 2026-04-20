import HomeHero from '@/components/home/HomeHero'
import HomeNewsPreview from '@/components/home/HomeNewsPreview'
import HomePlatformDeals from '@/components/home/HomePlatformDeals'
import HomeFeaturedGames from '@/components/home/HomeFeaturedGames'

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeFeaturedGames />
      <HomePlatformDeals />
      <HomeNewsPreview />
    </div>
  )
}
