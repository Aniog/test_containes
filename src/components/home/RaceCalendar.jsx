import { CalendarDays, MapPin, Users, ChevronRight } from 'lucide-react';

const events = [
  {
    id: 1,
    month: 'JUN',
    day: '08',
    name: 'Pyrenees Grand Prix',
    location: 'Toulouse, France',
    type: 'Road Race',
    riders: '180 Riders',
    status: 'Open',
    statusColor: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
  {
    id: 2,
    month: 'JUN',
    day: '22',
    name: 'Whistler Enduro Open',
    location: 'Whistler, Canada',
    type: 'Enduro MTB',
    riders: '320 Riders',
    status: 'Open',
    statusColor: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
  {
    id: 3,
    month: 'JUL',
    day: '05',
    name: 'Velodrome World Cup',
    location: 'Manchester, UK',
    type: 'Track',
    riders: '96 Riders',
    status: 'Closing Soon',
    statusColor: 'text-brand-orange bg-orange-400/10 border-orange-400/30',
  },
  {
    id: 4,
    month: 'JUL',
    day: '19',
    name: 'Transalp Challenge',
    location: 'Innsbruck, Austria',
    type: 'Stage Race',
    riders: '500 Riders',
    status: 'Open',
    statusColor: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
  {
    id: 5,
    month: 'AUG',
    day: '02',
    name: 'Gravel Worlds',
    location: 'Lincoln, Nebraska, USA',
    type: 'Gravel',
    riders: '2,500 Riders',
    status: 'Open',
    statusColor: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
  {
    id: 6,
    month: 'AUG',
    day: '16',
    name: 'Cape Epic',
    location: 'Cape Town, South Africa',
    type: 'MTB Stage',
    riders: '1,200 Riders',
    status: 'Sold Out',
    statusColor: 'text-neutral-400 bg-neutral-400/10 border-neutral-400/30',
  },
];

const StatsBar = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800 rounded-xl overflow-hidden mb-16">
    {[
      { value: '48', label: 'Races This Year' },
      { value: '32', label: 'Countries' },
      { value: '12K+', label: 'Registered Riders' },
      { value: '$2.1M', label: 'Total Prize Money' },
    ].map((stat) => (
      <div key={stat.label} className="bg-brand-surface px-6 py-8 text-center">
        <p className="font-display font-black text-4xl md:text-5xl text-brand-red mb-1">{stat.value}</p>
        <p className="text-neutral-400 text-sm uppercase tracking-widest font-semibold">{stat.label}</p>
      </div>
    ))}
  </div>
);

const RaceCalendar = () => (
  <section id="calendar" className="py-20 md:py-28 bg-brand-dark">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <p className="text-brand-red font-semibold uppercase tracking-widest text-sm mb-3">
            2026 Season
          </p>
          <h2 className="font-display font-black uppercase text-4xl md:text-6xl text-neutral-100 leading-none">
            Race <span className="text-brand-red">Calendar</span>
          </h2>
        </div>
        <p className="text-neutral-400 max-w-sm text-base leading-relaxed">
          Upcoming events across every discipline. Register before spots fill up.
        </p>
      </div>

      <StatsBar />

      {/* Events list */}
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="group flex flex-col sm:flex-row sm:items-center gap-4 bg-brand-surface border border-neutral-800 hover:border-brand-red/40 rounded-xl px-5 py-5 transition-all duration-200 cursor-pointer"
          >
            {/* Date */}
            <div className="flex-shrink-0 w-16 text-center">
              <p className="text-brand-red font-display font-black text-2xl leading-none">{event.day}</p>
              <p className="text-neutral-500 text-xs font-semibold uppercase tracking-widest">{event.month}</p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-neutral-800" />

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-display font-bold uppercase text-lg text-neutral-100 group-hover:text-white transition-colors">
                  {event.name}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-red bg-brand-red/10 border border-brand-red/20 rounded-full px-2.5 py-0.5">
                  {event.type}
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {event.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  {event.riders}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5" />
                  2026
                </span>
              </div>
            </div>

            {/* Status + CTA */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className={`text-xs font-semibold uppercase tracking-widest border rounded-full px-3 py-1 ${event.statusColor}`}>
                {event.status}
              </span>
              <button
                disabled={event.status === 'Sold Out'}
                className="flex items-center gap-1 bg-brand-red hover:bg-red-500 disabled:bg-neutral-700 disabled:text-neutral-500 text-white text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-2 transition-colors"
              >
                Register
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="border border-neutral-700 hover:border-brand-red text-neutral-300 hover:text-brand-red font-semibold uppercase tracking-widest rounded-full px-8 py-4 transition-colors text-sm">
          View Full Calendar
        </button>
      </div>
    </div>
  </section>
);

export default RaceCalendar;
