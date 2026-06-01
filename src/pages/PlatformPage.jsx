import { useState, useEffect, useRef, useCallback } from 'react';
import { ImageHelper, DataClient } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { PLATFORMS } from '@/lib/platformConfig';
import { Star, Clock, Tag, Flame, ChevronDown } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const dealImgIds = {
  1982: { imgId: 'plat-deal-img-1982-aa1bb2', titleId: 'plat-deal-title-1982' },
  1983: { imgId: 'plat-deal-img-1983-cc3dd4', titleId: 'plat-deal-title-1983' },
  1984: { imgId: 'plat-deal-img-1984-ee5ff6', titleId: 'plat-deal-title-1984' },
  1985: { imgId: 'plat-deal-img-1985-gg7hh8', titleId: 'plat-deal-title-1985' },
  1986: { imgId: 'plat-deal-img-1986-ii9jj0', titleId: 'plat-deal-title-1986' },
  1987: { imgId: 'plat-deal-img-1987-kk1ll2', titleId: 'plat-deal-title-1987' },
  1988: { imgId: 'plat-deal-img-1988-mm3nn4', titleId: 'plat-deal-title-1988' },
  1989: { imgId: 'plat-deal-img-1989-oo5pp6', titleId: 'plat-deal-title-1989' },
  1990: { imgId: 'plat-deal-img-1990-qq7rr8', titleId: 'plat-deal-title-1990' },
  1991: { imgId: 'plat-deal-img-1991-ss9tt0', titleId: 'plat-deal-title-1991' },
};

function getFallbackMeta(id, index) {
  const suffix = ['uu1vv2', 'ww3xx4', 'yy5zz6', 'ab7cd8', 'ef9gh0', 'ij1kl2'][index % 6];
  return { imgId: `plat-deal-img-${id}-${suffix}`, titleId: `plat-deal-title-${id}` };
}

function StarRating({ rating, accentColor }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="w-3 h-3"
          style={{
            color: i <= Math.round(rating) ? '#facc15' : '#444',
            fill: i <= Math.round(rating) ? '#facc15' : 'transparent',
          }}
        />
      ))}
      <span className="text-xs ml-1" style={{ color: accentColor }}>{rating?.toFixed(1)}</span>
    </div>
  );
}

