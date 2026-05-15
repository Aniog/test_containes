import HomeHero from '../components/home/HomeHero'
import HomeProducts from '../components/home/HomeProducts'
import HomeFeatures from '../components/home/HomeFeatures'
import HomeAbout from '../components/home/HomeAbout'
import HomeNews from '../components/home/HomeNews'
import HomeCTA from '../components/home/HomeCTA'

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeProducts />
      <HomeFeatures />
      <HomeAbout />
      <HomeNews />
      <HomeCTA />
    </>
  )
}
