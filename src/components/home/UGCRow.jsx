import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";
const IMG_CLS = 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105';
const ARTICLE_CLS = 'relative flex-shrink-0 w-44 md:w-52 snap-start overflow-hidden group cursor-pointer';

function UGCCaption({ caption, handle }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-3">
      <p className="font-cormorant text-sm italic text-ivory leading-snug">"{caption}"</p>
      <p className="font-inter text-[10px] text-ivory/60 mt-1">{handle}</p>
    </div>
  );
}

const GRAD = 'absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">As Worn By You</p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal">The Velmora Edit</h2>
      </div>

      <div className="flex gap-3 overflow-x-auto px-6 lg:px-12 pb-4 snap-x snap-mandatory scrollbar-hide">
        <article className={ARTICLE_CLS} style={{ aspectRatio: '9/16' }}>
          <img data-strk-img-id="ugc-reel-1-a1b2c3" data-strk-img="woman wearing gold earrings portrait close up warm light lifestyle" data-strk-img-ratio="9x16" data-strk-img-width="400" src={PLACEHOLDER} alt="Golden hour, golden ears" className={IMG_CLS} />
          <div className={GRAD} />
          <UGCCaption caption="Golden hour, golden ears" handle="@sofia.m" />
        </article>

        <article className={ARTICLE_CLS} style={{ aspectRatio: '9/16' }}>
          <img data-strk-img-id="ugc-reel-2-d4e5f6" data-strk-img="woman wearing gold jewelry stacked earrings necklace everyday lifestyle" data-strk-img-ratio="9x16" data-strk-img-width="400" src={PLACEHOLDER} alt="My everyday stack" className={IMG_CLS} />
          <div className={GRAD} />
          <UGCCaption caption="My everyday stack" handle="@priya.k" />
        </article>

        <article className={ARTICLE_CLS} style={{ aspectRatio: '9/16' }}>
          <img data-strk-img-id="ugc-reel-3-g7h8i9" data-strk-img="woman wearing gold necklace pendant collarbone close up portrait" data-strk-img-ratio="9x16" data-strk-img-width="400" src={PLACEHOLDER} alt="The necklace I never take off" className={IMG_CLS} />
          <div className={GRAD} />
          <UGCCaption caption="The necklace I never take off" handle="@claire.b" />
        </article>

        <article className={ARTICLE_CLS} style={{ aspectRatio: '9/16' }}>
          <img data-strk-img-id="ugc-reel-4-j1k2l3" data-strk-img="woman wearing demi-fine gold jewelry gift self purchase portrait" data-strk-img-ratio="9x16" data-strk-img-width="400" src={PLACEHOLDER} alt="Gifted myself, no regrets" className={IMG_CLS} />
          <div className={GRAD} />
          <UGCCaption caption="Gifted myself, no regrets" handle="@maya.r" />
        </article>

        <article className={ARTICLE_CLS} style={{ aspectRatio: '9/16' }}>
          <img data-strk-img-id="ugc-reel-5-m4n5o6" data-strk-img="woman wearing gold jewelry earrings brunch casual lifestyle portrait" data-strk-img-ratio="9x16" data-strk-img-width="400" src={PLACEHOLDER} alt="Brunch-ready jewels" className={IMG_CLS} />
          <div className={GRAD} />
          <UGCCaption caption="Brunch-ready jewels" handle="@anna.v" />
        </article>

        <article className={ARTICLE_CLS} style={{ aspectRatio: '9/16' }}>
          <img data-strk-img-id="ugc-reel-6-p7q8r9" data-strk-img="woman wearing stacked gold huggie earrings ear close up jewelry" data-strk-img-ratio="9x16" data-strk-img-width="400" src={PLACEHOLDER} alt="Stacking season" className={IMG_CLS} />
          <div className={GRAD} />
          <UGCCaption caption="Stacking season" handle="@leila.s" />
        </article>
      </div>
    </section>
  );
}
