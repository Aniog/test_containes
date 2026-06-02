import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { TrendingUp } from 'lucide-react';

const topSellers = [
  { rank: 1, id: 'ts-helldivers', titleId: 'ts-helldivers-title', descId: 'ts-helldivers-desc', imgId: 'ts-img-helldivers-p7q8r9', title: 'Helldivers 2', desc: 'Co-op third-person shooter defending Super Earth.', genre: 'Shooter', price: '$39.99', discount: null },
  { rank: 2, id: 'ts-palworld', titleId: 'ts-palworld-title', descId: 'ts-palworld-desc', imgId: 'ts-img-palworld-s1t2u3', title: 'Palworld', desc: 'Survival crafting with mysterious creatures called Pals.', genre: 'Survival', price: '$29.99', discount: null },
  { rank: 3, id: 'ts-hogwarts', titleId: 'ts-hogwarts-title', descId: 'ts-hogwarts-desc', imgId: 'ts-img-hogwarts-v4w5x6', title: 'Hogwarts Legacy', desc: 'Explore the wizarding world in an open-world RPG.', genre: 'RPG', price: '$59.99', discount: '-30%' },
  { rank: 4, id: 'ts-starfield', titleId: 'ts-starfield-title', descId: 'ts-starfield-desc', imgId: 'ts-img-starfield-y7z8a9', title: 'Starfield', desc: "Bethesda's epic space exploration RPG.", genre: 'RPG', price: '$69.99', discount: '-20%' },
  { rank: 5, id: 'ts-cs2', titleId: 'ts-cs2-title', descId: 'ts-cs2-desc', imgId: 'ts-img-cs2-b1c2d3', title: 'Counter-Strike 2', desc: 'The world\'s most popular competitive FPS, rebuilt.', genre: 'FPS', price: 'Free', discount: null },
  { rank: 6, id: 'ts-dota2', titleId: 'ts-dota2-title', descId: 'ts-dota2-desc', imgId: 'ts-img-dota2-e4f5g6', title: 'Dota 2', desc: 'The legendary MOBA with endless strategic depth.', genre: 'MOBA', price: 'Free', discount: null },
];

export default function TopSellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="top-sellers" className="py-20 px-4 md:px-8 bg-[#1b2838]" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex items-start justify-between flex-wrap gap-4">
          <div>
            <span className="text-[#1a9fff] text-sm font-semibold uppercase tracking-widest">Charts</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Top Sellers</h2>
            <p className="text-[#8f98a0] mt-2">The most purchased games on Steam right now.</p>
          </div>
          <div className="flex items-center gap-2 text-[#1a9fff] text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            Updated daily
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topSellers.map((game) => (
            <div
              key={game.id}
              className="bg-[#16202d] border border-[#2a475e] rounded-xl overflow-hidden hover:border-[#1a9fff] transition-all duration-300 group cursor-pointer flex gap-0"
            >
              <div className="relative w-28 flex-shrink-0 overflow-hidden">
                <img
                  alt={game.title}
                  data-strk-img-id={game.imgId}
                  data-strk-img={`[${game.descId}] [${game.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-[#1b2838]"
                />
                <div className="absolute top-2 left-2 w-7 h-7 bg-[#0f1923]/90 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-[#1a9fff] text-xs font-black">#{game.rank}</span>
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[#1a9fff] text-xs font-medium uppercase tracking-wide">{game.genre}</span>
                  <h3 id={game.titleId} className="text-white font-semibold text-sm mt-0.5 mb-1">{game.title}</h3>
                  <p id={game.descId} className="text-[#8f98a0] text-xs leading-relaxed line-clamp-2">{game.desc}</p>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  {game.discount && (
                    <span className="bg-green-600 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                      {game.discount}
                    </span>
                  )}
                  <span className={`font-bold text-sm ${game.price === 'Free' ? 'text-green-400' : 'text-[#1a9fff]'}`}>
                    {game.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
