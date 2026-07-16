import React from 'react';
import { Link } from 'react-router-dom';
import { products, ugcImages } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  const categories = [
    { name: 'Earrings', image: products[0].image, slug: 'Earrings' },
    { name: 'Necklaces', image: products[1].image, slug: 'Necklaces' },
    { name: 'Huggies', image: products[2].image, slug: 'Huggies' },
  ];

  const testimonials = [
    { name: 'Elena M.', text: 'The quality is exceptional. I wear my huggies every day.', rating: 5 },
    { name: 'Sofia R.', text: 'Beautiful packaging and the necklace is even more stunning in person.', rating: 5 },
    { name: 'Isabella K.', text: 'My go-to for thoughtful, elegant gifts. Always a hit.', rating: 5 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[92vh] flex items-center justify-center bg-[#1A1816] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3A3630_0.5px,transparent_1px)] bg-[length:4px_4px] opacity-40" />
        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&q=80"
          alt="Velmora Jewelry"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-[56px] md:text-[72px] leading-[1.05] tracking-[-0.02em] text-white mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-[#D4BFA3] text-lg mb-10 tracking-[0.02em]">
            Demi-fine gold jewelry, made with intention.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5DFD4] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs tracking-[0.12em] text-[#6B655E]">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.15em] text-[#B8976E] mb-2">DISCOVER</div>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[#B8976E] hidden md:block">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F5F1EA] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs tracking-[0.15em] text-[#B8976E] mb-8">AS SEEN ON</div>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {ugcImages.map((ugc) => (
              <div key={ugc.id} className="ugc-card">
                <img src={ugc.image} alt={ugc.caption} />
                <div className="ugc-caption">{ugc.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.15em] text-[#B8976E] mb-2">EXPLORE</div>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="category-tile group"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-white text-xl serif tracking-[0.08em] group-hover:underline">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F1EA]">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=900&q=80"
              alt="Our Craft"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pr-4">
            <div className="text-xs tracking-[0.15em] text-[#B8976E] mb-3">EST. 2019</div>
            <h2 className="serif text-5xl leading-none tracking-[-0.02em] mb-8">
              Quiet luxury,<br />intentionally made.
            </h2>
            <p className="text-[#6B655E] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels personal—pieces that become part of your story, not just an accessory. Each design is crafted with care, using responsibly sourced materials and traditional techniques.
            </p>
            <Link to="/about" className="btn btn-outline inline-block">Our Story</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 border-y border-[#E5DFD4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs tracking-[0.15em] text-[#B8976E] mb-2">LOVED BY MANY</div>
            <h2 className="serif text-4xl">What Our Community Says</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-[#B8976E] mb-4">★★★★★</div>
                <p className="text-[#6B655E] italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="text-sm tracking-[0.05em]">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="text-xs tracking-[0.15em] text-[#B8976E] mb-3">STAY CLOSE</div>
        <h2 className="serif text-4xl mb-4">Join for 10% off your first order</h2>
        <p className="text-[#6B655E] mb-8">Be the first to know about new arrivals and stories.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Thank you! You are now subscribed.'); }}>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 border border-[#E5DFD4] px-5 py-3.5 text-sm focus:outline-none focus:border-[#B8976E]"
            required
          />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
