import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";
const IMG_CLS = 'absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105';
const OVERLAY_CLS = 'absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500';
const TILE_CLS = 'group relative overflow-hidden aspect-[3/4] md:aspect-[4/5] bg-cream block';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-ivory py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12 text-center">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">Browse</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Earrings */}
          <Link to="/shop?category=earrings" className={TILE_CLS}>
            <img
              data-strk-img-id="cat-earrings-bg-e1f2g3"
              data-strk-img="gold earrings demi-fine woman wearing studs drops ear cuffs jewelry"
              data-strk-img-ratio="3x4" data-strk-img-width="700"
              src={PLACEHOLDER} alt="Earrings" className={IMG_CLS}
            />
            <div className={OVERLAY_CLS} />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
              <p className="font-cormorant text-3xl md:text-4xl font-light text-ivory tracking-wide">Earrings</p>
              <p className="font-inter text-[10px] tracking-widest uppercase text-ivory/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Studs, drops &amp; ear cuffs</p>
              <div className="mt-4 w-8 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>

          {/* Necklaces */}
          <Link to="/shop?category=necklaces" className={TILE_CLS}>
            <img
              data-strk-img-id="cat-necklaces-bg-h4i5j6"
              data-strk-img="gold necklace pendant demi-fine woman wearing chain jewelry collarbone"
              data-strk-img-ratio="3x4" data-strk-img-width="700"
              src={PLACEHOLDER} alt="Necklaces" className={IMG_CLS}
            />
            <div className={OVERLAY_CLS} />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
              <p className="font-cormorant text-3xl md:text-4xl font-light text-ivory tracking-wide">Necklaces</p>
              <p className="font-inter text-[10px] tracking-widest uppercase text-ivory/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Pendants &amp; chains</p>
              <div className="mt-4 w-8 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>

          {/* Huggies */}
          <Link to="/shop?category=huggies" className={TILE_CLS}>
            <img
              data-strk-img-id="cat-huggies-bg-k7l8m9"
              data-strk-img="gold huggie earrings demi-fine woman wearing dome textured hoop jewelry"
              data-strk-img-ratio="3x4" data-strk-img-width="700"
              src={PLACEHOLDER} alt="Huggies" className={IMG_CLS}
            />
            <div className={OVERLAY_CLS} />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
              <p className="font-cormorant text-3xl md:text-4xl font-light text-ivory tracking-wide">Huggies</p>
              <p className="font-inter text-[10px] tracking-widest uppercase text-ivory/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Dome &amp; textured huggies</p>
              <div className="mt-4 w-8 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
