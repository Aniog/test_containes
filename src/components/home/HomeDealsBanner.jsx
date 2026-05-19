import { Link } from 'react-router-dom';
import { Clock, Zap, ArrowRight } from 'lucide-react';
import { deals } from '../../data/mockData';
import PlatformBadge from '../ui/PlatformBadge';
import SectionHeader from '../ui/SectionHeader';

const HotDealCard = ({ deal }) => (
  <div className="group flex items-center gap-4 bg-surface-card border border-surface-border rounded-xl p-4 hover:border-brand/40 hover:shadow-glow-sm transition-all duration-300">
    {/* Discount badge */}
    <div className="flex-shrink-0 w-16 h-16 bg-surface-elevated rounded-xl flex flex-col items-center justify-center border border-surface-border">
      {deal.isFree ? (
        <span className="text-deal font-black text-sm">FREE</span>
      ) : (
        <>
          <span className="text-deal font-black text-lg leading-none">-{deal.discount}%</span>
          <span className="text-text-muted text-xs">OFF</span>
        </>
      )}
    </div>

    {/* Info */}
    <div className="flex-1 min-w-0">
      <h4 className="text-text-primary font-semibold text-sm leading-tight truncate group-hover:text-brand-light transition-colors">
        {deal.title}
      </h4>
      <div className="flex items-center gap-2 mt-1">
        <PlatformBadge platform={deal.platform} />
        <span className="flex items-center gap-1 text-text-muted text-xs">
          <Clock className="w-3 h-3" />
          {deal.endsIn}
        </span>
      </div>
    </div>

    {/* Price */}
    <div className="flex-shrink-0 text-right">
      {deal.isFree ? (
        <span className="text-deal font-black text-base">Free</span>
      ) : (
        <>
          <div className="text-text-primary font-black text-base">${deal.salePrice.toFixed(2)}</div>
          <div className="text-text-muted text-xs line-through">${deal.originalPrice.toFixed(2)}</div>
        </>
      )}
    </div>
  </div>
);

const HomeDealsBanner = () => (
  <section className="bg-surface-card border-y border-surface-border py-12">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SectionHeader
        title="Hot Deals Right Now"
        subtitle="Limited time offers across all platforms"
        action={
          <Link to="/deals" className="flex items-center gap-1.5 bg-brand-gradient text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            <Zap className="w-4 h-4" />
            All Deals
          </Link>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {deals.slice(0, 6).map((deal) => (
          <HotDealCard key={deal.id} deal={deal} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          to="/deals"
          className="inline-flex items-center gap-2 text-brand-light hover:text-brand font-medium text-sm transition-colors"
        >
          See all {deals.length} deals <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default HomeDealsBanner;
