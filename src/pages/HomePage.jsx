import BrandStory from '@/components/home/BrandStory'
import CategoryTiles from '@/components/home/CategoryTiles'
import HomeHero from '@/components/home/HomeHero'
import HomeTrustBar from '@/components/home/HomeTrustBar'
import JournalPreview from '@/components/home/JournalPreview'
import NewsletterBlock from '@/components/home/NewsletterBlock'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import UgcReel from '@/components/home/UgcReel'
import ProductCard from '@/components/products/ProductCard'
import SectionHeader from '@/components/shared/SectionHeader'
import { products } from '@/data/store'

const HomePage = ({ onAddToCart }) => {
  const bestsellers = products.slice(0, 5)

  return (
    <div className="bg-brand-canvas">
      <HomeHero />
      <HomeTrustBar />

      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <section className="space-y-10">
          <SectionHeader
            eyebrow="Bestsellers"
            title="The pieces women come back for"
            description="A tight edit of Velmora signatures: warm gold essentials, polished gifts, and elevated everyday pieces priced for repeat wear."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {bestsellers.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                priority={index < 2}
              />
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeader
            eyebrow="Seen on you"
            title="A reel of everyday Velmora moments"
            description="An editorial take on the social strip: softly lit styling, ear stacks, and gifting-ready details that feel lived in rather than staged."
          />
          <UgcReel />
        </section>

        <section className="space-y-10">
          <SectionHeader
            eyebrow="Shop by category"
            title="Choose your signature"
            description="Begin with the silhouette that suits your mood, from compact huggies to statement necklaces and softly sculptural earrings."
          />
          <CategoryTiles />
        </section>

        <BrandStory />
        <TestimonialsSection />
        <JournalPreview />
        <NewsletterBlock />
      </div>
    </div>
  )
}

export default HomePage
