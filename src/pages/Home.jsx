import { Link } from 'react-router-dom'
import SectionHeading from '@/components/common/SectionHeading'
import NewsletterForm from '@/components/common/NewsletterForm'
import ProductCard from '@/components/product/ProductCard'
import HomeHero from '@/components/home/HomeHero'
import TrustBar from '@/components/home/TrustBar'
import UgcStrip from '@/components/home/UgcStrip'
import CategoryTiles from '@/components/home/CategoryTiles'
import StorySection from '@/components/home/StorySection'
import StarRating from '@/components/common/StarRating'
import { products, testimonials } from '@/data/storeData'

const Home = () => {
  return (
    <div className="space-y-16 pb-16 md:space-y-24 md:pb-24">
      <HomeHero />
      <TrustBar />

      <section>
        <div className="mx-auto max-w-7xl space-y-10 px-5 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Bestsellers"
              title="The pieces our customers reach for first."
              description="A polished edit of everyday signatures, sculptural finishes, and gift-ready favorites."
            />
            <Link to="/shop" className="hidden text-sm uppercase tracking-[0.3em] text-stone-700 transition hover:text-amber-700 md:inline-block">
              Shop All
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <UgcStrip />
      <CategoryTiles />
      <StorySection />

      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved for the details that feel elevated."
            description="From self-gifting moments to thoughtful presents, Velmora is made to feel instantly special."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="rounded-[2rem] border border-stone-300/70 bg-stone-100/70 p-6 text-stone-900 shadow-[0_18px_45px_rgba(28,25,23,0.06)]"
              >
                <StarRating rating={5} />
                <p className="mt-5 text-base leading-8 text-stone-700">“{testimonial.quote}”</p>
                <p className="mt-6 text-xs uppercase tracking-[0.35em] text-stone-500">{testimonial.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-amber-700 px-6 py-10 text-stone-50 shadow-[0_18px_45px_rgba(28,25,23,0.12)] md:px-10 md:py-12">
            <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-amber-100">Newsletter</p>
                <h2 className="mt-3 font-serif text-4xl leading-tight text-stone-50 md:text-5xl">
                  Join for 10% off your first order
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-amber-50 md:text-base">
                  Be first to hear about new drops, styling notes, and limited gifting edits.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
