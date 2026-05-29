import { Link } from 'react-router-dom';
import { BadgeCheck, Users, Sparkles } from 'lucide-react';
import { CREATORS } from '../../data/dreams';

export default function TopCreators() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="font-dream text-3xl sm:text-4xl font-bold text-white mb-3">
          Dream Architects
        </h2>
        <p className="text-purple-300/60 font-body">The visionaries shaping the dreamscape</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CREATORS.map((creator, i) => (
          <div
            key={creator.id}
            className="dream-card group relative overflow-hidden rounded-2xl glass border border-white/5 hover:border-purple-500/30 p-6 text-center"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-b from-purple-500/5 to-transparent" />

            {/* Avatar */}
            <div className="relative inline-block mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-3xl mx-auto shadow-lg group-hover:shadow-purple-500/30 transition-shadow">
                {creator.avatar}
              </div>
              {creator.verified && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                  <BadgeCheck className="w-4 h-4 text-white" />
                </div>
              )}
            </div>

            <h3 className="font-dream text-base font-bold text-white mb-1">{creator.name}</h3>
            <p className="text-xs text-purple-300/60 font-body mb-4">{creator.specialty}</p>

            <div className="flex justify-center gap-6 mb-4">
              <div className="text-center">
                <p className="font-dream text-sm font-bold text-white">{creator.dreams}</p>
                <p className="text-xs text-purple-300/40 font-body">Dreams</p>
              </div>
              <div className="text-center">
                <p className="font-dream text-sm font-bold text-white">{(creator.followers / 1000).toFixed(1)}k</p>
                <p className="text-xs text-purple-300/40 font-body">Followers</p>
              </div>
            </div>

            <Link
              to="/social"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-full text-xs font-semibold font-body transition-all duration-300 bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:bg-purple-500/20"
            >
              <Users className="w-3 h-3" />
              Follow
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
