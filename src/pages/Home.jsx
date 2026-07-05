import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Home() {
  const bestsellers = products.slice(0, 5)
  
  const ugcItems = [
    { id: 1, caption: "My everyday staple", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 2, caption: "Gifted to myself", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 3, caption: "Perfect for date night", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80" },
    { id: 4, caption: "Obsessed with these", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 5, caption: "My new favorite", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
  ]

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies daily for months and they still look brand new.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and the necklace is even more stunning in person. My go-to gift for friends.", rating: 5 },
    { name: "Maya K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so rich.", rating: 5 },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content max-w-3xl">
          <h1 className="font-serif text-6xl md:text-7xl mb-6 tracking-[0.02em]">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl mb-10 text-[#C5A46E] tracking-[0.05em]">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80"
          alt="Velmora Jewelry"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-[#6B665F]">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.15em] text-[#8B7355] mb-2">DISCOVER</div>
            <h2 className="font-serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#8B7355] hidden md:block">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#F5F1EA] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.15em] text-[#8B7355] mb-2">AS SEEN ON YOU</div>
            <h2 className="font-serif text-3xl">Real Moments, Real Beauty</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card">
                <img src={item.image} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.15em] text-[#8B7355] mb-2">EXPLORE</div>
          <h2 className="font-serif text-4xl">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", link: "/shop?category=Earrings" },
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", link: "/shop?category=Necklaces" },
            { name: "Huggies", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80", link: "/shop?category=Huggies" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.link} className="category-tile group">
              <img src={cat.image} alt={cat.name} />
              <div className="category-label">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F1EA]">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=80"
              alt="Our Craft"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs tracking-[0.15em] text-[#8B7355] mb-3">EST. 2018</div>
            <h2 className="font-serif text-4xl mb-6">Our Story</h2>
            <div className="space-y-4 text-[#6B665F] leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful, lasting jewelry should be accessible to every woman who values quiet elegance.
              </p>
              <p>
                Each piece is thoughtfully designed in our studio and crafted with premium materials that honor both tradition and modern sensibilities.
              </p>
            </div>
            <Link to="/about" className="btn btn-outline mt-8 inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F5F1EA] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.15em] text-[#8B7355] mb-2">LOVED BY MANY</div>
            <h2 className="font-serif text-4xl">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="stars flex mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[#6B665F] mb-4 leading-relaxed">"{t.text}"</p>
                <div className="text-sm tracking-[0.05em]">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="font-serif text-3xl mb-4">Join the Circle</div>
          <p className="text-[#C5A46E] mb-8 tracking-[0.05em]">
            Be the first to know about new arrivals and receive 10% off your first order
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-[#4A443D] px-5 py-3 text-sm placeholder:text-[#6B665F] focus:outline-none focus:border-[#C5A46E]"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-[#6B665F] mt-4">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}

export default Home