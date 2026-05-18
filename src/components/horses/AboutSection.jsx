import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const facts = [
  {
    icon: '🐎',
    title: 'Ancient Bond',
    description: 'Horses were first domesticated around 3500 BC on the Eurasian steppes, forging one of the oldest partnerships between humans and animals.',
  },
  {
    icon: '💨',
    title: 'Built for Speed',
    description: 'The fastest horse ever recorded reached 55 mph (88 km/h). Even at a comfortable gallop, horses can sustain speeds of 25–30 mph.',
  },
  {
    icon: '🧠',
    title: 'Highly Intelligent',
    description: 'Horses have excellent memories, can recognize human emotions, and communicate through subtle body language, ear positions, and vocalizations.',
  },
  {
    icon: '👁️',
    title: 'Wide Vision',
    description: 'With eyes on the sides of their heads, horses have nearly 360-degree vision — one of the widest fields of view of any land mammal.',
  },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-saddle font-semibold tracking-widest uppercase text-sm mb-3">
            About Horses
          </p>
          <h2 id="about-title" className="font-playfair text-4xl md:text-5xl font-bold text-bark mb-6">
            Magnificent Creatures
          </h2>
          <p className="text-stone-custom text-lg max-w-2xl mx-auto leading-relaxed">
            From wild mustangs roaming open plains to elegant warmbloods in the show ring, horses embody freedom, strength, and beauty in every form.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <img
              alt="Horse in a field"
              className="w-full h-full object-cover"
              data-strk-img-id="about-img-d4e5f6"
              data-strk-img="[about-title] horse grazing in golden field"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div>
            <h3 id="about-subtitle" className="font-playfair text-3xl font-bold text-bark mb-5">
              A Partnership Through the Ages
            </h3>
            <p className="text-stone-custom text-base leading-relaxed mb-4">
              For millennia, horses have been our companions in war, agriculture, sport, and exploration. They carried knights into battle, pulled plows across fields, and raced across finish lines to the roar of crowds.
            </p>
            <p className="text-stone-custom text-base leading-relaxed mb-6">
              Today, horses continue to play vital roles in equestrian sports, therapy programs, ranching, and as beloved companions. Their sensitivity and intelligence make them uniquely attuned to human emotion.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="font-playfair text-3xl font-bold text-saddle">350+</p>
                <p className="text-stone-custom text-sm">Recognized Breeds</p>
              </div>
              <div>
                <p className="font-playfair text-3xl font-bold text-saddle">6,000</p>
                <p className="text-stone-custom text-sm">Years of Partnership</p>
              </div>
              <div>
                <p className="font-playfair text-3xl font-bold text-saddle">60M+</p>
                <p className="text-stone-custom text-sm">Horses Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Facts grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact) => (
            <div
              key={fact.title}
              className="bg-mist border border-hay/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{fact.icon}</div>
              <h4 className="font-playfair text-lg font-bold text-bark mb-2">{fact.title}</h4>
              <p className="text-stone-custom text-sm leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
