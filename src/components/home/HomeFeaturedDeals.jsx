import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { PLATFORMS } from '../../lib/data';

const PlatformBadge = ({ platform }) => {
  const p = PLATFORMS[platform];
  if (!p) return null;
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full border ${p.color} ${p.textColor} ${p.borderColor}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
      {p.name}
    </span>
  );
};

const DealCard = ({ deal, onAddToCart }) => {
  return (
    <div className="bg-[#1a1a24] border border-[#2d2d3d] rounded-xl overflow-hidden hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 group flex flex-col">
      {/* Image placeholder */}
      <div className="relative h-40 bg-gradient-to-br from-[#22222f] to-[#1a1a24] flex items-center justify-center overflow-hidden">
        <div className="text-4xl opacity-20 group-hover:opacity-30 transition-opacity">🎮</div>
        {/* Discount badge */}
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          -{deal.discount}%
        </div>
        <div className="absolute top-3 right-3">
          <PlatformBadge platform={deal.platform} />
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-slate-100 font-semibold text-sm leading-tight line-clamp-2">{deal.title}</h3>
        </div>

        <div className="flex items-center gap-1 mb-3">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-xs text-slate-400">{deal.rating}</span>
          <span className="text-xs text-slate-600 ml-1">• {deal.genre}</span>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-slate-500 text-xs line-through">${deal.originalPrice}</span>
            <div className="text-cyan-400 font-bold text-lg">${deal.salePrice}</div>
          </div>
          <button
            onClick={() => onAddToCart && onAddToCart(deal)}
            className="flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const HomeFeaturedDeals = ({ deals, onAddToCart }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-100 tracking-tight">🔥 Hot Deals</h2>
          <p className="text-slate-400 text-sm mt-1">Best discounts across all platforms right now</p>
        </div>
        <Link to="/deals" className="text-violet-400 hover:text-violet-300 text-sm font-semibold flex items-center gap-1 transition-colors">
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
};

export default HomeFeaturedDeals;
