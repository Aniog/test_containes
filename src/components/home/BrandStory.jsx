import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-cream-warm-50">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg"
              data-strk-bg="artisan gold jewelry workshop hands crafting warm lighting"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: 'linear-gradient(135deg, #D4A853 0%, #B07D2A 100%)',
              }}
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-label text-gold-500 mb-6">Our Story</p>
            <h2 className="heading-section text-charcoal-800 mb-8">
              Jewelry That Tells Your Story
            </h2>
            <div className="divider-gold mb-8" />
            <div className="space-y-5 text-charcoal-500 leading-relaxed">
              <p>
                Velmora was born from a simple belief: luxury should be lived in, not locked away.
                We create demi-fine jewelry that bridges the gap between fine jewelry and fashion
                accessories — pieces that feel special enough for your most important moments, yet
                durable enough for everyday wear.
              </p>
              <p>
                Every piece begins with a sketch inspired by the quiet beauty of everyday life —
                the curve of a petal, the gleam of morning light, the warmth of a golden sunset.
                We use only 18K gold plating over sterling silver, ensuring each creation is
                hypoallergenic, water-resistant, and built to last.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-gold-600 hover:text-gold-700 tracking-wide uppercase transition-colors group"
            >
              Read Our Story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
