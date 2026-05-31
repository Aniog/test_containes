import { useEffect, useRef } from 'react';
import { Music, BookOpen, Palette, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const culturePillars = [
  {
    id: 'resonance-music',
    icon: Music,
    name: 'Resonance Music',
    desc: 'Abyssian music is composed in frequencies inaudible to surface humans — deep infrasonic waves felt through the body rather than heard. Concerts are experienced as full-body immersions, with entire cities vibrating in harmonic unison during the Festival of Tides.',
    imgId: 'culture-music-img-e4f5g6',
    titleId: 'culture-music-title',
    descId: 'culture-music-desc',
  },
  {
    id: 'living-art',
    icon: Palette,
    name: 'Living Art',
    desc: 'Abyssian artists sculpt with living organisms — engineered bioluminescent creatures arranged into vast, breathing installations. The Great Gallery of Pelagara spans 40 kilometers of cavern wall, its exhibits alive and slowly evolving over centuries.',
    imgId: 'culture-art-img-h7i8j9',
    titleId: 'culture-art-title',
    descId: 'culture-art-desc',
  },
  {
    id: 'memory-literature',
    icon: BookOpen,
    name: 'Memory Literature',
    desc: 'Abyssian stories are not written or spoken — they are encoded in bio-crystalline memory stones and experienced directly through neural interface. A single "novel" can contain the complete sensory experience of a lifetime, shared mind-to-mind.',
    imgId: 'culture-lit-img-k1l2m3',
    titleId: 'culture-lit-title',
    descId: 'culture-lit-desc',
  },
];

const festivals = [
  { name: 'Festival of Tides', period: 'Every 7 Years', desc: 'A 30-day celebration marking the alignment of deep ocean currents. All cities synchronize their bioluminescent grids into a single, civilization-wide light display visible from space.' },
  { name: 'The Deep Remembrance', period: 'Annual', desc: 'A day of silence and reflection honoring the founders who survived the Great Submersion. Citizens disconnect from the Neural Web for 24 hours.' },
  { name: 'Bloom Season', period: 'Quarterly', desc: 'When engineered coral blooms across the city domes, releasing bioluminescent spores that drift through the water like snow. Markets, music, and communal feasting fill the streets.' },
  { name: 'The Ascent Games', period: 'Every 4 Years', desc: 'Athletic competitions testing strength, endurance, and intelligence in deep-ocean conditions. The ultimate test: an unassisted ascent to 1,000m depth and return.' },
];

const CultureSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="culture" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-deep-navy relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-glow-aqua/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-heading text-bio-cyan uppercase tracking-[0.3em] text-xs font-semibold">Heritage</span>
          <h2 className="font-display text-4xl md:text-5xl text-pearl mt-3 tracking-wide">Culture & Arts</h2>
          <p className="text-muted-slate mt-4 max-w-2xl mx-auto font-sans leading-relaxed">
            Fourteen millennia of isolation have produced a culture of extraordinary depth and originality — art forms, traditions, and philosophies that have no parallel on the surface world.
          </p>
        </div>

        {/* Culture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {culturePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group border border-bio-cyan/15 bg-ocean-dark/60 backdrop-blur-md rounded-2xl overflow-hidden hover:border-bio-cyan/35 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={pillar.name}
                    data-strk-img-id={pillar.imgId}
                    data-strk-img={`[${pillar.descId}] [${pillar.titleId}] [culture-section-label]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark via-ocean-dark/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-bio-cyan/20 border border-bio-cyan/30 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-bio-cyan" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 id={pillar.titleId} className="font-display text-xl text-pearl mb-3 tracking-wide">{pillar.name}</h3>
                  <p id={pillar.descId} className="font-sans text-muted-slate text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hidden label for image context */}
        <span id="culture-section-label" className="hidden">Abyssian deep ocean civilization culture arts bioluminescent</span>

        {/* Festivals */}
        <div className="border border-bio-cyan/10 bg-midnight/30 rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-5 h-5 text-bio-cyan" />
            <h3 className="font-display text-2xl text-pearl tracking-wide">Sacred Festivals</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {festivals.map((fest) => (
              <div key={fest.name} className="border-l-2 border-bio-cyan/30 pl-5 hover:border-bio-cyan/60 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-heading text-sm font-semibold text-pearl">{fest.name}</h4>
                  <span className="font-heading text-xs text-glow-aqua bg-glow-aqua/10 border border-glow-aqua/20 rounded-full px-2 py-0.5">{fest.period}</span>
                </div>
                <p className="font-sans text-muted-slate text-sm leading-relaxed">{fest.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="mt-12 text-center border border-bio-cyan/10 bg-ocean-dark/40 rounded-2xl p-8 md:p-12">
          <div className="w-12 h-12 rounded-full bg-bio-cyan/10 border border-bio-cyan/20 flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-6 h-6 text-bio-cyan" />
          </div>
          <blockquote className="font-display text-xl md:text-2xl text-pearl/90 italic max-w-3xl mx-auto leading-relaxed mb-4">
            "Darkness is not the absence of light. It is the canvas upon which all light becomes meaningful."
          </blockquote>
          <cite className="font-heading text-xs text-muted-slate uppercase tracking-widest">
            — The Abyssian Book of Depths, Volume I
          </cite>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
