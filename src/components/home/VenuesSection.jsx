import { venues } from '../../data/worldcup';
import { MapPin } from 'lucide-react';

const VenuesSection = () => (
  <section className="py-16 md:py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">比赛场馆</h2>
        <p className="text-gray-500">横跨三国的世界级球场</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {venues.map((venue) => (
          <div
            key={venue.name}
            className="bg-gray-950 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">{venue.flag}</span>
              <span className="text-xs text-gray-600 bg-gray-800 px-2 py-1 rounded-full">{venue.country}</span>
            </div>
            <h3 className="text-white font-semibold text-sm mb-1">{venue.name}</h3>
            <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
              <MapPin className="w-3 h-3" />
              <span>{venue.city}</span>
            </div>
            <div className="text-yellow-400 font-bold text-sm">
              {venue.capacity.toLocaleString()} <span className="text-gray-600 font-normal">座</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VenuesSection;
