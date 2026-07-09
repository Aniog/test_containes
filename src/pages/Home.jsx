import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import UGCReel from '../components/UGCReel';
import { products } from '../data/products';

const Home = () => {
  // Show 5 bestsellers (all products for demo)
  const bestsellers = products;

  const testimonials = [
    {
      id: 1,
      text: "The quality is exceptional. I wear my huggies every day and they still look brand new.",
      name: "Elena M.",
      rating: 5,
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since.",
      name: "Sofia R.",
      rating: 5,
    },
    {
      id: 3,
      text: "Beautiful packaging and the necklace is even more stunning in person. Will be back for more.",
      name: "Aisha K.",
      rating: 5,
    },
  ];

  const categories = [
    { name: "Earrings", slug: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
    { name: "Necklaces", slug: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
    { name: "Huggies", slug: "Huggies", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative h-[92vh] min-h-[620px] flex items-center justify-center bg-[#EDE8E0] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85"
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="heading-serif text-white text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[3px]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="border-b border-velmora-border bg-white py-4">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs tracking-[1.5px] text-muted text-center">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden md:inline">•</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden md:inline">•</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden md:inline">•</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-xs tracking-[2px] text-gold mb-1">CURATED FOR YOU</div>
              <h2 className="heading-serif text-3xl md:text-4xl">Bestsellers</h2>
            </div>
            <Link to="/shop" className="hidden md:block text-sm tracking-wider hover:text-gold">
              VIEW ALL →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/shop" className="text-sm tracking-wider">VIEW ALL →</Link>
          </div>
        </div>
      </section>

      {/* 4. UGC Reel */}
      <section className="section bg-velmora-bg-alt">
        <div className="container">
          <div className="mb-8">
            <div className="text-xs tracking-[2px] text-gold mb-1">AS SEEN ON YOU</div>
            <h2 className="heading-serif text-3xl md:text-4xl">Moments in Gold</h2>
          </div>
          <UGCReel />
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[2px] text-gold mb-1">DISCOVER</div>
            <h2 className="heading-serif text-3xl md:text-4xl">Shop by Category</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/shop?category=${cat.slug}`}
                className="category-tile group"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
                <div className="label">
                  {cat.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="aspect-[4/3] bg-velmora-bg-alt overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-lg">
              <div className="text-xs tracking-[2px] text-gold mb-2">EST. 2018</div>
              <h2 className="heading-serif text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-[15px] text-muted leading-relaxed">
                <p>
                  Velmora was born from a desire to create jewelry that feels both special and wearable. 
                  We believe that the pieces you wear every day should be as beautiful as the ones you save for special occasions.
                </p>
                <p>
                  Each piece is thoughtfully designed in our studio and crafted with care using premium materials. 
                  We source responsibly and finish every item by hand.
                </p>
              </div>
              <Link to="/about" className="btn btn-outline mt-8 inline-block">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[2px] text-gold mb-1">LOVED BY MANY</div>
            <h2 className="heading-serif text-3xl md:text-4xl">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial">
                <div className="stars mb-4">★★★★★</div>
                <p className="text-[15px] leading-relaxed mb-6">"{t.text}"</p>
                <div className="text-sm font-medium">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="newsletter py-16">
        <div className="container max-w-xl text-center">
          <div className="text-xs tracking-[2px] text-gold mb-3">BECOME PART OF OUR WORLD</div>
          <h2 className="heading-serif text-white text-3xl md:text-4xl mb-3">Join for 10% off your first order</h2>
          <p className="text-white/70 text-sm mb-8">Be the first to know about new arrivals, stories, and special offers.</p>
          
          <form 
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                alert(`Thank you! 10% off code sent to ${email}`);
                e.target.reset();
              }
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="input flex-1"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-4 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
