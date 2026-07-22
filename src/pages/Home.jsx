import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import { products } from '@/data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80" },
    { id: 2, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 3, caption: "Golden hour", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 5, caption: "Effortless charm", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
  ];

  const categories = [
    { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
    { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
    { name: "Huggies", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my signature piece." },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I'll treasure." },
    { name: "Isabella K.", text: "Finally found pieces that feel truly special without the luxury markup." },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1612]">
      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#1A1612] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=2000&q=90')] bg-cover bg-center opacity-90" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-[56px] md:text-[72px] leading-[1.05] tracking-[-1px] text-white mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/80 text-lg tracking-wide mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, thoughtfully designed for the moments that matter.
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-white text-[#1A1612] hover:bg-[#F8F5F0]">
              SHOP THE COLLECTION
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="border-b border-[#EDE8DF] py-4">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[2px] text-[#6B655C] text-center">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden md:inline">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden md:inline">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden md:inline">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-[1440px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[3px] text-[#C5A26F] mb-2">DISCOVER</p>
            <h2 className="font-serif text-4xl tracking-[-0.5px]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[1.5px] hover:text-[#C5A26F]">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="relative aspect-[4/3.5] bg-[#EDE8DF] overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-white/95 px-6 py-2 text-xs tracking-[2px] hover:bg-[#C5A26F] hover:text-white"
                >
                  QUICK ADD
                </button>
              </div>
              <div>
                <p className="font-serif text-sm tracking-[1.5px] mb-1">{product.name}</p>
                <p className="text-sm text-[#6B655C]">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. UGC Reel-style Row */}
      <section className="bg-[#1A1612] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <p className="text-center text-[#C5A26F] text-xs tracking-[3px] mb-8">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="relative flex-shrink-0 w-[180px] aspect-[9/16] overflow-hidden snap-start">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="font-serif text-white text-sm tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[3px] text-[#C5A26F] mb-2">EXPLORE</p>
          <h2 className="font-serif text-4xl tracking-[-0.5px]">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} to="/shop" className="group relative aspect-[16/10] overflow-hidden bg-[#EDE8DF]">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-3xl tracking-[3px] opacity-0 group-hover:opacity-100 transition-opacity">
                  {cat.name.toUpperCase()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="max-w-[1440px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#EDE8DF]">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <p className="text-xs tracking-[3px] text-[#C5A26F] mb-3">EST. 2019</p>
            <h2 className="font-serif text-4xl tracking-[-0.5px] mb-6">Our Story</h2>
            <p className="text-[#6B655C] leading-relaxed mb-8">
              Velmora was born from a simple belief: that beautiful, lasting jewelry should be accessible.
              We design demi-fine pieces that honor tradition while embracing modern life—crafted with care,
              meant to be worn every day.
            </p>
            <Link to="/about" className="inline-block text-sm tracking-[2px] border-b border-[#1A1612] pb-0.5 hover:text-[#C5A26F] hover:border-[#C5A26F]">
              READ OUR STORY →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <p className="text-xs tracking-[3px] text-[#C5A26F] mb-8">LOVED BY MANY</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="px-4">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} className="fill-[#C5A26F] text-[#C5A26F]" />
                  ))}
                </div>
                <p className="text-[#6B655C] italic mb-4 leading-relaxed">"{t.text}"</p>
                <p className="text-sm tracking-wide">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="max-w-[1440px] mx-auto px-6 py-20 text-center">
        <div className="max-w-md mx-auto">
          <p className="text-xs tracking-[3px] text-[#C5A26F] mb-3">STAY CLOSE</p>
          <h2 className="font-serif text-3xl tracking-[-0.5px] mb-4">Join for 10% off your first order</h2>
          <p className="text-[#6B655C] text-sm mb-8">Be the first to know about new arrivals and stories from the atelier.</p>
          <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="flex-1 border border-[#EDE8DF] bg-transparent px-5 py-3 text-sm tracking-[1px] placeholder:text-[#A89F94] focus:outline-none focus:border-[#C5A26F]"
            />
            <Button type="submit">JOIN</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;