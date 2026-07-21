import { Link } from 'react-router-dom';
import FadeIn from '@/components/FadeIn';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          <FadeIn>
            <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=900&h=1100&fit=crop"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="md:py-8">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-brand-700 mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                Designed with Intention. Worn with Confidence.
              </h2>
              <div className="mt-6 space-y-4 text-sm text-ink-600 leading-relaxed">
                <p>
                  Velmora was born from a simple belief: fine jewelry should feel accessible, not aspirational. We design demi-fine pieces in small batches, using 18K gold plating and ethically sourced materials.
                </p>
                <p>
                  Each collection is inspired by the quiet beauty of everyday moments — morning light, handwritten letters, the comfort of a well-worn silhouette. Our pieces are made to layer, to live in, and to pass on.
                </p>
              </div>
              <Link
                to="/"
                className="inline-block mt-8 text-xs font-semibold tracking-[0.2em] uppercase text-ink-950 border-b border-ink-950 pb-1 hover:text-brand-700 hover:border-brand-700 transition-colors"
              >
                Read Our Story
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
