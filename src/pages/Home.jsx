import BestsellersSection from "@/components/home/BestsellersSection.jsx"
import BrandStory from "@/components/home/BrandStory.jsx"
import CategoryTiles from "@/components/home/CategoryTiles.jsx"
import HeroSection from "@/components/home/HeroSection.jsx"
import Newsletter from "@/components/home/Newsletter.jsx"
import Testimonials from "@/components/home/Testimonials.jsx"
import TrustBar from "@/components/home/TrustBar.jsx"
import UgcReels from "@/components/home/UgcReels.jsx"
import { useCart } from "@/context/CartContext.jsx"

export default function Home() {
  const { addItem } = useCart()

  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersSection onAdd={addItem} />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
