import BestsellersSection from "@/components/home/BestsellersSection"
import BrandStory from "@/components/home/BrandStory"
import CategoryTiles from "@/components/home/CategoryTiles"
import HeroSection from "@/components/home/HeroSection"
import JournalPreview from "@/components/home/JournalPreview"
import NewsletterSection from "@/components/home/NewsletterSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import TrustBar from "@/components/home/TrustBar"
import UgcStrip from "@/components/home/UgcStrip"
import { products } from "@/data/store"

const HomePage = ({ onAddToCart }) => {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection products={products} onAddToCart={onAddToCart} />
      <UgcStrip />
      <CategoryTiles />
      <BrandStory />
      <TestimonialsSection />
      <JournalPreview />
      <NewsletterSection />
    </>
  )
}

export default HomePage
