import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="relative z-10 flex h-full min-h-[90vh] items-end">
        <div className="section-container pb-16 md:pb-24">
          <p className="eyebrow text-white/80">New Collection</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-white md:text-6xl lg:text-7xl text-balance">
            Crafted to be Treasured
          </h1>
          <p className="mt-4 max-w-xl font-body text-base text-white/85 md:text-lg">
            Demi-fine jewelry designed for quiet luxury. Warm gold finishes, refined silhouettes,
            and pieces meant to be worn every day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/shop">
              <Button size="lg" className="bg-white text-ink hover:bg-accent hover:text-white">
                Shop the Collection
              </Button>
            </Link>
            <Link to="/shop?category=earrings">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ink">
                Explore Earrings
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
