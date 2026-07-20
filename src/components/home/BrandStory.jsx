import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
            <img
              data-strk-img-id="brand-story-img-9f8e7d"
              data-strk-img="[brand-story-title] [brand-story-desc]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src={placeholder}
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-14 md:px-16 md:py-20">
            <p className="text-xs uppercase tracking-brand text-accent">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl"
            >
              Jewelry Made to Live In
            </h2>
            <p
              id="brand-story-desc"
              className="mt-6 leading-relaxed text-muted"
            >
              Velmora was born from a love of quiet elegance — pieces that feel
              special enough for celebrations, yet refined enough for everyday
              moments. Each design is crafted in small batches using 18k
              gold-plated brass, ethically sourced crystals, and a focus on
              longevity.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              We believe luxury should be accessible, personal, and made to be
              treasured for years to come.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-brand text-foreground hover:text-accent transition-colors"
            >
              Read Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
