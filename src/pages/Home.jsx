import React, { useState, useEffect } from 'react';
import { fetchProducts } from '@/api/products';
import HomeHero from '@/components/home/HomeHero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReel from '@/components/home/UGCReel';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Sophia L.", text: "Absolutely stunning quality. The gold tone is perfect — not too yellow, just pure elegance.", stars: 5 },
    { name: "Elena R.", text: "I wear my Golden Sphere Huggies every single day. They haven't tarnished and look so expensive.", stars: 5 },
    { name: "Maya T.", text: "The packaging was like opening a piece of high-end art. Perfect for my best friend's gift.", stars: 5 }
  ];

  return (
    <section className="py-24 bg-white border-t border-stone-muted">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {reviews.map((review, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex gap-1 text-gold mb-6">
                {[...Array(review.stars)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold" />)}
              </div>
              <p className="font-serif italic text-xl text-stone-700 mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <span className="text-xs tracking-[0.2em] font-medium uppercase text-stone-400">
                {review.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.filter(p => p.data.isBestseller));
      } catch (err) {
        console.error("Failed to load products", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="overflow-hidden">
      <HomeHero />
      <TrustBar />
      <Bestsellers products={products} />
      <CategoryTiles />
      <BrandStory />
      <UGCReel />
      <Testimonials />
      
      {/* Editorial Quote Section */}
      <section className="py-32 bg-obsidian text-white text-center">
        <div className="container-custom">
          <p className="font-serif italic text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
            "Jewelry is the most intimate form of art, worn close to the skin and closer to the heart."
          </p>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-12 mb-8" />
          <span className="text-xs tracking-[0.3em] font-medium uppercase text-gold">The Velmora Journal</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
