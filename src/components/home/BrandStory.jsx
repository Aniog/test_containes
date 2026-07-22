import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C8A45C] font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] font-light leading-tight mb-6">
              Jewelry That Tells
              <br />
              <span className="italic">Your Story</span>
            </h2>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
              Velmora was born from a belief that fine jewelry should not require
              a fine price. Each piece is thoughtfully designed in our studio and
              ethically crafted using 18K gold-plated materials that stand the test
              of time.
            </p>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-8">
              We believe in jewelry that is worn every day, not saved for special
              occasions. Pieces that become part of who you are.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-[#C8A45C] hover:text-[#B8944E] transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}