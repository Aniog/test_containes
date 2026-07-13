import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { fetchTours } from '../api/tours.js';
import { Clock, Users, BarChart2, Check, ChevronRight } from 'lucide-react';

const TABS = [
  { key: 'all', label: 'All Tours' },
  { key: 'half-day', label: 'Half-Day' },
  { key: 'one-day', label: 'One-Day' },
  { key: 'two-day', label: 'Two-Day' },
];

const DURATION_LABELS = {
  'half-day': 'Half-Day',
  'one-day': 'One-Day',
  'two-day': 'Two-Day',
};

const DURATION_COLORS = {
  'half-day': 'bg-jungle/10 text-jungle',
  'one-day': 'bg-ocean/10 text-ocean',
  'two-day': 'bg-coral/10 text-coral',
};

const DIFFICULTY_COLORS = {
  easy: 'text-jungle',
  moderate: 'text-ocean',
  challenging: 'text-coral',
};

const TourCard = ({ tour }) => {
  const d = tour.data;
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden">
      {/* Header strip */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-100">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${DURATION_COLORS[d.duration_type]}`}>
            {DURATION_LABELS[d.duration_type]}
          </span>
          {d.difficulty && (
            <span className={`text-xs font-medium capitalize ${DIFFICULTY_COLORS[d.difficulty]}`}>
              {d.difficulty}
            </span>
          )}
        </div>
        <h3 className="font-serif font-bold text-xl text-stone leading-snug mb-2">{d.title}</h3>
        <p className="text-stone/60 text-sm leading-relaxed line-clamp-3">{d.description}</p>
      </div>

      {/* Body */}
      <div className="px-6 py-4 flex-1 flex flex-col gap-4">
        {/* Meta row */}
        <div className="flex items-center gap-5 text-xs text-stone/60">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {DURATION_LABELS[d.duration_type]}
          </span>
          {d.max_group_size && (
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              Max {d.max_group_size} people
            </span>
          )}
          {d.difficulty && (
            <span className="flex items-center gap-1.5">
              <BarChart2 className="w-3.5 h-3.5" />
              <span className="capitalize">{d.difficulty}</span>
            </span>
          )}
        </div>

        {/* Highlights */}
        {d.highlights?.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-stone/50 uppercase tracking-wider mb-2">Highlights</p>
            <ul className="space-y-1.5">
              {d.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-stone/80">
                  <ChevronRight className="w-3.5 h-3.5 text-coral flex-shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Included */}
        {d.included?.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-stone/50 uppercase tracking-wider mb-2">Included</p>
            <ul className="space-y-1.5">
              {d.included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-stone/80">
                  <Check className="w-3.5 h-3.5 text-jungle flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer */}
      {d.price_usd != null && (
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-stone/50">From</span>
            <p className="font-bold text-2xl text-ocean leading-none">
              ${d.price_usd}
              <span className="text-sm font-normal text-stone/50 ml-1">/ person</span>
            </p>
          </div>
          <button className="bg-coral hover:bg-coral-dark text-white text-sm font-semibold rounded-full px-5 py-2.5 transition-colors border-none cursor-pointer">
            Book Now
          </button>
        </div>
      )}
    </div>
  );
};

const Tours = () => {
  const containerRef = useRef(null);
  const [tours, setTours] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTours()
      .then((rows) => {
        setTours(rows);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load tours:', err);
        setError('Failed to load tours. Please try again.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [tours, activeTab]);

  const filtered = activeTab === 'all'
    ? tours.filter((t) => t.data?.is_active !== false)
    : tours.filter((t) => t.data?.duration_type === activeTab && t.data?.is_active !== false);

  return (
    <div ref={containerRef} className="min-h-screen bg-mist">
      {/* Page Header */}
      <div className="bg-ocean pt-24 pb-14 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-coral text-xs font-semibold tracking-widest uppercase">Komodo National Park</span>
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-white mt-3 mb-4">
            Our Tours
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto">
            Choose from half-day, one-day, or two-day adventures — each crafted to show you the very best of Komodo.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-colors border-none cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-ocean text-white'
                    : 'bg-gray-100 text-stone/70 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-ocean/20 border-t-ocean rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-stone/60">{error}</div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-20 text-stone/50">
            No tours available for this category.
          </div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tours;
