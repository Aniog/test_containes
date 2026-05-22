import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Award, Leaf, Clock } from 'lucide-react';

const stats = [
  { value: '25+', label: 'Years of Craft' },
  { value: '60+', label: 'Menu Items' },
  { value: '500+', label: 'Happy Customers Daily' },
  { value: '100%', label: 'Fresh Ingredients' },
];

const values = [
  {
    icon: Award,
    title: 'Award-Winning Recipes',
    desc: 'Our sourdough and Neapolitan pizza have earned regional recognition for authenticity and flavor.',
  },
  {
    icon: Leaf,
    title: 'Locally Sourced',
    desc: 'We partner with local farms for fresh produce, dairy, and herbs — supporting our community.',
  },
  {
    icon: Clock,
    title: 'Baked Fresh Daily',
    desc: 'Every loaf, pastry, and pizza base is made from scratch each morning before we open our doors.',
  },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Story</p>
          <h2 id="about-title" className="font-serif font-bold text-4xl md:text-5xl text-dark mb-4">
            A Family Tradition Since 1999
          </h2>
          <p id="about-subtitle" className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            From a small neighborhood bakery to a beloved community gathering place, Forno has been serving warmth and flavor for over two decades.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              alt="Artisan baker at work"
              className="w-full h-full object-cover"
              data-strk-img-id="about-img-d4e5f6"
              data-strk-img="[about-subtitle] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-3 shadow-lg">
              <p className="font-serif font-bold text-2xl text-primary">25+</p>
              <p className="text-muted text-xs font-medium">Years of Craft</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="font-serif font-bold text-3xl text-dark mb-5">
              Where Every Bite Tells a Story
            </h3>
            <p className="text-muted leading-relaxed mb-5">
              Forno was born from a simple belief: great food starts with great ingredients and genuine care. Our founder, Maria Rossi, learned the art of bread-making from her grandmother in Naples, bringing those time-honored techniques to our community.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Today, our wood-fired oven — the heart of our kitchen — burns at 900°F to create the perfect Neapolitan crust, while our bakers arrive before dawn to ensure every pastry and loaf is fresh when you walk through our doors.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-5">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark mb-1">{title}</p>
                    <p className="text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center bg-cream rounded-2xl py-8 px-4 border border-warm">
              <p className="font-serif font-bold text-4xl text-primary mb-2">{value}</p>
              <p className="text-muted text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
