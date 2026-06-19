import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-914c0f93e7c1?w=800&q=85"
              alt="Artisan jewelry craftsman at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
              Jewelry That <span className="italic">Matters</span>
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mb-6" />
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Velmora was born from a simple belief: exceptional jewelry shouldn&apos;t require exceptional 
              price tags. We source the finest materials — 18K gold plating, ethically sourced crystals, 
              and hypoallergenic metals — to create pieces that feel as beautiful as they look.
            </p>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mt-4">
              Every design is hand-finished by skilled artisans, then delivered to you in packaging 
              designed to be cherished. Because at Velmora, we believe jewelry is more than an 
              accessory — it&apos;s a memory waiting to be made.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 text-gold hover:text-gold-dark text-sm tracking-[0.15em] uppercase font-medium transition-colors duration-300 group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}