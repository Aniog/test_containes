import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, Filter, Tag } from 'lucide-react';

const allProducts = [
  { id: 'p1', imgId: 'pp-img-a1b2', titleId: 'pp-t1', descId: 'pp-d1', badge: 'Best Seller', title: 'Racing Goggles Pro', desc: 'Crystal-clear UV-protected lenses with anti-fog coating. Hydrodynamic seal for zero water leakage.', price: '$49.99', rating: 5, category: 'Goggles' },
  { id: 'p2', imgId: 'pp-img-c3d4', titleId: 'pp-t2', descId: 'pp-d2', badge: 'New', title: 'Silicone Swim Cap', desc: 'Durable, wrinkle-free silicone cap that reduces drag and protects hair from chlorine damage.', price: '$19.99', rating: 4, category: 'Caps' },
  { id: 'p3', imgId: 'pp-img-e5f6', titleId: 'pp-t3', descId: 'pp-d3', badge: 'Popular', title: 'Training Fins', desc: 'Short-blade training fins for building ankle flexibility and improving kick technique.', price: '$34.99', rating: 5, category: 'Training' },
  { id: 'p4', imgId: 'pp-img-g7h8', titleId: 'pp-t4', descId: 'pp-d4', badge: 'Pro', title: 'Pull Buoy', desc: 'Figure-eight foam pull buoy for upper body isolation drills. Comfortable and buoyant.', price: '$14.99', rating: 4, category: 'Training' },
  { id: 'p5', imgId: 'pp-img-i9j0', titleId: 'pp-t5', descId: 'pp-d5', badge: 'Sale', title: 'Kickboard', desc: 'Lightweight EVA foam kickboard for leg-focused drills. Ergonomic grip for comfort.', price: '$12.99', rating: 4, category: 'Training' },
  { id: 'p6', imgId: 'pp-img-k1l2', titleId: 'pp-t6', descId: 'pp-d6', badge: 'Elite', title: 'Swim Paddles', desc: 'Hand paddles for resistance training. Builds upper body strength and improves stroke mechanics.', price: '$24.99', rating: 5, category: 'Training' },
  { id: 'p7', imgId: 'pp-img-m3n4', titleId: 'pp-t7', descId: 'pp-d7', badge: 'New', title: 'Competition Swimsuit', desc: 'Chlorine-resistant, compression-fit swimsuit designed for competitive racing performance.', price: '$89.99', rating: 5, category: 'Swimwear' },
  { id: 'p8', imgId: 'pp-img-o5p6', titleId: 'pp-t8', descId: 'pp-d8', badge: 'Popular', title: 'Swim Snorkel', desc: 'Center-mount snorkel for focused stroke technique training without turning to breathe.', price: '$29.99', rating: 4, category: 'Training' },
  { id: 'p9', imgId: 'pp-img-q7r8', titleId: 'pp-t9', descId: 'pp-d9', badge: 'Pro', title: 'Waterproof Ear Plugs', desc: 'Soft silicone ear plugs that seal out water while remaining comfortable during long sessions.', price: '$9.99', rating: 4, category: 'Accessories' },
  { id: 'p10', imgId: 'pp-img-s9t0', titleId: 'pp-t10', descId: 'pp-d10', badge: 'Best Seller', title: 'Mesh Equipment Bag', desc: 'Large-capacity mesh bag for carrying all your swim gear. Quick-dry material with shoulder strap.', price: '$22.99', rating: 5, category: 'Accessories' },
  { id: 'p11', imgId: 'pp-img-u1v2', titleId: 'pp-t11', descId: 'pp-d11', badge: 'Sale', title: 'Nose Clip', desc: 'Adjustable stainless steel nose clip for backstroke and flip turn practice.', price: '$6.99', rating: 4, category: 'Accessories' },
  { id: 'p12', imgId: 'pp-img-w3x4', titleId: 'pp-t12', descId: 'pp-d12', badge: 'New', title: 'Triathlon Wetsuit', desc: 'Full-body open-water wetsuit with buoyancy panels and flexible shoulder design.', price: '$199.99', rating: 5, category: 'Swimwear' },
];

