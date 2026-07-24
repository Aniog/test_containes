import { useState, useEffect, useRef } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { laureates, years, fields, countries } from '../data/laureates';

function LaureateCard({ laureate }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-amber-200/40 shadow-sm hover:shadow-xl hover:border-gold/40 transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          alt={laureate.name}
          data-strk-img-id={laureate.imgId}
          data-strk-img={`[${laureate.descId}] [${laureate.titleId}] mathematician portrait`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <span className="bg-gold text-navy text-xs font-bold px-2 py-1 rounded">
            {laureate.year}
          </span>
          {laureate.note && (
            <span className="bg-navy/80 text-gold text-xs px-2 py-1 rounded border border-gold/40">
              {laureate.note}
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3
          id={laureate.titleId}
          className="font-serif font-bold text-navy text-lg mb-1 leading-tight"
        >
          {laureate.name}
        </h3>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-medium">
            {laureate.field}
          </span>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
            {laureate.country}
          </span>
        </div>
        <p className="text-navy/60 text-xs mb-3">{laureate.institution}</p>
        <p
          id={laureate.descId}
          className="text-navy/70 text-sm leading-relaxed flex-1 line-clamp-4"
        >
          {laureate.achievement}
        </p>
      </div>
    </div>
  );
}

export default function Laureates() {
  const containerRef = useRef(null);
  const [search, setSearch] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedField, setSelectedField] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = laureates.filter(l => {
    const q = search.toLowerCase();
    const matchSearch = !q || l.name.toLowerCase().includes(q) ||
      l.field.toLowerCase().includes(q) ||
      l.country.toLowerCase().includes(q) ||
      l.achievement.toLowerCase().includes(q);
    const matchYear = !selectedYear || l.year === Number(selectedYear);
    const matchField = !selectedField || l.field === selectedField;
    const matchCountry = !selectedCountry || l.country === selectedCountry;
    return matchSearch && matchYear && matchField && matchCountry;
  });

  const hasFilters = search || selectedYear || selectedField || selectedCountry;

  const clearFilters = () => {
    setSearch('');
    setSelectedYear('');
    setSelectedField('');
    setSelectedCountry('');
  };

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered.length, search, selectedYear, selectedField, selectedCountry]);

  return (
    <div className="min-h-screen bg-ivory-light">
      {/* Page header */}
      <div className="bg-navy pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-3">All Laureates</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ivory mb-4">
            历届获奖者
          </h1>
          <p className="text-ivory/60 max-w-2xl">
            自1936年至今，共有 <span className="text-gold font-semibold">{laureates.length}</span> 位数学家荣获菲尔兹奖，
            他们来自世界各地，在数学的不同领域做出了卓越贡献。
          </p>
        </div>
      </div>

      {/* Search & Filter bar */}
      <div className="sticky top-16 z-40 bg-white border-b border-amber-200/40 shadow-sm px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/40" />
            <input
              type="text"
              placeholder="搜索姓名、领域、国家..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-amber-200/60 bg-ivory-light text-navy placeholder-navy/40 focus:outline-none focus:border-gold/60 text-sm"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
              showFilters || (selectedYear || selectedField || selectedCountry)
                ? 'border-gold bg-gold/10 text-gold'
                : 'border-amber-200/60 text-navy/60 hover:border-gold/40'
            }`}
          >
            <Filter className="w-4 h-4" />
            筛选
            {(selectedYear || selectedField || selectedCountry) && (
              <span className="bg-gold text-navy text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {[selectedYear, selectedField, selectedCountry].filter(Boolean).length}
              </span>
            )}
          </button>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 px-3 py-2.5 text-sm text-navy/50 hover:text-navy transition-colors"
            >
              <X className="w-4 h-4" />
              清除
            </button>
          )}
        </div>

        {showFilters && (
          <div className="max-w-7xl mx-auto mt-3 flex flex-wrap gap-3">
            <select
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
              className="px-3 py-2 rounded-lg border border-amber-200/60 bg-ivory-light text-navy text-sm focus:outline-none focus:border-gold/60"
            >
              <option value="">所有年份</option>
              {years.map(y => (
                <option key={y} value={y}>{y}年</option>
              ))}
            </select>

            <select
              value={selectedField}
              onChange={e => setSelectedField(e.target.value)}
              className="px-3 py-2 rounded-lg border border-amber-200/60 bg-ivory-light text-navy text-sm focus:outline-none focus:border-gold/60"
            >
              <option value="">所有领域</option>
              {fields.map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>

            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              className="px-3 py-2 rounded-lg border border-amber-200/60 bg-ivory-light text-navy text-sm focus:outline-none focus:border-gold/60"
            >
              <option value="">所有国家</option>
              {countries.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10" ref={containerRef}>
        <div className="flex items-center justify-between mb-6">
          <p className="text-navy/60 text-sm">
            共 <span className="text-navy font-semibold">{filtered.length}</span> 位获奖者
            {hasFilters && <span className="text-gold ml-1">（已筛选）</span>}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-navy/40 text-lg font-serif">未找到匹配的获奖者</p>
            <button onClick={clearFilters} className="mt-4 text-gold hover:text-gold-light text-sm">
              清除筛选条件
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(laureate => (
              <LaureateCard key={laureate.id} laureate={laureate} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
