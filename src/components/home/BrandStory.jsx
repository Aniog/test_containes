import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="aspect-[4/5] md:aspect-square overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:py-10">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-6">
              Designed for the Modern Romantic
            </h2>
            <p className="text-taupe leading-relaxed mb-5">
              Velmora was born from a love of quiet luxury — pieces that feel
              special enough for celebrations, yet refined enough for everyday
              wear. Every design begins with a sketch and is brought to life in
              18k gold-plated brass, chosen for its warmth, durability, and
              accessible elegance.
            </p>
            <p className="text-taupe leading-relaxed mb-8">
              We believe fine jewelry should not wait for permission. Whether
              you are gifting someone you love or treating yourself, our pieces
              are made to be treasured.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-espresso pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
