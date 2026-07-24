import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-canvas py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-base md:aspect-[3/4]">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-body]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl leading-snug text-base md:text-4xl"
            >
              Designed for the Modern Woman
            </h2>
            <p
              id="brand-story-body"
              className="mt-5 text-sm leading-relaxed text-muted md:text-base"
            >
              Velmora was born from a belief that fine jewelry should feel accessible without sacrificing quality or conscience. Each piece is hand-finished in 18K gold plate, nickel-free and hypoallergenic, so you can wear beauty without compromise. We design for the quiet moments of confidence — the meeting, the dinner, the morning coffee when you catch your reflection and smile.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-widest text-base underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
