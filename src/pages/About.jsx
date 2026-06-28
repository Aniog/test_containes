import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const ref = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), []);

  return (
    <div ref={ref} className="bg-velmora-cream pt-32 md:pt-40">
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 text-center pb-20">
        <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold mb-5">Our Story</p>
        <h1
          id="about-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-velmora-ink leading-[1.05]"
        >
          Jewelry, worn into a life.
        </h1>
        <p className="mt-8 text-velmora-muted max-w-2xl mx-auto leading-relaxed">
          Velmora began in a small studio in Lisbon with a single belief: the most beautiful
          jewelry is the kind you never want to take off. Every piece we make is finished by hand,
          plated in 18K gold over solid brass, and priced to be lived with — not locked away.
        </p>
      </section>

      <section className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
        <img
          alt="Velmora atelier"
          data-strk-img-id="about-hero-img"
          data-strk-img="[about-title] artisan jewelry workshop hands gold pieces editorial warm light wide"
          data-strk-img-ratio="16x9"
          data-strk-img-width="2000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="max-w-[900px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="space-y-8 text-velmora-ink/90 leading-relaxed text-lg">
          <p>
            Demi-fine is our love language. It’s the meeting point between fast fashion and the
            jeweler’s case — pieces with the heft, finish, and feel of fine jewelry, at prices
            that feel honest. We make in small batches, source responsibly, and inspect every
            piece by hand before it leaves the atelier.
          </p>
          <p>
            We make jewelry that earns its scratches. That patinas warmly. That gets handed down
            with a story attached. We make it for you.
          </p>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block bg-velmora-ink text-velmora-cream px-9 py-4 text-xs uppercase tracking-[0.3em] hover:bg-velmora-gold-dark transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
