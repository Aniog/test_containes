import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Microscope, Dna, FlaskConical, Eye } from 'lucide-react';

const featuredOrganisms = [
  {
    id: 'tardigrade',
    title: 'Tardigrade',
    subtitle: 'The Water Bear',
    desc: 'Nearly indestructible microscopic animals that survive extreme conditions.',
  },
  {
    id: 'diatom',
    title: 'Diatom',
    subtitle: 'Glass Algae',
    desc: 'Single-celled algae with intricate silica shells of stunning geometric beauty.',
  },
  {
    id: 'radiolarian',
    title: 'Radiolarian',
    subtitle: 'Ocean Jewel',
    desc: 'Marine protozoa with elaborate mineral skeletons resembling cosmic sculptures.',
  },
  {
    id: 'vorticella',
    title: 'Vorticella',
    subtitle: 'Bell Animalcule',
    desc: 'Ciliated protozoa that attach to surfaces and retract like tiny springs.',
  },
];

const stats = [
  { icon: Microscope, value: '10³⁰', label: 'Microbes on Earth' },
  { icon: Dna, value: '99%', label: 'Of life is microbial' },
  { icon: FlaskConical, value: '3.8B', label: 'Years of evolution' },
  { icon: Eye, value: '0.001mm', label: 'Average bacteria size' },
];

const Home = () => {
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) ImageHelper.loadImages(strkImgConfig, heroRef.current);
    if (featuredRef.current) ImageHelper.loadImages(strkImgConfig, featuredRef.current);
    if (bannerRef.current) ImageHelper.loadImages(strkImgConfig, bannerRef.current);
  }, []);

  return (
    <div className="bg-cosmos-dark text-slate-100">

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="home-hero-bg-a1b2c3"
          data-strk-bg="[home-hero-title] [home-hero-sub]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-dark/60 via-cosmos-dark/40 to-cosmos-dark" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <p id="home-hero-sub" className="text-teal-400 font-heading font-medium tracking-widest uppercase text-sm mb-4">
            The Invisible Universe
          </p>
          <h1 id="home-hero-title" className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-slate-100 leading-tight mb-6">
            Welcome to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              MicroCosmos
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Dive into the breathtaking world of microorganisms — the ancient, resilient, and endlessly fascinating life forms that shape our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/organisms"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-full px-8 py-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(13,148,136,0.4)]"
            >
              Explore Organisms <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 border border-teal-500/60 text-teal-400 hover:bg-teal-500/10 font-medium rounded-full px-8 py-3 transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-teal-500/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-teal-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-cosmos-navy border-y border-teal-900/30 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="w-6 h-6 text-teal-400 mx-auto mb-2" />
              <div className="font-heading font-bold text-2xl text-cyan-300">{value}</div>
              <div className="text-slate-400 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Organisms */}
      <section ref={featuredRef} className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-teal-400 font-heading font-medium tracking-widest uppercase text-sm mb-3">Featured</p>
          <h2 id="featured-section-title" className="font-heading font-bold text-3xl md:text-5xl text-slate-100">
            Remarkable Microorganisms
          </h2>
          <p id="featured-section-sub" className="text-slate-400 mt-4 max-w-xl mx-auto">
            Each microscopic creature tells a story millions of years in the making.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredOrganisms.map((org) => (
            <div
              key={org.id}
              className="group bg-cosmos-blue rounded-2xl overflow-hidden border border-teal-900/40 hover:border-teal-500/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  id={`featured-img-${org.id}`}
                  alt={org.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={`featured-org-${org.id}-d4e5f6`}
                  data-strk-img={`[featured-org-desc-${org.id}] [featured-org-title-${org.id}] [featured-section-sub] [featured-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-blue/80 to-transparent" />
              </div>
              <div className="p-5">
                <p id={`featured-org-title-${org.id}`} className="font-heading font-bold text-lg text-slate-100">{org.title}</p>
                <p className="text-teal-400 text-xs font-medium mb-2">{org.subtitle}</p>
                <p id={`featured-org-desc-${org.id}`} className="text-slate-400 text-sm leading-relaxed">{org.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/organisms"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-cyan-300 font-medium transition-colors"
          >
            See all organisms <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Full-width Banner Image */}
      <section ref={bannerRef} className="relative h-96 md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="home-banner-bg-g7h8i9"
          data-strk-bg="[home-banner-title] [home-banner-sub]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-cosmos-dark/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p id="home-banner-sub" className="text-teal-400 font-heading tracking-widest uppercase text-sm mb-3">
            Microscopy Photography
          </p>
          <h2 id="home-banner-title" className="font-heading font-bold text-3xl md:text-5xl text-slate-100 max-w-2xl">
            Beauty Hidden in Plain Sight
          </h2>
          <Link
            to="/gallery"
            className="mt-8 inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-full px-8 py-3 transition-all duration-300"
          >
            Open Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-100 mb-6">
          A World Beyond the Naked Eye
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
          Microorganisms make up the vast majority of life on Earth. They were the first living things to appear, and they continue to drive every major biological process — from decomposing organic matter to producing the oxygen we breathe.
        </p>
        <p className="text-slate-400 text-base leading-relaxed max-w-3xl mx-auto">
          MicroCosmos is your window into this invisible universe. Through stunning microscopy imagery and in-depth exploration, we reveal the extraordinary complexity and beauty of life at the microscopic scale.
        </p>
        <div className="mt-10">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 border border-teal-500/60 text-teal-400 hover:bg-teal-500/10 font-medium rounded-full px-8 py-3 transition-all duration-300"
          >
            Start Exploring <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
