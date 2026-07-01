import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Plane, Ship, Wallet, Camera, AlertTriangle, Heart } from 'lucide-react';

const tips = [
  {
    icon: Plane,
    title: 'Getting There',
    color: 'bg-ocean/10 text-ocean',
    items: [
      'Fly into Labuan Bajo (LBJ) from Bali (45 min) or Jakarta (2 hrs)',
      'Daily flights on Garuda, Lion Air, and TransNusa',
      'Book flights 2–3 months ahead during peak season',
    ],
  },
  {
    icon: Ship,
    title: 'Getting Around',
    color: 'bg-coral/10 text-coral',
    items: [
      'Join a liveaboard tour for the best island-hopping experience',
      'Day trips from Labuan Bajo cover the main highlights',
      'Private boat charters offer flexibility for groups',
    ],
  },
  {
    icon: Wallet,
    title: 'Budget & Costs',
    color: 'bg-jungle/10 text-jungle',
    items: [
      'Budget: ~$50–80/day (hostel + group tours)',
      'Mid-range: ~$100–200/day (guesthouse + private tours)',
      'Liveaboard: $150–400/night all-inclusive',
    ],
  },
  {
    icon: Camera,
    title: 'Photography Tips',
    color: 'bg-ocean/10 text-ocean',
    items: [
      'Golden hour at Padar Island is unmissable — hike at sunrise',
      'Underwater camera essential for snorkeling and diving',
      'Respect wildlife — keep safe distance from Komodo dragons',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Safety & Rules',
    color: 'bg-coral/10 text-coral',
    items: [
      'Always trek with a licensed park ranger',
      'Never approach Komodo dragons alone',
      'Wear reef-safe sunscreen to protect coral',
    ],
  },
  {
    icon: Heart,
    title: 'Responsible Travel',
    color: 'bg-jungle/10 text-jungle',
    items: [
      'No single-use plastics in the national park',
      'Support local guides and family-run guesthouses',
      'Follow Leave No Trace principles on all islands',
    ],
  },
];

const TravelTips = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="tips" ref={containerRef} className="py-20 px-4 md:px-8 bg-ocean">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-coral text-sm font-semibold tracking-widest uppercase">Practical Information</span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-white mt-3 mb-5">
            Travel Tips for Komodo
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Everything you need to know to plan a smooth, safe, and unforgettable trip.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tip.color}`}>
                  <tip.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-white">{tip.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {tip.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 bg-white/10 border border-white/20 rounded-2xl p-8 md:p-10 text-center">
          <h3 className="font-serif font-bold text-2xl md:text-3xl text-white mb-3">
            Ready to Experience Komodo?
          </h3>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            The dragons are waiting. The ocean is calling. Start planning your adventure today.
          </p>
          <button
            onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-coral hover:bg-coral-dark text-white font-semibold rounded-full px-8 py-4 text-base transition-colors border-none cursor-pointer"
          >
            See the Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
