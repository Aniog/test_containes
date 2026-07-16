import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);
  const categories = [
    { name: 'Earrings', path: '/shop?category=Earrings', id: 'cat-ear' },
    { name: 'Necklaces', path: '/shop?category=Necklaces', id: 'cat-neck' },
    { name: 'Huggies', path: '/shop?category=Huggies', id: 'cat-hug' }
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.path} className="group relative aspect-[4/5] overflow-hidden bg-muted">
              <img
                data-strk-img-id={`cat-img-${cat.id}`}
                data-strk-img={`[cat-name-${cat.id}] jewelry`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-x-0 bottom-10">
                <span id={`cat-name-${cat.id}`} className="inline-block bg-white text-primary px-8 py-3 text-xs uppercase tracking-widest translate-y-2 group-hover:translate-y-0 transition-transform duration-500 opacity-90 group-hover:opacity-100 group-hover:bg-accent group-hover:text-white">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;

cat <<'EOF' > /workspace/my-app/src/components/home/BrandStory.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <img
              data-strk-img-id="story-img-v1"
              data-strk-img="[story-sub] [story-title] jewelry making"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <p id="story-sub" className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Our Story</p>
            <h2 id="story-title" className="text-4xl md:text-5xl font-serif leading-tight">Crafted with Purpose, Designed to Last</h2>
            <p className="text-muted-foreground leading-relaxed font-light italic">
              "Velmora was born from a desire to create demi-fine jewelry that doesn't compromise on quality or conscience. Every piece in our collection is a labor of love, designed to celebrate the quiet luxury of every day."
            </p>
            <p className="text-sm leading-loose">
              Our jewelry uses 18K gold plating over recycled sterling silver, ensuring each piece is as sustainable as it is beautiful. We believe fine jewelry should be accessible, and luxury should be part of your daily ritual.
            </p>
            <div className="pt-4">
              <Link to="/about" className="text-xs uppercase tracking-widest border-b border-primary pb-1 hover:opacity-60 transition-opacity">
                Read our full story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;

cat <<'EOF' > /workspace/my-app/src/components/home/Testimonials.jsx
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { id: 1, name: 'Emma S.', text: 'The quality of the Golden Sphere Huggies is incredible. They feel so premium and have the perfect weight.' },
    { id: 2, name: 'Sophia R.', text: 'Absolutely love the Royal Heirloom Set. The packaging is as beautiful as the jewelry itself.' },
    { id: 3, name: 'Olivia M.', text: 'The perfect gifting destination. I bought a necklace for my sister and ended up getting one for myself too!' }
  ];

  return (
    <section className="py-24 bg-white border-y border-black/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {reviews.map((rev) => (
            <div key={rev.id} className="text-center space-y-6">
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-serif text-lg leading-relaxed italic">"{rev.text}"</p>
              <p className="text-[10px] uppercase tracking-widest font-semibold">— {rev.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

cat <<'EOF' > /workspace/my-app/src/components/home/Newsletter.jsx
import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-accent p-12 md:p-20 text-center text-white relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Join the Velmora Inner Circle</h2>
            <p className="text-xs uppercase tracking-widest mb-10 opacity-90">Join for 10% off your first order</p>
            
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-white/10 border border-white/20 px-6 py-4 text-sm focus:outline-none focus:bg-white/20 transition-colors placeholder:text-white/60"
                required
              />
              <button
                type="submit"
                className="bg-white text-accent px-10 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-opacity-90 transition-opacity"
              >
                Join Now
              </button>
            </form>
            
            <p className="mt-8 text-[10px] uppercase tracking-widest opacity-60">
              By joining, you agree to our Terms and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
