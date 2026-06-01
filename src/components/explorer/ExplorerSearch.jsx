import { Search, SlidersHorizontal } from 'lucide-react';

export default function ExplorerSearch({ query, onChange, resultCount, total }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between mb-6">
      <div className="relative flex-1 max-w-lg">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={e => onChange(e.target.value)}
          placeholder="Search memories, places, emotions..."
          className="w-full bg-cosmos-800/60 border border-nebula-500/20 rounded-full pl-11 pr-4 py-3 text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-nebula-400/50 focus:bg-cosmos-700/60 transition-all"
        />
      </div>
      <div className="flex items-center gap-2 text-text-muted font-mono text-xs shrink-0">
        <SlidersHorizontal className="w-3.5 h-3.5" />
        <span>
          {resultCount.toLocaleString()} of {total.toLocaleString()} memories
        </span>
      </div>
    </div>
  );
}
