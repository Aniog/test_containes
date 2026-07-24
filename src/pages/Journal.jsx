import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Journal() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="mx-auto max-w-3xl px-6 py-24 md:px-8 md:py-32">
      <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
        Journal
      </p>
      <h1 className="font-serif text-4xl text-base md:text-5xl">
        From the Studio
      </h1>
      <div className="mt-12 space-y-12">
        {[1, 2, 3].map((i) => (
          <article key={i} className="group cursor-pointer">
            <div className="aspect-[16/9] overflow-hidden bg-canvas">
              <img
                data-strk-img-id={`journal-${i}`}
                data-strk-img={`[journal-title-${i}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Journal post"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <p className="text-xs text-muted uppercase tracking-widest">
                {['Style Guide', 'Care Tips', 'Behind the Scenes'][i - 1]}
              </p>
              <h2
                id={`journal-title-${i}`}
                className="mt-1 font-serif text-xl text-base transition-colors group-hover:text-accent"
              >
                {
                  [
                    'How to Layer Necklaces Without the Tangle',
                    'The Complete Guide to Caring for Gold-Plated Jewelry',
                    'Meet the Artisans Behind Velmora',
                  ][i - 1]
                }
              </h2>
              <p className="mt-2 text-sm text-muted">
                {
                  [
                    'Master the art of effortless layering with these simple tips from our stylists.',
                    'Extend the life of your favorite pieces with our expert care recommendations.',
                    'A look inside our New York studio and the hands that finish every piece.',
                  ][i - 1]
                }
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
