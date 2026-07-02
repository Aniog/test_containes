import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { topScorers } from '@/data/worldcup';
import { Target, Zap } from 'lucide-react';

const TopScorers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="scorers" className="py-20 bg-wc-bg" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-wc-gold mb-2">进球统计</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">射手榜</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {topScorers.map((scorer) => (
            <div
              key={scorer.name}
              className={`bg-wc-card border border-wc-border rounded-xl p-4 flex items-center gap-4 hover:border-wc-gold/40 transition-all duration-200 ${
                scorer.rank === 1 ? 'border-wc-gold/60 bg-gradient-to-r from-wc-gold/5 to-wc-card' : ''
              }`}
            >
              {/* Rank */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0 ${
                scorer.rank === 1
                  ? 'bg-wc-gold text-black'
                  : scorer.rank === 2
                  ? 'bg-gray-400 text-black'
                  : scorer.rank === 3
                  ? 'bg-amber-700 text-white'
                  : 'bg-wc-surface text-gray-400 border border-wc-border'
              }`}>
                {scorer.rank}
              </div>

              {/* Player Photo */}
              <div className="w-14 h-14 rounded-full overflow-hidden bg-wc-surface border border-wc-border flex-shrink-0">
                <img
                  data-strk-img-id={scorer.imgId}
                  data-strk-img={`[scorer-name-${scorer.rank}] [scorer-team-${scorer.rank}] football player portrait`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={scorer.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Player Info */}
              <div className="flex-1 min-w-0">
                <div id={`scorer-name-${scorer.rank}`} className="text-white font-bold text-base truncate">
                  {scorer.name}
                </div>
                <div id={`scorer-team-${scorer.rank}`} className="flex items-center gap-1.5 text-sm text-gray-400">
                  <span>{scorer.flag}</span>
                  <span>{scorer.team}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="text-center">
                  <div className="flex items-center gap-1 text-wc-gold">
                    <Target className="w-3.5 h-3.5" />
                    <span className="text-2xl font-black">{scorer.goals}</span>
                  </div>
                  <div className="text-xs text-gray-500">进球</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 text-blue-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span className="text-2xl font-black">{scorer.assists}</span>
                  </div>
                  <div className="text-xs text-gray-500">助攻</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopScorers;
