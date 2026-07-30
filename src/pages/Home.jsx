import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import { ArrowRight, Zap, Target, Trophy, Users } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '300M+', label: 'Players Worldwide' },
  { value: '1988', label: 'Olympic Debut' },
  { value: '170 km/h', label: 'Max Ball Speed' },
  { value: '11', label: 'Points Per Game' },
];

const highlights = [
  {
    id: 'highlight-speed',
    icon: Zap,
    title: 'Blazing Speed',
    titleId: 'highlight-speed-title',
    descId: 'highlight-speed-desc',
    description:
      'Table tennis is one of the fastest racket sports on earth. Reflexes, footwork, and split-second decisions separate good players from great ones.',
    imgId: 'home-highlight-speed-a1b2c3',
  },
  {
    id: 'highlight-precision',
    icon: Target,
    title: 'Pinpoint Precision',
    titleId: 'highlight-precision-title',
    descId: 'highlight-precision-desc',
    description:
      'Spin, placement, and angle control are the hallmarks of elite play. Mastering topspin, backspin, and sidespin opens up a world of tactical options.',
    imgId: 'home-highlight-precision-d4e5f6',
  },
  {
    id: 'highlight-competition',
    icon: Trophy,
    title: 'World-Class Competition',
    titleId: 'highlight-competition-title',
    descId: 'highlight-competition-desc',
    description:
      'From local club nights to the Olympic Games, table tennis offers competitive opportunities at every level for players of all ages.',
    imgId: 'home-highlight-competition-g7h8i9',
  },
  {
    id: 'highlight-community',
    icon: Users,
    title: 'Global Community',
    titleId: 'highlight-community-title',
    descId: 'highlight-community-desc',
    description:
      'With over 300 million players across 220 countries, table tennis is one of the most widely played sports in the world.',
    imgId: 'home-highlight-community-j1k2l3',
  },
];

const featuredPlayers = [
  {
    id: 'player-fan',
    name: 'Fan Zhendong',
    country: '🇨🇳 China',
    rank: 'World #1',
    titleId: 'player-fan-title',
    descId: 'player-fan-desc',
    imgId: 'home-player-fan-m4n5o6',
    bio: 'Dominant force in world table tennis, multiple World Champion and Olympic gold medalist.',
  },
  {
    id: 'player-harimoto',
    name: 'Tomokazu Harimoto',
    country: '🇯🇵 Japan',
    rank: 'Top 5 World',
    titleId: 'player-harimoto-title',
    descId: 'player-harimoto-desc',
    imgId: 'home-player-harimoto-p7q8r9',
    bio: 'Prodigy who became the youngest player to win a World Tour title, known for aggressive attacking style.',
  },
  {
    id: 'player-chen',
    name: 'Chen Meng',
    country: '🇨🇳 China',
    rank: "Women's World #1",
    titleId: 'player-chen-title',
    descId: 'player-chen-desc',
    imgId: 'home-player-chen-s1t2u3',
    bio: 'Olympic champion and world number one, renowned for her powerful forehand and consistent all-round game.',
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-slate-950 min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="home-hero-bg-v4w5x6"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-32 md:py-40">
          <div className="max-w-2xl">
            <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              The Sport of Speed & Skill
            </span>
            <h1
              id="home-hero-title"
              className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6"
            >
              Master the Art of{' '}
              <span className="text-orange-400">Table Tennis</span>
            </h1>
            <p
              id="home-hero-subtitle"
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10"
            >
              Discover the world's fastest racket sport. Learn the rules, master
              the techniques, and find the perfect equipment to elevate your game.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/techniques"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Start Learning <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/equipment"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-orange-400 hover:text-orange-400 font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Explore Equipment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-orange-500">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="text-sm font-medium text-orange-100 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the sport */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
                About the Sport
              </span>
              <h2
                id="home-about-title"
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight"
              >
                A Sport Born from Ingenuity, Perfected by Passion
              </h2>
              <p
                id="home-about-desc"
                className="text-slate-600 leading-relaxed mb-4"
              >
                Table tennis originated in Victorian England as an after-dinner parlour game
                for the upper class. Using books as nets and rounded lids as paddles, players
                batted a golf ball across a table. The sport evolved rapidly, and by the 1900s
                purpose-built equipment was being manufactured.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Today, table tennis is a global phenomenon governed by the International Table
                Tennis Federation (ITTF), with over 220 member associations. It became an
                Olympic sport at the 1988 Seoul Games and has been a fixture ever since.
              </p>
              <Link
                to="/rules"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors"
              >
                Learn the Rules <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="home-about-img-y7z8a9"
                data-strk-img="[home-about-desc] [home-about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Table tennis history"
                className="w-full rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white rounded-2xl p-4 shadow-lg">
                <p className="text-2xl font-extrabold">1926</p>
                <p className="text-xs font-medium text-orange-100">ITTF Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights grid */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
              Why Table Tennis?
            </span>
            <h2
              id="home-highlights-title"
              className="text-3xl md:text-4xl font-bold text-slate-900"
            >
              What Makes This Sport Special
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3
                      id={item.titleId}
                      className="text-lg font-semibold text-slate-900 mb-2"
                    >
                      {item.title}
                    </h3>
                    <p
                      id={item.descId}
                      className="text-slate-600 text-sm leading-relaxed"
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured players */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
              Elite Athletes
            </span>
            <h2
              id="home-players-title"
              className="text-3xl md:text-4xl font-bold text-slate-900"
            >
              World-Class Players to Watch
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPlayers.map((player) => (
              <div
                key={player.id}
                className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <img
                  data-strk-img-id={player.imgId}
                  data-strk-img={`[${player.descId}] [${player.titleId}] [home-players-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={player.name}
                  className="w-full object-cover h-48"
                />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      id={player.titleId}
                      className="text-lg font-semibold text-slate-900"
                    >
                      {player.name}
                    </h3>
                    <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-1 rounded-full">
                      {player.rank}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-3">{player.country}</p>
                  <p
                    id={player.descId}
                    className="text-sm text-slate-600 leading-relaxed"
                  >
                    {player.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to Pick Up a Paddle?
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Whether you're a complete beginner or a seasoned club player, PingPro has
            everything you need to improve your game.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/equipment"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Browse Equipment <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/techniques"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-600 text-slate-300 hover:border-orange-400 hover:text-orange-400 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Learn Techniques
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
