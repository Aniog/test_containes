import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Zap, Star, TrendingUp } from 'lucide-react';

const tricks = [
  {
    id: 'trick-1',
    title: 'Kickflip',
    level: 'Beginner',
    levelClass: 'text-green-400',
    description: 'The foundation of street skating. Flick the board with your front foot and catch it mid-air.',
    imgId: 'trick-img-b2e4f7',
    icon: <Zap className="w-4 h-4" />,
  },
  {
    id: 'trick-2',
    title: 'Heelflip',
    level: 'Beginner',
    levelClass: 'text-green-400',
    description: 'The kickflip\'s sibling. Drag your heel off the nose to send the board spinning the other way.',
    imgId: 'trick-img-c3a5d8',
    icon: <Zap className="w-4 h-4" />,
  },
  {
    id: 'trick-3',
    title: '360 Flip',
    level: 'Intermediate',
    levelClass: 'accent-text',
    description: 'Combine a kickflip with a backside 360 pop shove-it. One of the most satisfying tricks to land.',
    imgId: 'trick-img-d4b6e9',
    icon: <Star className="w-4 h-4" />,
  },
  {
    id: 'trick-4',
    title: 'Hardflip',
    level: 'Intermediate',
    levelClass: 'accent-text',
    description: 'A frontside pop shove-it combined with a kickflip. Looks clean, feels incredible.',
    imgId: 'trick-img-e5c7f0',
    icon: <Star className="w-4 h-4" />,
  },
  {
    id: 'trick-5',
    title: 'Laser Flip',
    level: 'Advanced',
    levelClass: 'text-red-400',
    description: 'A frontside 360 shove-it with a heelflip. One of the hardest flat-ground tricks in existence.',
    imgId: 'trick-img-f6d8a1',
    icon: <TrendingUp className="w-4 h-4" />,
  },
  {
    id: 'trick-6',
    title: 'Darkslide',
    level: 'Advanced',
    levelClass: 'text-red-400',
    description: 'Flip the board upside down and grind on the grip tape. Pure style, maximum difficulty.',
    imgId: 'trick-img-g7e9b2',
    icon: <TrendingUp className="w-4 h-4" />,
  },
];

const TrickCard = ({ trick, sectionTitleId, sectionSubtitleId }) => (
  <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover-accent-border transition-all group">
    <div className="relative overflow-hidden h-48">
      <img
        alt={trick.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        data-strk-img-id={trick.imgId}
        data-strk-img={`[${trick.id}-desc] [${trick.id}-title] [${sectionSubtitleId}] [${sectionTitleId}]`}
        data-strk-img-ratio="3x2"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 id={`${trick.id}-title`} className="font-display text-2xl text-zinc-100 uppercase">
          {trick.title}
        </h3>
        <span className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest ${trick.levelClass}`}>
          {trick.icon}
          {trick.level}
        </span>
      </div>
      <p id={`${trick.id}-desc`} className="text-zinc-400 text-sm leading-relaxed">
        {trick.description}
      </p>
      <button className="mt-4 accent-text text-xs font-bold uppercase tracking-widest hover-accent-text transition flex items-center gap-1">
        Watch Tutorial →
      </button>
    </div>
  </div>
);

const TricksSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="tricks" ref={containerRef} className="bg-zinc-950 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span id="tricks-label" className="accent-text text-xs font-bold uppercase tracking-widest">
            Master the Fundamentals
          </span>
          <h2 id="tricks-title" className="font-display text-5xl md:text-7xl text-zinc-100 uppercase mt-2 leading-none">
            Signature<br />
            <span className="accent-text">Tricks</span>
          </h2>
          <p id="tricks-subtitle" className="text-zinc-400 text-base mt-4 max-w-lg">
            From your first ollie to competition-level combos — step-by-step guides for every skill level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tricks.map((trick) => (
            <TrickCard
              key={trick.id}
              trick={trick}
              sectionTitleId="tricks-title"
              sectionSubtitleId="tricks-subtitle"
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="border-2 border-zinc-700 text-zinc-100 font-bold uppercase tracking-widest px-8 py-3 rounded-full hover-accent-border hover-accent-text transition text-sm"
          >
            View All Tricks
          </a>
        </div>
      </div>
    </section>
  );
};

export default TricksSection;