function PlatformHero({ theme, containerRef }) {
  const heroTitleId = `plat-hero-title-${theme.key}`;
  const heroSubId = `plat-hero-sub-${theme.key}`;

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ backgroundColor: theme.heroBg, minHeight: '420px' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        data-strk-bg-id={`plat-hero-bg-${theme.key}-x9y8z7`}
        data-strk-bg={`[${heroSubId}] [${heroTitleId}]`}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${theme.pageBg}ee 0%, ${theme.heroBg}99 50%, ${theme.pageBg}ee 100%)`,
        }}
      />
      {/* Bottom fade into page */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: `linear-gradient(to bottom, transparent, ${theme.pageBg})` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 w-full">
        <div className="max-w-2xl">
          {/* Platform badge */}
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border"
            style={{
              backgroundColor: `${theme.accent}22`,
              borderColor: `${theme.accent}55`,
              color: theme.accent,
            }}
          >
            {theme.name} Store
          </span>

          <h1
            id={heroTitleId}
            className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-4"
            style={{ color: '#ffffff' }}
          >
            {theme.tagline}
          </h1>

          <p
            id={heroSubId}
            className="text-base md:text-lg mb-8 max-w-xl"
            style={{ color: theme.textSecondary }}
          >
            {theme.description}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            {theme.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-black" style={{ color: theme.accent }}>
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wide mt-0.5" style={{ color: theme.textMuted }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformDeals({ theme, deals, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden animate-pulse"
            style={{ backgroundColor: theme.cardBg, border: `1px solid ${theme.cardBorder}` }}
          >
            <div className="h-40" style={{ backgroundColor: theme.cardBorder }} />
            <div className="p-4 space-y-3">
              <div className="h-3 rounded w-1/3" style={{ backgroundColor: theme.cardBorder }} />
              <div className="h-4 rounded w-3/4" style={{ backgroundColor: theme.cardBorder }} />
              <div className="h-3 rounded w-1/2" style={{ backgroundColor: theme.cardBorder }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (deals.length === 0) {
    return (
      <div className="text-center py-20" style={{ color: theme.textMuted }}>
        No deals found for {theme.name} right now. Check back soon!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {deals.map((deal, index) => {
        const d = deal.data ?? {};
        const meta = dealImgIds[deal.id] ?? getFallbackMeta(deal.id, index);
        const savings = (d.original_price ?? 0) - (d.sale_price ?? 0);

        return (
          <div
            key={deal.id}
            className="rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer"
            style={{
              backgroundColor: theme.cardBg,
              border: `1px solid ${theme.cardBorder}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.accent;
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 8px 32px ${theme.accent}22`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = theme.cardBorder;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                alt={d.game_title}
                data-strk-img-id={meta.imgId}
                data-strk-img={`[${meta.titleId}] ${d.genre ?? ''} ${theme.name} game`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundColor: theme.heroBg }}
              />
              {/* Discount badge */}
              <div className="absolute top-2 right-2 bg-green-500 text-white text-sm font-black px-2 py-1 rounded-lg shadow-lg">
                -{d.discount_percent}%
              </div>
              {d.is_free && (
                <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-black px-2 py-1 rounded-lg shadow-lg uppercase tracking-wide">
                  Free!
                </div>
              )}
            </div>

            <div className="p-4">
              {/* Genre */}
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded border"
                  style={{
                    backgroundColor: theme.badgeBg,
                    color: theme.badgeText,
                    borderColor: theme.badgeBorder,
                  }}
                >
                  {theme.name}
                </span>
                {d.genre && (
                  <span className="flex items-center gap-1 text-xs" style={{ color: theme.textMuted }}>
                    <Tag className="w-3 h-3" />{d.genre}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3
                id={meta.titleId}
                className="font-semibold text-sm mb-2 line-clamp-2 transition-colors"
                style={{ color: '#ffffff' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = theme.accent; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#ffffff'; }}
              >
                {d.game_title}
              </h3>

              {/* Rating */}
              {d.rating && (
                <div className="mb-3">
                  <StarRating rating={d.rating} accentColor={theme.textMuted} />
                </div>
              )}

              {/* Price */}
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-xs line-through" style={{ color: theme.textMuted }}>
                    ${d.original_price?.toFixed(2)}
                  </div>
                  <div className={`text-lg font-black ${d.is_free ? 'text-yellow-400' : 'text-green-400'}`}>
                    {d.is_free ? 'FREE' : `$${d.sale_price?.toFixed(2)}`}
                  </div>
                  {!d.is_free && savings > 0 && (
                    <div className="text-green-500 text-xs font-medium">Save ${savings.toFixed(2)}</div>
                  )}
                </div>
                {d.sale_end_date && (
                  <div className="flex items-center gap-1 text-xs" style={{ color: theme.textMuted }}>
                    <Clock className="w-3 h-3" />
                    <span>Ends {d.sale_end_date}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function PlatformPage({ platformKey }) {
  const theme = PLATFORMS[platformKey];
  const containerRef = useRef(null);
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDeals = useCallback(async () => {
    setLoading(true);
    const { data: response } = await client
      .from('Game Deals')
      .select('*')
      .order('discount_percent', { ascending: false })
      .limit(20);
    const all = response?.data?.list ?? [];
    setDeals(all.filter((d) => d.data?.platform === platformKey));
    setLoading(false);
  }, [platformKey]);

  useEffect(() => { fetchDeals(); }, [fetchDeals]);

  useEffect(() => {
    if (!loading) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading]);

  if (!theme) return null;

  return (
    <div ref={containerRef} style={{ backgroundColor: theme.pageBg, minHeight: '100vh' }}>
      <PlatformHero theme={theme} />

      {/* Deals section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: theme.accent }}>
              Current Deals
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Best {theme.name} Discounts Right Now
          </h2>
          <p className="mb-8" style={{ color: theme.textMuted }}>
            Hand-picked deals updated daily from the {theme.name} store.
          </p>

          <PlatformDeals theme={theme} deals={deals} loading={loading} />
        </div>
      </section>
    </div>
  );
}
