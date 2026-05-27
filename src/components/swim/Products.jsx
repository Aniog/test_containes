import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star } from 'lucide-react';

const products = [
  {
    id: 'prod-1',
    titleId: 'prod-title-1',
    descId: 'prod-desc-1',
    imgId: 'prod-img-a4f7e2',
    badge: 'Best Seller',
    title: 'Racing Goggles Pro',
    desc: 'Crystal-clear UV-protected lenses with anti-fog coating. Hydrodynamic seal for zero water leakage.',
    price: '$49.99',
    rating: 5,
    category: 'Goggles',
  },
  {
    id: 'prod-2',
    titleId: 'prod-title-2',
    descId: 'prod-desc-2',
    imgId: 'prod-img-b8c3d1',
    badge: 'New',
    title: 'Silicone Swim Cap',
    desc: 'Durable, wrinkle-free silicone cap that reduces drag and protects hair from chlorine damage.',
    price: '$19.99',
    rating: 4,
    category: 'Caps',
  },
  {
    id: 'prod-3',
    titleId: 'prod-title-3',
    descId: 'prod-desc-3',
    imgId: 'prod-img-c2e9f5',
    badge: 'Popular',
    title: 'Training Fins',
    desc: 'Short-blade training fins for building ankle flexibility and improving kick technique.',
    price: '$34.99',
    rating: 5,
    category: 'Training',
  },
  {
    id: 'prod-4',
    titleId: 'prod-title-4',
    descId: 'prod-desc-4',
    imgId: 'prod-img-d6a1b8',
    badge: 'Pro',
    title: 'Pull Buoy',
    desc: 'Figure-eight foam pull buoy for upper body isolation drills. Comfortable and buoyant.',
    price: '$14.99',
    rating: 4,
    category: 'Training',
  },
  {
    id: 'prod-5',
    titleId: 'prod-title-5',
    descId: 'prod-desc-5',
    imgId: 'prod-img-e3c7d4',
    badge: 'Sale',
    title: 'Kickboard',
    desc: 'Lightweight EVA foam kickboard for leg-focused drills. Ergonomic grip for comfort.',
    price: '$12.99',
    rating: 4,
    category: 'Training',
  },
  {
    id: 'prod-6',
    titleId: 'prod-title-6',
    descId: 'prod-desc-6',
    imgId: 'prod-img-f9b2e6',
    badge: 'Elite',
    title: 'Swim Paddles',
    desc: 'Hand paddles for resistance training. Builds upper body strength and improves stroke mechanics.',
    price: '$24.99',
    rating: 5,
    category: 'Training',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= count ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`}
        />
      ))}
    </div>
  );
}

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" className="bg-sky-50 py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Our Collection
          </span>
          <h2 id="products-heading" className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
            Top Swimming Equipment
          </h2>
          <p id="products-subheading" className="text-slate-600 max-w-xl mx-auto">
            Everything you need to train harder, swim faster, and perform at your best in the water.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-sky-100 flex flex-col"
            >
              <div className="relative h-52 bg-sky-100 overflow-hidden">
                <img
                  alt={p.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}] [products-subheading] [products-heading]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span className="absolute top-3 left-3 bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {p.badge}
                </span>
                <span className="absolute top-3 right-3 bg-white/80 text-sky-700 text-xs font-semibold px-2 py-1 rounded-full">
                  {p.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 id={p.titleId} className="text-xl font-semibold text-sky-900 mb-2">
                  {p.title}
                </h3>
                <p id={p.descId} className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                  {p.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <StarRating count={p.rating} />
                  </div>
                  <span className="text-sky-700 font-bold text-lg">{p.price}</span>
                </div>
                <button className="mt-4 w-full bg-sky-700 hover:bg-sky-800 text-white rounded-full py-2.5 font-semibold text-sm transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
