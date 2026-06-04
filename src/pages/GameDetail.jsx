import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { PLATFORMS } from '@/lib/platformConfig';
import { slugify } from '@/lib/utils';
import { ArrowLeft, Star, Clock, Tag, ShoppingCart, Percent } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

function StarRating({ rating, accent }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="w-5 h-5"
          style={{
            color: i <= Math.round(rating) ? '#facc15' : '#444',
            fill: i <= Math.round(rating) ? '#facc15' : 'transparent',
          }}
        />
      ))}
      <span className="text-sm font-semibold ml-1" style={{ color: accent }}>
        {rating?.toFixed(1)} / 5
      </span>
    </div>
  );
}

export default function GameDetail({ platformKey }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const theme = PLATFORMS[platformKey];

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchGame() {
      setLoading(true);
      const { data: response } = await client
        .from('Game Deals')
        .select('*')
        .limit(100);

      const all = response?.data?.list ?? [];
      const match = all.find(
        (item) =>
          item.data?.platform === platformKey &&
          slugify(item.data?.game_title) === slug
      );

      if (!match) {
        setNotFound(true);
      } else {
        setGame(match);
      }
      setLoading(false);
    }
    fetchGame();
  }, [platformKey, slug]);

  useEffect(() => {
    if (!loading && game) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, game]);

  if (!theme) return null;

  const imgId = `game-detail-${platformKey}-${slug}-hero`;
  const titleId = `game-detail-${platformKey}-${slug}-title`;
  const genreId = `game-detail-${platformKey}-${slug}-genre`;

  if (loading) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: theme.pageBg }}>
        <div className="max-w-4xl mx-auto px-4 py-24 animate-pulse space-y-6">
          <div className="h-6 rounded w-1/4" style={{ backgroundColor: theme.cardBorder }} />
          <div className="h-10 rounded w-3/4" style={{ backgroundColor: theme.cardBorder }} />
          <div className="h-72 rounded-xl" style={{ backgroundColor: theme.cardBorder }} />
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 rounded" style={{ backgroundColor: theme.cardBorder, width: `${80 - i * 10}%` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (notFound || !game) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: theme.pageBg }}>
        <div className="max-w-4xl mx-auto px-4 py-32 text-center">
          <p className="text-lg mb-6" style={{ color: theme.textMuted }}>Game not found.</p>
          <Link
            to={`/${platformKey}`}
            className="font-medium transition"
            style={{ color: theme.accent }}
          >
            ← Back to {theme.name}
          </Link>
        </div>
      </div>
    );
  }

  const d = game.data ?? {};
  const savings = (d.original_price ?? 0) - (d.sale_price ?? 0);

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.pageBg }} ref={containerRef}>
      {/* Hero image */}
      <div className="relative w-full h-72 md:h-[420px] overflow-hidden">
        <img
          alt={d.game_title}
          data-strk-img-id={imgId}
          data-strk-img={`[${genreId}] [${titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
          style={{ backgroundColor: theme.heroBg }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${theme.pageBg} 0%, ${theme.pageBg}88 40%, transparent 100%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 pb-24 -mt-20 relative z-10">
        {/* Back link */}
        <button
          onClick={() => navigate(`/${platformKey}`)}
          className="flex items-center gap-1.5 text-sm font-medium transition mb-6"
          style={{ color: theme.textMuted }}
          onMouseEnter={(e) => { e.currentTarget.style.color = theme.accent; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = theme.textMuted; }}
        >
          <ArrowLeft className="w-4 h-4" /> Back to {theme.name}
        </button>

        {/* Platform + genre badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
            style={{
              backgroundColor: `${theme.accent}22`,
              borderColor: `${theme.accent}55`,
              color: theme.accent,
            }}
          >
            {theme.name}
          </span>
          {d.genre && (
            <span
              className="flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full border"
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.cardBorder,
                color: theme.textMuted,
              }}
            >
              <Tag className="w-3 h-3" />
              <span id={genreId}>{d.genre}</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h1
          id={titleId}
          className="text-3xl md:text-5xl font-black leading-tight mb-4 text-white"
        >
          {d.game_title}
        </h1>

        {/* Rating */}
        {d.rating && (
          <div className="mb-6">
            <StarRating rating={d.rating} accent={theme.accent} />
          </div>
        )}

        {/* Price card */}
        <div
          className="rounded-2xl p-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          style={{ backgroundColor: theme.cardBg, border: `1px solid ${theme.cardBorder}` }}
        >
          <div>
            {d.is_free ? (
              <div className="text-4xl font-black text-yellow-400">FREE</div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="text-2xl font-black px-3 py-1 rounded-lg"
                    style={{ backgroundColor: '#16a34a22', color: '#4ade80' }}
                  >
                    -{d.discount_percent}%
                  </span>
                  <span className="text-3xl font-black text-white">${d.sale_price?.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-3 text-sm" style={{ color: theme.textMuted }}>
                  <span className="line-through">${d.original_price?.toFixed(2)}</span>
                  {savings > 0 && (
                    <span className="text-green-400 font-medium">You save ${savings.toFixed(2)}</span>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: theme.accent, color: theme.pageBg }}
            >
              <ShoppingCart className="w-4 h-4" />
              {d.is_free ? 'Get for Free' : 'Buy Now'}
            </a>
            {d.sale_end_date && (
              <div
                className="flex items-center justify-center gap-1.5 text-xs"
                style={{ color: theme.textMuted }}
              >
                <Clock className="w-3.5 h-3.5" />
                Sale ends {d.sale_end_date}
              </div>
            )}
          </div>
        </div>

        {/* Details grid */}
        <div
          className="rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ backgroundColor: theme.cardBg, border: `1px solid ${theme.cardBorder}` }}
        >
          {[
            { label: 'Platform', value: theme.name },
            { label: 'Genre', value: d.genre ?? '—' },
            { label: 'Discount', value: d.is_free ? 'Free' : `-${d.discount_percent}%` },
            { label: 'Rating', value: d.rating ? `${d.rating.toFixed(1)} / 5` : '—' },
          ].map(({ label, value }) => (
            <div key={label}>
              <div className="text-xs uppercase tracking-widest mb-1" style={{ color: theme.textMuted }}>
                {label}
              </div>
              <div className="font-semibold text-white">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
