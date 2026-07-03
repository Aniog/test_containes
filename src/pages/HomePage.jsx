import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import ProductCard from '@/components/home/ProductCard'
import UGCStrip from '@/components/home/UGCStrip'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'
import products from '@/data/products'

const bestsellers = products.filter((p) => p.bestseller)

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />

      {/* Bestsellers */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <h2 className="section-title text-center mb-2">Bestsellers</h2>
          <p className="text-center text-velvet-500 text-sm mb-10 font-sans">
            The pieces everyone is talking about
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <UGCStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}