const categories = ['All', 'Goggles', 'Caps', 'Training', 'Swimwear', 'Accessories'];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`w-4 h-4 ${i <= count ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`} />
      ))}
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-sky-900 via-sky-800 to-cyan-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="inline-block bg-cyan-400/20 text-cyan-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-400/30">
            Our Collection
          </span>
          <h1 id="products-page-title" className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Swimming Equipment
          </h1>
          <p id="products-page-sub" className="text-sky-100 text-lg max-w-xl mx-auto">
            Professional gear for every swimmer — from first-time beginners to elite competitors.
          </p>
        </div>
      </section>

      {/* Sale Banner */}
      <div className="bg-cyan-500 py-3 px-4 text-center">
        <p className="text-white font-semibold text-sm flex items-center justify-center gap-2">
          <Tag className="w-4 h-4" />
          Summer Sale — Free shipping on all orders over $50. Use code <span className="bg-white text-cyan-700 px-2 py-0.5 rounded font-bold ml-1">SWIM50</span>
        </p>
      </div>

      {/* Filter + Grid */}
      <section className="bg-sky-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Category Filter */}
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-500 text-sm font-medium mr-1">
              <Filter className="w-4 h-4" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition ${
                  activeCategory === cat
                    ? 'bg-sky-700 text-white border-sky-700'
                    : 'bg-white text-slate-600 border-sky-200 hover:border-sky-400 hover:text-sky-700'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-slate-400 text-sm">{filtered.length} products</span>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-sky-100 flex flex-col">
                <div className="relative h-48 bg-sky-100 overflow-hidden">
                  <img
                    alt={p.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.descId}] [${p.titleId}] [products-page-sub] [products-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <span className="absolute top-3 left-3 bg-cyan-100 text-cyan-700 text-xs font-semibold px-2.5 py-1 rounded-full">{p.badge}</span>
                  <span className="absolute top-3 right-3 bg-white/80 text-sky-700 text-xs font-semibold px-2 py-1 rounded-full">{p.category}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 id={p.titleId} className="text-base font-semibold text-sky-900 mb-1.5">{p.title}</h3>
                  <p id={p.descId} className="text-slate-500 text-xs leading-relaxed mb-3 flex-1">{p.desc}</p>
                  <div className="flex items-center justify-between mb-3">
                    <StarRating count={p.rating} />
                    <span className="text-sky-700 font-bold">{p.price}</span>
                  </div>
                  <button className="w-full bg-sky-700 hover:bg-sky-800 text-white rounded-full py-2 font-semibold text-sm transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Choosing Section */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-sky-50 rounded-3xl p-8 md:p-12 border border-sky-100 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Expert Guidance
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-3">
                Not Sure What You Need?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our team of experienced swimmers and coaches can help you choose the right equipment for your level, goals, and budget. Whether you're just starting out or training for competition, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex bg-sky-700 hover:bg-sky-800 text-white rounded-full px-6 py-2.5 font-semibold text-sm transition"
                >
                  Talk to an Expert
                </Link>
                <Link
                  to="/about"
                  className="inline-flex border-2 border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white rounded-full px-6 py-2.5 font-semibold text-sm transition"
                >
                  Our Story
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 shrink-0">
              {[
                { label: 'Beginner Kits', desc: 'Everything to get started' },
                { label: 'Training Bundles', desc: 'Level up your sessions' },
                { label: 'Race Day Gear', desc: 'Compete at your best' },
                { label: 'Open Water', desc: 'For lake & ocean swimmers' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-4 border border-sky-100 shadow-sm text-center">
                  <div className="text-sky-700 font-semibold text-sm mb-1">{item.label}</div>
                  <div className="text-slate-400 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
