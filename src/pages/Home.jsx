import { Link } from 'react-router-dom'
import HeroVisual from '@/components/store/HeroVisual.jsx'
import TrustBar from '@/components/store/TrustBar.jsx'
import SectionHeading from '@/components/store/SectionHeading.jsx'
import ProductCard from '@/components/store/ProductCard.jsx'
import UgcStrip from '@/components/store/UgcStrip.jsx'
import CategoryTiles from '@/components/store/CategoryTiles.jsx'
import StorySplit from '@/components/store/StorySplit.jsx'
import Testimonials from '@/components/store/Testimonials.jsx'
import NewsletterBlock from '@/components/store/NewsletterBlock.jsx'
import { products } from '@/data/products.js'

const Home = () => {
  return (
    <>
      <HeroVisual />
      <TrustBar />

      <section className="section-padding bg-ivory">
        <div className="content-wrap">
          <SectionHeading
            kicker="Bestsellers"
            title="The pieces customers return for"
            description="A polished edit of demi-fine silhouettes for everyday wear, gifting, and elevated layering."
            action={<Link to="/shop" className="button-secondary">View All</Link>}
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <UgcStrip />
      <CategoryTiles />
      <StorySplit />
      <Testimonials />
      <NewsletterBlock />
    </>
  )
}

export default Home
