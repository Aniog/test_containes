import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import { ArrowRight, Microscope, Dna, FlaskConical, Eye } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';

const featuredOrganisms = [
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    subtitle: 'The Water Bear',
    desc: 'Nearly indestructible microscopic animals that survive extreme conditions — from deep space vacuum to boiling water.',
    tag: 'Micro-animal',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    subtitle: 'Glass Sculptor',
    desc: 'Single-celled algae encased in intricate silica shells, forming some of the most beautiful geometric patterns in nature.',
    tag: 'Algae',
  },
  {
    id: 'radiolarian',
    name: 'Radiolarian',
    subtitle: 'Ocean Architect',
    desc: 'Amoeboid protozoa that produce elaborate mineral skeletons, creating stunning star-like structures visible only under a microscope.',
    tag: 'Protozoa',
  },
];

const stats = [
  { icon: Microscope, value: '8 Billion+', label: 'Microbes per gram of soil' },
  { icon: Dna, value: '37 Trillion', label: 'Microbial cells in the human body' },
  { icon: FlaskConical, value: '1 Trillion+', label: 'Estimated microbial species' },
  { icon: Eye, value: '0.001mm', label: 'Smallest visible bacterium' },
];

const Home = () => {
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const statsRef = useRef(null);
  const discoverRef = useRef(null);

  useEffect(() => {
    [heroRef, featuredRef, statsRef, discoverRef].forEach(ref => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current);
    });
  }, []);

  return (
    <div className="bg-[#050d12]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="home-hero-bg-a1b2c3"
          data-strk-bg="[home-hero-title] [home-hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d12]/60 via-[#050d12]/40 to-[#050d12]" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block text-xs tracking-widest uppercase text-[#00c9b1] mb-6 font-medium">
            The Invisible World
          </span>
          <h1 id="home-hero-title" className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Welcome to the <span className="text-[#00c9b1]">MicroCosmos</span>
          </h1>
          <p id="home-hero-subtitle" className="text-lg md:text-xl text-[#7fb3c8] max-w-2xl mx-auto mb-10 leading-relaxed">
            Dive into the breathtaking universe of microscopic life — bacteria, fungi, protozoa, and beyond. A world teeming with complexity, beauty, and wonder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 bg-[#00c9b1] hover:bg-cyan-300 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,201,177,0.4)]"
            >
              Start Exploring <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 border border-[#00c9b1] text-[#00c9b1] hover:bg-[#00c9b1]/10 font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#7fb3c8]/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#00c9b1] rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 px-6 bg-[#0a1a24] border-y border-[#1a3a4a]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="w-7 h-7 text-[#00c9b1] mx-auto mb-3" />
              <div className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">{value}</div>
              <div className="text-sm text-[#7fb3c8]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Organisms */}
      <section ref={featuredRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase text-[#00c9b1] font-medium">Featured Organisms</span>
            <h2 id="featured-section-title" className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              Remarkable Micro-Life
            </h2>
            <p id="featured-section-desc" className="text-[#7fb3c8] max-w-xl mx-auto text-lg">
              Meet some of the most extraordinary creatures that exist beyond the naked eye.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredOrganisms.map((org) => (
              <div
                key={org.id}
                className="group bg-[#0f2233] border border-[#1a3a4a] rounded-2xl overflow-hidden hover:border-[#00c9b1]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,201,177,0.1)]"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    alt={org.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={`featured-${org.id}-img-x9y8z7`}
                    data-strk-img={`[featured-${org.id}-desc] [featured-${org.id}-name] [featured-section-desc] [featured-section-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2233] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-xs tracking-widest uppercase bg-[#00c9b1]/20 text-[#00c9b1] border border-[#00c9b1]/30 px-3 py-1 rounded-full">
                    {org.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 id={`featured-${org.id}-name`} className="font-heading text-xl font-bold text-white mb-1">{org.name}</h3>
                  <p className="text-[#00c9b1] text-sm mb-3">{org.subtitle}</p>
                  <p id={`featured-${org.id}-desc`} className="text-[#7fb3c8] text-sm leading-relaxed">{org.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 border border-[#1a3a4a] hover:border-[#00c9b1]/50 text-[#7fb3c8] hover:text-white px-8 py-4 rounded-full transition-all duration-300"
            >
              Explore All Organisms <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Discovery Banner */}
      <section ref={discoverRef} className="py-24 px-6 bg-[#0a1a24]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs tracking-widest uppercase text-[#00c9b1] font-medium">Science & Discovery</span>
              <h2 id="discover-title" className="font-heading text-4xl font-bold text-white mt-3 mb-6 leading-tight">
                A Universe Hidden in Plain Sight
              </h2>
              <p id="discover-desc" className="text-[#7fb3c8] text-lg leading-relaxed mb-6">
                Microbiology has transformed our understanding of life itself. From the discovery of bacteria by Antonie van Leeuwenhoek in 1676 to modern electron microscopy revealing nanoscale structures, each advance opens new windows into the invisible world.
              </p>
              <p className="text-[#7fb3c8] text-lg leading-relaxed mb-8">
                Today, scientists use cutting-edge imaging techniques to capture the stunning beauty of organisms too small to see — revealing a cosmos of complexity that rivals anything visible to the naked eye.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#00c9b1] hover:text-cyan-300 font-semibold transition-colors"
              >
                Learn More About Microbiology <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-48 col-span-2">
                <img
                  alt="Microscopy science"
                  className="w-full h-full object-cover"
                  data-strk-img-id="discover-img1-p3q4r5"
                  data-strk-img="[discover-desc] [discover-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-40">
                <img
                  alt="Bacteria under microscope"
                  className="w-full h-full object-cover"
                  data-strk-img-id="discover-img2-s6t7u8"
                  data-strk-img="bacteria microscope science laboratory"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-40">
                <img
                  alt="Microscope laboratory"
                  className="w-full h-full object-cover"
                  data-strk-img-id="discover-img3-v9w0x1"
                  data-strk-img="electron microscope laboratory research"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Explore the <span className="text-[#00c9b1]">Invisible</span>?
          </h2>
          <p className="text-[#7fb3c8] text-lg mb-10">
            Browse our gallery of stunning microscopy images and discover the organisms that share our world.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-[#00c9b1] hover:bg-cyan-300 text-black font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,201,177,0.4)] text-lg"
          >
            Enter the Gallery <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
