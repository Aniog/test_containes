import { useState } from 'react';

export default function ImageGallery({ productId, selectedVariant }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="aspect-[3/4] bg-sand/20 overflow-hidden">
        {productId === 'vivid-aura-jewels' && (
          <img data-strk-img-id="pdp-main-vivid-aura-jewels" data-strk-img={`[pdp-name-vivid-aura-jewels] ${selectedVariant} tone gold jewelry`} data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Vivid Aura Jewels" className="w-full h-full object-cover" />
        )}
        {productId === 'majestic-flora-nectar' && (
          <img data-strk-img-id="pdp-main-majestic-flora-nectar" data-strk-img={`[pdp-name-majestic-flora-nectar] ${selectedVariant} tone gold jewelry`} data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Majestic Flora Nectar" className="w-full h-full object-cover" />
        )}
        {productId === 'golden-sphere-huggies' && (
          <img data-strk-img-id="pdp-main-golden-sphere-huggies" data-strk-img={`[pdp-name-golden-sphere-huggies] ${selectedVariant} tone gold jewelry`} data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Golden Sphere Huggies" className="w-full h-full object-cover" />
        )}
        {productId === 'amber-lace-earrings' && (
          <img data-strk-img-id="pdp-main-amber-lace-earrings" data-strk-img={`[pdp-name-amber-lace-earrings] ${selectedVariant} tone gold jewelry`} data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Amber Lace Earrings" className="w-full h-full object-cover" />
        )}
        {productId === 'royal-heirloom-set' && (
          <img data-strk-img-id="pdp-main-royal-heirloom-set" data-strk-img={`[pdp-name-royal-heirloom-set] ${selectedVariant} tone gold jewelry`} data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Royal Heirloom Set" className="w-full h-full object-cover" />
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {/* vivid-aura-jewels thumbs */}
        {productId === 'vivid-aura-jewels' && (
          <>
            <button onClick={() => setActiveIndex(0)} className={`w-16 h-20 bg-sand/20 flex-shrink-0 overflow-hidden transition-all ${0 === activeIndex ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'}`}>
              <img data-strk-img-id="pdp-thumb-vivid-1" data-strk-img="[pdp-name-vivid-aura-jewels] gold jewelry" data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Vivid Aura Jewels gold" className="w-full h-full object-cover" />
            </button>
            <button onClick={() => setActiveIndex(1)} className={`w-16 h-20 bg-sand/20 flex-shrink-0 overflow-hidden transition-all ${1 === activeIndex ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'}`}>
              <img data-strk-img-id="pdp-thumb-vivid-2" data-strk-img="[pdp-name-vivid-aura-jewels] gold jewelry" data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Vivid Aura Jewels gold" className="w-full h-full object-cover" />
            </button>
            <button onClick={() => setActiveIndex(2)} className={`w-16 h-20 bg-sand/20 flex-shrink-0 overflow-hidden transition-all ${2 === activeIndex ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'}`}>
              <img data-strk-img-id="pdp-thumb-vivid-3" data-strk-img="[pdp-name-vivid-aura-jewels] silver jewelry" data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Vivid Aura Jewels silver" className="w-full h-full object-cover" />
            </button>
          </>
        )}
        {productId === 'majestic-flora-nectar' && (
          <>
            <button onClick={() => setActiveIndex(0)} className={`w-16 h-20 bg-sand/20 flex-shrink-0 overflow-hidden transition-all ${0 === activeIndex ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'}`}>
              <img data-strk-img-id="pdp-thumb-flora-1" data-strk-img="[pdp-name-majestic-flora-nectar] gold jewelry" data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Majestic Flora Nectar gold" className="w-full h-full object-cover" />
            </button>
            <button onClick={() => setActiveIndex(1)} className={`w-16 h-20 bg-sand/20 flex-shrink-0 overflow-hidden transition-all ${1 === activeIndex ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'}`}>
              <img data-strk-img-id="pdp-thumb-flora-2" data-strk-img="[pdp-name-majestic-flora-nectar] gold jewelry" data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Majestic Flora Nectar gold" className="w-full h-full object-cover" />
            </button>
            <button onClick={() => setActiveIndex(2)} className={`w-16 h-20 bg-sand/20 flex-shrink-0 overflow-hidden transition-all ${2 === activeIndex ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'}`}>
              <img data-strk-img-id="pdp-thumb-flora-3" data-strk-img="[pdp-name-majestic-flora-nectar] silver jewelry" data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Majestic Flora Nectar silver" className="w-full h-full object-cover" />
            </button>
          </>
        )}
        {productId === 'golden-sphere-huggies' && (
          <>
            <button onClick={() => setActiveIndex(0)} className={`w-16 h-20 bg-sand/20 flex-shrink-0 overflow-hidden transition-all ${0 === activeIndex ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'}`}>
              <img data-strk-img-id="pdp-thumb-sphere-1" data-strk-img="[pdp-name-golden-sphere-huggies] gold jewelry" data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Golden Sphere Huggies gold" className="w-full h-full object-cover" />
            </button>
            <button onClick={() => setActiveIndex(1)} className={`w-16 h-20 bg-sand/20 flex-shrink-0 overflow-hidden transition-all ${1 === activeIndex ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'}`}>
              <img data-strk-img-id="pdp-thumb-sphere-2" data-strk-img="[pdp-name-golden-sphere-huggies] gold jewelry" data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Golden Sphere Huggies gold" className="w-full h-full object-cover" />
            </button>
            <button onClick={() => setActiveIndex(2)} className={`w-16 h-20 bg-sand/20 flex-shrink-0 overflow-hidden transition-all ${2 === activeIndex ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'}`}>
              <img data-strk-img-id="pdp-thumb-sphere-3" data-strk-img="[pdp-name-golden-sphere-huggies] silver jewelry" data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Golden Sphere Huggies silver" className="w-full h-full object-cover" />
            </button>
          </>
        )}
        {productId === 'amber-lace-earrings' && (
          <>
            <button onClick={() => setActiveIndex(0)} className={`w-16 h-20 bg-sand/20 flex-shrink-0 overflow-hidden transition-all ${0 === activeIndex ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'}`}>
              <img data-strk-img-id="pdp-thumb-amber-1" data-strk-img="[pdp-name-amber-lace-earrings] gold jewelry" data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Amber Lace Earrings gold" className="w-full h-full object-cover" />
            </button>
            <button onClick={() => setActiveIndex(1)} className={`w-16 h-20 bg-sand/20 flex-shrink-0 overflow-hidden transition-all ${1 === activeIndex ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'}`}>
              <img data-strk-img-id="pdp-thumb-amber-2" data-strk-img="[pdp-name-amber-lace-earrings] gold jewelry" data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Amber Lace Earrings gold" className="w-full h-full object-cover" />
            </button>
            <button onClick={() => setActiveIndex(2)} className={`w-16 h-20 bg-sand/20 flex-shrink-0 overflow-hidden transition-all ${2 === activeIndex ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'}`}>
              <img data-strk-img-id="pdp-thumb-amber-3" data-strk-img="[pdp-name-amber-lace-earrings] silver jewelry" data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Amber Lace Earrings silver" className="w-full h-full object-cover" />
            </button>
          </>
        )}
        {productId === 'royal-heirloom-set' && (
          <>
            <button onClick={() => setActiveIndex(0)} className={`w-16 h-20 bg-sand/20 flex-shrink-0 overflow-hidden transition-all ${0 === activeIndex ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'}`}>
              <img data-strk-img-id="pdp-thumb-heirloom-1" data-strk-img="[pdp-name-royal-heirloom-set] gold jewelry" data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Royal Heirloom Set gold" className="w-full h-full object-cover" />
            </button>
            <button onClick={() => setActiveIndex(1)} className={`w-16 h-20 bg-sand/20 flex-shrink-0 overflow-hidden transition-all ${1 === activeIndex ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'}`}>
              <img data-strk-img-id="pdp-thumb-heirloom-2" data-strk-img="[pdp-name-royal-heirloom-set] gold jewelry" data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Royal Heirloom Set gold" className="w-full h-full object-cover" />
            </button>
            <button onClick={() => setActiveIndex(2)} className={`w-16 h-20 bg-sand/20 flex-shrink-0 overflow-hidden transition-all ${2 === activeIndex ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'}`}>
              <img data-strk-img-id="pdp-thumb-heirloom-3" data-strk-img="[pdp-name-royal-heirloom-set] silver jewelry" data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" alt="Royal Heirloom Set silver" className="w-full h-full object-cover" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
