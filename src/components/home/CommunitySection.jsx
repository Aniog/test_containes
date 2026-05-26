import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Users, MapPin, Trophy, Instagram } from 'lucide-react';

const stats = [
  { icon: <Users className="w-6 h-6" />, value: '120K+', label: 'Community Members' },
  { icon: <MapPin className="w-6 h-6" />, value: '2,400+', label: 'Skate Spots Mapped' },
  { icon: <Trophy className="w-6 h-6" />, value: '850+', label: 'Contests Hosted' },
];

const riders = [
  {
    id: 'rider-1',
    name: 'Alex Torres',
    specialty: 'Street',
    location: 'Los Angeles, CA',
    imgId: 'rider-img-l2j4g7',
    quote: 'Skating taught me that falling is just part of learning.',
  },
  {
    id: 'rider-2',
    name: 'Maya Chen',
    specialty: 'Park',
    location: 'Portland, OR',
    imgId: 'rider-img-m3k5h8',
    quote: 'Every session is a chance to push your limits.',
  },
  {
    id: 'rider-3',
    name: 'Jordan Blake',
    specialty: 'Vert',
    location: 'Phoenix, AZ',
    imgId: 'rider-img-n4l6i9',
    quote: 'The ramp doesn\'t care who you are. Just ride.',
  },
];

const RiderCard = ({ rider, sectionTitleId }) => (
  <div className="bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 hover:border-skate-yellow/40 transition-all group">
    <div className="relative h-56 overflow-hidden">
      <img
        alt={rider.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        data-strk-img-id={rider.imgId}
        data-strk-img={`[${rider.id}-specialty] [${rider.id}-name] [${sectionTitleId}]`}
        data-strk-img-ratio="3x2"
        data-strk-img-width="500"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-800 via-transparent to-transparent" />
      <span
        id={`${rider.id}-specialty`}
        className="absolute top-3 right-3 bg-skate-yellow text-zinc-950 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
      >
        {rider.specialty}
      </span>
    </div>
    <div className="p-5">
      <h3 id={`${rider.id}-name`} className="font-display text-2xl text-zinc-100 uppercase">
        {rider.name}
      </h3>
      <div className="flex items-center gap-1 text-zinc-500 text-xs mt-1 mb-3">
        <MapPin className="w-3 h-3" />
        {rider.location}
      </div>
      <p className="text-zinc-400 text-sm italic leading-relaxed border-l-4 border-skate-yellow/50 pl-3">
        "{rider.quote}"
      </p>
    </div>
  </div>
);

const CommunitySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="community" ref={containerRef} className="bg-zinc-950 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-skate-yellow text-xs font-bold uppercase tracking-widest">
            Real Skaters. Real Stories.
          </span>
          <h2
            id="community-title"
            className="font-display text-5xl md:text-7xl text-zinc-100 uppercase mt-2 leading-none"
          >
            The<br />
            <span className="text-skate-yellow">Community</span>
          </h2>
          <p className="text-zinc-400 text-base mt-4 max-w-lg">
            Join thousands of skaters worldwide. Share clips, find spots, and grow together.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 flex items-center gap-4"
            >
              <div className="text-skate-yellow">{stat.icon}</div>
              <div>
                <div className="font-display text-3xl text-zinc-100">{stat.value}</div>
                <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured riders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {riders.map((rider) => (
            <RiderCard key={rider.id} rider={rider} sectionTitleId="community-title" />
          ))}
        </div>

        {/* Join CTA */}
        <div
          id="about"
          className="bg-zinc-900 rounded-2xl border border-zinc-800 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="font-display text-4xl md:text-5xl text-zinc-100 uppercase leading-tight">
              Ready to <span className="text-skate-yellow">Ride?</span>
            </h3>
            <p className="text-zinc-400 mt-3 max-w-md">
              Create your free account, log your sessions, discover new spots, and connect with skaters near you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="#"
              className="bg-skate-yellow text-zinc-950 font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-yellow-300 transition text-sm text-center"
            >
              Sign Up Free
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 border-2 border-zinc-700 text-zinc-100 font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:border-skate-yellow hover:text-skate-yellow transition text-sm"
            >
              <Instagram className="w-4 h-4" />
              Follow Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
