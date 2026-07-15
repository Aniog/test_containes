import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useImageLoader } from '@/hooks/useImageLoader';

export function BrandStory() {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="bg-blush">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            className="aspect-[4/5] w-full bg-ink/10 lg:aspect-auto lg:min-h-[600px]"
            data-strk-bg-id="story-bg-velmora"
            data-strk-bg="[story-title] [story-body] velmora jewelry studio"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="900"
          />
          <div className="flex items-center px-6 py-16 sm:px-12 lg:px-16">
            <div className="max-w-md">
              <p className="mb-3 text-xs uppercase tracking-widest text-warmGray">Our Philosophy</p>
              <h2 id="story-title" className="heading-lg mb-6">Designed for Modern Heirlooms</h2>
              <p id="story-body" className="mb-6 leading-relaxed text-warmGray">
                Velmora was born from a simple belief: jewelry should feel special every single day. We craft demi-fine pieces in small batches, using 18K gold plating and responsibly sourced materials — so you can shine without the markup.
              </p>
              <p className="mb-8 leading-relaxed text-warmGray">
                Each design balances quiet elegance with wearable comfort, made for the moments you want to remember.
              </p>
              <Link to="/about" className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest hover:text-goldDark transition-colors">
                Our Story
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
