import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '12', unit: 'acres', label: 'of fruit orchards' },
  { value: '30+', unit: 'varieties', label: 'of fruit grown' },
  { value: '100%', unit: 'organic', label: 'certified farming' },
  { value: '2019', unit: 'founded', label: 'family-run since' },
];

const seasons = [
  {
    season: 'Spring',
    emoji: '🌸',
    fruits: ['Strawberry', 'Rhubarb', 'Lychee'],
    description: 'The orchards wake up with the first blossoms. Strawberries ripen slowly in the cool spring air, developing a deep, natural sweetness.',
  },
  {
    season: 'Summer',
    emoji: '☀️',
    fruits: ['Mango', 'Peach', 'Watermelon', 'Passionfruit'],
    description: 'Our busiest season. Long sunny days bring out the bold tropical flavours that make our summer blends so popular.',
  },
  {
    season: 'Autumn',
    emoji: '🍂',
    fruits: ['Apple', 'Pear', 'Plum', 'Pomegranate'],
    description: 'Harvest time. The orchard turns golden and we pick at peak ripeness to capture the warm, spiced notes of autumn.',
  },
  {
    season: 'Winter',
    emoji: '❄️',
    fruits: ['Blood Orange', 'Cranberry', 'Clementine'],
    description: 'Citrus season. Bright, zesty fruits cut through the cold and give our winter teas their signature warming tang.',
  },
];

const team = [
  {
    name: 'Clara & Tom Bloom',
    role: 'Founders & Head Growers',
    bio: 'Clara and Tom left city careers in 2019 to pursue their dream of growing fruit the right way — slowly, naturally, and with deep respect for the land.',
    imgId: 'team-clara-tom-a1b2c3',
  },
  {
    name: 'Mei Lin',
    role: 'Head of Tea Blending',
    bio: "With 15 years of experience in artisan tea, Mei brings a master blender's precision to every Sip & Bloom recipe.",
    imgId: 'team-mei-d4e5f6',
  },
  {
    name: 'Ravi Patel',
    role: 'Sustainability Lead',
    bio: 'Ravi oversees our organic certification, composting programme, and the solar panels that power our entire packing facility.',
    imgId: 'team-ravi-g7h8i9',
  },
];

const FarmPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-cream">

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-charcoal"
          data-strk-bg-id="farm-hero-bg-j1k2l3"
          data-strk-bg="[farm-hero-subtitle] [farm-hero-title] fruit orchard farm aerial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-20">
          <span className="inline-block bg-coral text-white text-xs font-body font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            Our Farm
          </span>
          <h1 id="farm-hero-title" className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Where Every Sip Begins
          </h1>
          <p id="farm-hero-subtitle" className="font-body text-white/80 text-lg md:text-xl max-w-xl">
            Nestled in the rolling hills of the countryside, our family farm is the heart of everything we do.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-coral">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/30">
          {stats.map(({ value, unit, label }) => (
            <div key={label} className="text-center md:px-8">
              <p className="font-display text-3xl md:text-4xl font-bold text-white">
                {value} <span className="text-white/70 text-xl font-normal">{unit}</span>
              </p>
              <p className="font-body text-white/70 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Land */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <span className="inline-block bg-leaf-light text-coral text-xs font-body font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              The Land
            </span>
            <h2 id="farm-land-title" className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
              12 Acres of Pure Fruit
            </h2>
            <p id="farm-land-subtitle" className="font-body text-muted text-lg leading-relaxed mb-5">
              Our farm sits on 12 acres of rich, well-drained soil that has been cultivated organically since day one. No pesticides, no synthetic fertilisers — just healthy soil, clean water, and patient growing.
            </p>
            <p className="font-body text-muted text-base leading-relaxed mb-5">
              We rotate our crops seasonally to keep the land fertile and plant companion flowers throughout the orchards to attract natural pollinators. The result is fruit that is richer in flavour and kinder to the environment.
            </p>
            <p className="font-body text-muted text-base leading-relaxed">
              Every fruit is hand-picked at peak ripeness, then processed within 24 hours to lock in the freshness you taste in every cup.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              alt="Fruit orchard rows"
              className="w-full h-full object-cover"
              data-strk-img-id="farm-land-img-m4n5o6"
              data-strk-img="[farm-land-subtitle] [farm-land-title] organic fruit orchard rows"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
      </section>

      {/* Seasons */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-petal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-white text-coral text-xs font-body font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              Growing Calendar
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
              A Year on the Farm
            </h2>
            <p className="font-body text-muted text-lg max-w-xl mx-auto">
              Our blends follow the seasons. Here's what's growing when.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasons.map(({ season, emoji, fruits, description }) => (
              <div key={season} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">{season}</h3>
                <p className="font-body text-muted text-sm leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {fruits.map((fruit) => (
                    <span key={fruit} className="bg-leaf-light text-coral text-xs font-body font-semibold px-3 py-1 rounded-full">
                      {fruit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] order-2 md:order-1">
            <img
              alt="Sustainable farming practices"
              className="w-full h-full object-cover"
              data-strk-img-id="farm-sustain-img-p7q8r9"
              data-strk-img="[farm-sustain-subtitle] [farm-sustain-title] sustainable eco farming compost solar"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="inline-block bg-leaf-light text-coral text-xs font-body font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              Sustainability
            </span>
            <h2 id="farm-sustain-title" className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Good for You, Good for the Planet
            </h2>
            <p id="farm-sustain-subtitle" className="font-body text-muted text-lg leading-relaxed mb-5">
              We believe a great cup of tea shouldn't cost the earth — literally. That's why sustainability is baked into every decision we make on the farm.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { icon: '☀️', title: 'Solar-Powered Packing', desc: '100% of our packing facility runs on rooftop solar panels installed in 2022.' },
                { icon: '💧', title: 'Rainwater Harvesting', desc: 'We collect and filter rainwater for all irrigation, reducing mains water use by 80%.' },
                { icon: '🌿', title: 'Zero-Waste Composting', desc: 'All fruit offcuts and tea waste are composted back into the farm soil.' },
                { icon: '📦', title: 'Compostable Packaging', desc: 'Every cup, lid, and bag we use is certified home-compostable.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">{icon}</span>
                  <div>
                    <p className="font-display font-bold text-charcoal text-base mb-1">{title}</p>
                    <p className="font-body text-muted text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-petal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-white text-coral text-xs font-body font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              The People
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Meet the Team
            </h2>
            <p className="font-body text-muted text-lg max-w-xl mx-auto">
              Small team, big passion. Every person here cares deeply about what goes into your cup.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map(({ name, role, bio, imgId }) => {
              const nameId = `name-${imgId}`;
              const roleId = `role-${imgId}`;
              return (
                <div key={name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      alt={name}
                      className="w-full h-full object-cover"
                      data-strk-img-id={imgId}
                      data-strk-img={`[${roleId}] [${nameId}] portrait professional`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="p-6">
                    <p id={nameId} className="font-display text-xl font-bold text-charcoal mb-1">{name}</p>
                    <p id={roleId} className="font-body text-coral text-sm font-semibold mb-3">{role}</p>
                    <p className="font-body text-muted text-sm leading-relaxed">{bio}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-coral text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Taste the Farm in Every Cup
        </h2>
        <p className="font-body text-white/80 text-lg mb-8 max-w-lg mx-auto">
          Now you know where it all comes from — explore our full range of fruit teas.
        </p>
        <button
          onClick={goHome}
          className="bg-white text-coral px-8 py-4 rounded-full font-body font-bold text-base hover:bg-leaf-light transition-colors shadow-md"
        >
          Explore Our Teas
        </button>
      </section>

    </div>
  );
};

export default FarmPage;
