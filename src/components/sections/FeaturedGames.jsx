import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star } from 'lucide-react';

const featuredGames = [
  {
    id: 'cyberpunk',
    titleId: 'feat-cyberpunk-title',
    descId: 'feat-cyberpunk-desc',
    imgId: 'feat-img-cyberpunk-d4e5f6',
    title: 'Cyberpunk 2077',
    desc: 'An open-world action RPG set in the dark future of Night City.',
    genre: 'RPG',
    price: '$29.99',
    rating: 4.5,
    badge: 'Editor\'s Choice',
    badgeColor: 'bg-[#1a9fff]',
  },
  {
    id: 'elden-ring',
    titleId: 'feat-elden-ring-title',
    descId: 'feat-elden-ring-desc',
    imgId: 'feat-img-eldenring-g7h8i9',
    title: 'Elden Ring',
    desc: 'A vast open-world action RPG crafted by FromSoftware and George R.R. Martin.',
    genre: 'Action RPG',
    price: '$59.99',
    rating: 5,
    badge: 'Game of the Year',
    badgeColor: 'bg-yellow-500',
  },
  {
    id: 'baldurs-gate',
    titleId: 'feat-baldurs-title',
    descId: 'feat-baldurs-desc',
    imgId: 'feat-img-baldursgate-j1k2l3',
    title: "Baldur's Gate 3",
    desc: 'A legendary RPG with deep storytelling, tactical combat, and endless choices.',
    genre: 'RPG',
    price: '$59.99',
    rating: 5,
    badge: 'Overwhelmingly Positive',
    badgeColor: 'bg-green-600',
  },
  {
    id: 'hades',
    titleId: 'feat-hades-title',
    descId: 'feat-hades-desc',
    imgId: 'feat-img-hades-m4n5o6',
    title: 'Hades',
    desc: 'A rogue-like dungeon crawler where you defy the god of the dead.',
    genre: 'Roguelike',
    price: '$24.99',
    rating: 5,
    badge: 'Indie Gem',
    badgeColor: 'bg-purple-600',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-[#2a475e]'}`}
        />
      ))}
    </div>
  );
}

export default function FeaturedGames() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="featured" className="py-20 px-4 md:px-8 bg-[#0f1923]" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-[#1a9fff] text-sm font-semibold uppercase tracking-widest">Handpicked</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Featured Games</h2>
          <p className="text-[#8f98a0] mt-2 max-w-xl">
            Our curated selection of must-play titles across every genre.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map((game) => (
            <div
              key={game.id}
              className="bg-[#16202d] border border-[#2a475e] rounded-xl overflow-hidden hover:border-[#1a9fff] transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={game.title}
                  data-strk-img-id={game.imgId}
                  data-strk-img={`[${game.descId}] [${game.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500 bg-[#1b2838]"
                />
                <span className={`absolute top-2 left-2 ${game.badgeColor} text-white text-xs font-semibold px-2 py-0.5 rounded`}>
                  {game.badge}
                </span>
              </div>
              <div className="p-4">
                <span className="text-[#1a9fff] text-xs font-medium uppercase tracking-wide">{game.genre}</span>
                <h3 id={game.titleId} className="text-white font-semibold text-base mt-1 mb-1">{game.title}</h3>
                <p id={game.descId} className="text-[#8f98a0] text-xs leading-relaxed mb-3 line-clamp-2">{game.desc}</p>
                <div className="flex items-center justify-between">
                  <StarRating rating={game.rating} />
                  <span className="text-[#1a9fff] font-bold text-sm">{game.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
