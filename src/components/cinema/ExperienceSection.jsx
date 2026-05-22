import { Armchair, Wine, Volume2, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Armchair,
    title: 'Bespoke Seating',
    description: 'Hand-crafted leather recliners with individual climate control and personal service call.',
  },
  {
    icon: Volume2,
    title: 'Dolby Atmos',
    description: 'Immersive 360° sound design that places you inside the film\'s sonic landscape.',
  },
  {
    icon: Wine,
    title: 'Curated Dining',
    description: 'In-seat dining from our Michelin-starred kitchen. Champagne, cocktails, and seasonal menus.',
  },
  {
    icon: Sparkles,
    title: 'Private Screenings',
    description: 'Exclusive hire of our intimate 40-seat theatre for private events and corporate occasions.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-cinema-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-cinema-black" />
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-cinema-ash">
              The Noir Experience
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-light tracking-wider text-cinema-black leading-tight">
            Cinema as it was
            <br />
            <em>meant to be</em>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-black/10">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="border-r border-b border-black/10 p-8 lg:p-10 group hover:bg-cinema-black transition-colors duration-500"
              >
                <div className="mb-6">
                  <Icon className="w-5 h-5 text-cinema-ash group-hover:text-cinema-white transition-colors duration-500" />
                </div>
                <h3 className="font-display text-xl font-light tracking-wide text-cinema-black group-hover:text-cinema-white transition-colors duration-500 mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs font-sans font-light text-cinema-silver group-hover:text-cinema-smoke transition-colors duration-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Membership Banner */}
        <div id="members" className="mt-20 bg-cinema-black p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-cinema-gold" />
              <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-cinema-gold">
                Membership
              </span>
            </div>
            <h3 className="font-display text-3xl lg:text-4xl font-light tracking-wider text-cinema-white mb-3">
              Join the Inner Circle
            </h3>
            <p className="text-xs font-sans font-light text-cinema-smoke max-w-lg leading-relaxed">
              Priority booking, exclusive screenings, complimentary champagne on arrival, and access to our private members' lounge.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <button className="bg-cinema-white text-cinema-black text-[10px] font-sans font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-cinema-pearl transition-colors duration-300 whitespace-nowrap">
              Apply Now
            </button>
            <button className="border border-white/30 text-cinema-white text-[10px] font-sans font-medium tracking-[0.2em] uppercase px-8 py-4 hover:border-cinema-white transition-colors duration-300 whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
