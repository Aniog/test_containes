import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/lib/products';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const bestsellers = products.slice(0, 5);

  const categories = [
    { title: 'Earrings', path: '/category/earrings', imgId: 'cat-earrings' },
    { title: 'Necklaces', path: '/category/necklaces', imgId: 'cat-necklaces' },
    { title: 'Huggies', path: '/category/huggies', imgId: 'cat-huggies' },
  ];

  const ugcPosts = [
    { id: 1, caption: 'Everyday Essentials', imgId: 'ugc-1' },
    { id: 2, caption: 'Golden Hour Glow', imgId: 'ugc-2' },
    { id: 3, caption: 'The Perfect Gift', imgId: 'ugc-3' },
    { id: 4, caption: 'Luxe Layers', imgId: 'ugc-4' },
    { id: 5, caption: 'Modern Classic', imgId: 'ugc-5' },
    { id: 6, caption: 'Statement Style', imgId: 'ugc-6' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-black/20 z-10"
        />
        <div
          className="absolute inset-0 w-full h-full"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-title] [hero-subtitle] gold jewelry lifestyle"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-6 leading-tight max-w-4xl tracking-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-white/90 font-light mb-12 max-w-xl leading-relaxed">
            Discover our collection of timeless demi-fine jewelry designed for your everyday moments.
          </p>
          <Link to="/shop" className="btn-primary bg-accent hover:bg-accent/80 border-none px-12 py-4 text-sm scale-110">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-hairline bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500">
            <span>Free Worldwide Shipping</span>
            <div className="hidden sm:block w-px h-4 bg-gray-200" />
            <span>30-Day Returns</span>
            <div className="hidden sm:block w-px h-4 bg-gray-200" />
            <span>18K Gold Plated</span>
            <div className="hidden sm:block w-px h-4 bg-gray-200" />
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers Product Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-2 tracking-tight">The Bestsellers</h2>
              <p className="text-gray-500 font-light italic">Most loved pieces from our collection</p>
            </div>
            <Link to="/shop" className="group flex items-center gap-2 text-xs tracking-widest uppercase font-medium hover:text-accent transition-colors">
              View All <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reels Strip */}
      <section className="py-24 bg-[#FAFAFA] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-12 flex justify-between items-center">
            <h2 className="text-2xl font-serif tracking-tight">As Seen on You</h2>
             <span className="text-xs tracking-widest uppercase text-gray-500">@VelmoraJewelry</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar px-4 md:px-8">
          {ugcPosts.map((post) => (
            <div key={post.id} className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] snap-start bg-muted group cursor-pointer overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={post.imgId}
                data-strk-img={`[ugc-caption-${post.id}] woman wearing jewelry ear neck closeup`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                alt="UGC post"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 right-8">
                <p id={`ugc-caption-${post.id}`} className="text-white font-serif text-lg leading-snug translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 italic">
                  "{post.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-serif mb-16 text-center tracking-tight">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {categories.map((cat) => (
              <Link key={cat.title} to={cat.path} className="group relative aspect-square overflow-hidden bg-muted">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`${cat.title} jewelry collection banner`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-sm text-primary px-8 py-3 text-xs tracking-widest uppercase font-medium opacity-100 translate-y-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {cat.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] bg-muted overflow-hidden order-2 md:order-1">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id="story-image"
                data-strk-img="jewelry designer working workshop elegant hands"
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col items-start gap-8">
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold">The Velmora Ethos</span>
              <h2 id="story-title" className="text-4xl md:text-5xl font-serif leading-tight tracking-tight">Jewelry for your most cherished moments.</h2>
              <p className="text-gray-600 leading-loose font-light">
                Founded on the belief that luxury should be accessible without compromise. We create demi-fine pieces using 18K gold plating over recycled materials, ensuring each item is both beautiful and lasting. Our designs are inspired by the quiet beauty of everyday life, crafted to become part of your signature style.
              </p>
              <Link to="/about" className="btn-outline border-hairline py-4 px-10">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-16 font-semibold">What They Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: 'Sophie M.', text: 'The quality of the Golden Sphere Huggies is incredible. They haven’t tarnished at all and I wear them daily.' },
              { name: 'Elena R.', text: 'Fast shipping and beautiful packaging. The Royal Heirloom Set looked exactly like the photos.' },
              { name: 'Jessica K.', text: 'Velmora has become my go-to for gifts. Such elegant pieces at a price point that makes sense.' }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center gap-6 max-w-sm mx-auto">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#C5A059" color="#C5A059" />)}
                </div>
                <p className="font-serif text-lg italic leading-relaxed text-gray-700">"{review.text}"</p>
                <span className="text-[10px] tracking-widest uppercase font-medium text-gray-400">— {review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-accent text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight">Join Our Inner Circle</h2>
            <p className="text-white/80 font-light mb-10 leading-relaxed italic">
              Subscribe for exclusive early access to new collections and enjoy 10% off your first order.
            </p>
            <form className="w-full flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-white text-primary px-6 py-4 outline-none placeholder:text-gray-400 placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest"
              />
              <button className="bg-primary text-white px-10 py-4 text-xs tracking-widest uppercase font-medium hover:bg-black transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
