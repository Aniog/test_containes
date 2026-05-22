import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const ref = useRef(null);
  useEffect(() => { ImageHelper.loadImages(strkImgConfig, ref.current); }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-end overflow-hidden bg-black">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-32 w-full">
        <p id="hero-subtitle" className="text-xs tracking-widest uppercase text-neutral-400 mb-6">
          Explore the Invisible World
        </p>
        <h1 id="hero-title" className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none mb-8 max-w-4xl">
          Micro&shy;universe
        </h1>
        <p className="text-neutral-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          A visual journey into the hidden realms of nature — where the smallest structures reveal the most extraordinary beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/gallery"
            className="inline-block bg-white text-black px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-neutral-200 transition-colors text-center"
          >
            View Gallery
          </Link>
          <a
            href="#about"
            className="inline-block border border-white text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-colors text-center"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  useEffect(() => { ImageHelper.loadImages(strkImgConfig, ref.current); }, []);

  return (
    <section id="about" ref={ref} className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p id="about-label" className="text-xs tracking-widest uppercase text-neutral-500 mb-4">About the Project</p>
            <h2 id="about-title" className="text-4xl md:text-5xl font-black tracking-tighter text-black leading-tight mb-6">
              Beauty Beyond the Naked Eye
            </h2>
            <p id="about-desc" className="text-neutral-600 text-base leading-relaxed mb-6">
              Microuniverse is a photographic exploration of the microscopic world — from crystalline mineral formations and cellular structures to the intricate geometry of insects and plant life.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed mb-10">
              Using advanced macro and electron microscopy techniques, we reveal the astonishing complexity hidden within everyday objects, transforming science into art.
            </p>
            <Link
              to="/gallery"
              className="inline-block bg-black text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors"
            >
              Explore Gallery
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="overflow-hidden aspect-[3/4]">
              <img
                alt="Microscopic crystal structure"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-1-d4e5f6"
                data-strk-img="[about-desc] [about-title] microscopic crystal structure"
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="overflow-hidden aspect-[3/4] mt-8">
              <img
                alt="Microscopic cell structure"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-2-g7h8i9"
                data-strk-img="[about-desc] [about-title] microscopic cell biology"
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedSection = () => {
  const ref = useRef(null);
  useEffect(() => { ImageHelper.loadImages(strkImgConfig, ref.current); }, []);

  const featured = [
    { id: 'feat-1', imgId: 'feat-img-j1k2l3', title: 'Crystalline Formations', subtitle: 'Mineral Structures', query: 'crystalline mineral formations macro photography' },
    { id: 'feat-2', imgId: 'feat-img-m4n5o6', title: 'Cellular Worlds', subtitle: 'Biology & Life', query: 'microscopic cell biology colorful fluorescence' },
    { id: 'feat-3', imgId: 'feat-img-p7q8r9', title: 'Insect Architecture', subtitle: 'Entomology', query: 'macro insect eye compound close-up photography' },
  ];

  return (
    <section ref={ref} className="bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div>
            <p className="text-xs tracking-widest uppercase text-neutral-500 mb-3">Featured Series</p>
            <h2 id="featured-title" className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
              Worlds Within Worlds
            </h2>
          </div>
          <Link
            to="/gallery"
            className="inline-block border border-neutral-700 text-neutral-400 px-6 py-3 text-xs font-semibold tracking-widest uppercase hover:border-white hover:text-white transition-colors self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {featured.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[4/5] mb-4">
                <img
                  id={item.id}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}] [featured-title] ${item.query}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <p className="text-xs tracking-widest uppercase text-neutral-500 mb-1">{item.subtitle}</p>
              <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => (
  <section className="bg-[#0a0a0a] border-y border-neutral-800 py-16 md:py-20">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {[
          { value: '2,400+', label: 'Photographs' },
          { value: '180×', label: 'Max Magnification' },
          { value: '12', label: 'Subject Categories' },
          { value: '6', label: 'Years of Research' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">{stat.value}</p>
            <p className="text-xs tracking-widest uppercase text-neutral-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ExploreSection = () => {
  const ref = useRef(null);
  useEffect(() => { ImageHelper.loadImages(strkImgConfig, ref.current); }, []);

  const categories = [
    { id: 'cat-minerals', imgId: 'explore-img-s1t2u3', title: 'Minerals & Crystals', count: '340 images', query: 'colorful mineral crystal macro photography gemstone' },
    { id: 'cat-biology', imgId: 'explore-img-v4w5x6', title: 'Cell Biology', count: '520 images', query: 'fluorescent cell biology microscopy colorful' },
    { id: 'cat-insects', imgId: 'explore-img-y7z8a9', title: 'Insects & Arachnids', count: '280 images', query: 'macro insect close-up photography colorful' },
    { id: 'cat-plants', imgId: 'explore-img-b1c2d3', title: 'Plant Microstructures', count: '410 images', query: 'macro plant pollen spore microscopy colorful' },
    { id: 'cat-water', imgId: 'explore-img-e4f5g6', title: 'Water & Ice', count: '190 images', query: 'macro water droplet ice crystal snowflake colorful' },
    { id: 'cat-materials', imgId: 'explore-img-h7i8j9', title: 'Materials Science', count: '260 images', query: 'electron microscopy material surface texture colorful' },
  ];

  return (
    <section ref={ref} className="bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <p className="text-xs tracking-widest uppercase text-neutral-500 mb-3">Browse by Category</p>
          <h2 id="explore-title" className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
            Explore the Collection
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link to="/gallery" key={cat.id} className="group relative overflow-hidden aspect-[4/3] block">
              <img
                id={cat.id}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.id}] [explore-title] ${cat.query}`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs tracking-widest uppercase text-neutral-400 mb-1">{cat.count}</p>
                <h3 className="text-lg font-bold text-white tracking-tight">{cat.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuoteSection = () => {
  const ref = useRef(null);
  useEffect(() => { ImageHelper.loadImages(strkImgConfig, ref.current); }, []);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="quote-bg-k1l2m3"
        data-strk-bg="[quote-text] microscopic nature abstract colorful"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <p id="quote-text" className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-8">
          "The universe is not only stranger than we imagine — it is stranger than we can imagine."
        </p>
        <p className="text-xs tracking-widest uppercase text-neutral-400">— J.B.S. Haldane</p>
      </div>
    </section>
  );
};

const LatestSection = () => {
  const ref = useRef(null);
  useEffect(() => { ImageHelper.loadImages(strkImgConfig, ref.current); }, []);

  const latest = [
    { id: 'latest-1', imgId: 'latest-img-n4o5p6', title: 'Diatom Symmetry', date: 'May 2026', query: 'diatom algae microscopy symmetry colorful' },
    { id: 'latest-2', imgId: 'latest-img-q7r8s9', title: 'Butterfly Wing Scales', date: 'April 2026', query: 'butterfly wing scale macro photography colorful iridescent' },
    { id: 'latest-3', imgId: 'latest-img-t1u2v3', title: 'Salt Crystal Lattice', date: 'April 2026', query: 'salt crystal lattice macro photography colorful' },
    { id: 'latest-4', imgId: 'latest-img-w4x5y6', title: 'Pollen Grains', date: 'March 2026', query: 'pollen grain macro photography colorful microscopy' },
  ];

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <p className="text-xs tracking-widest uppercase text-neutral-500 mb-3">Recently Added</p>
            <h2 id="latest-title" className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
              Latest Captures
            </h2>
          </div>
          <Link
            to="/gallery"
            className="inline-block border border-neutral-700 text-neutral-400 px-6 py-3 text-xs font-semibold tracking-widest uppercase hover:border-white hover:text-white transition-colors self-start md:self-auto"
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {latest.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="overflow-hidden aspect-square mb-3">
                <img
                  id={item.id}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}] [latest-title] ${item.query}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <p className="text-xs text-neutral-500 mb-1">{item.date}</p>
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="bg-white py-20 md:py-32">
    <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
      <p className="text-xs tracking-widest uppercase text-neutral-500 mb-4">Join the Journey</p>
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-tight mb-6">
        See the World Differently
      </h2>
      <p className="text-neutral-600 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
        Dive into our full collection of over 2,400 microscopic photographs spanning minerals, biology, insects, and beyond.
      </p>
      <Link
        to="/gallery"
        className="inline-block bg-black text-white px-10 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors"
      >
        Enter the Gallery
      </Link>
    </div>
  </section>
);

const Home = () => (
  <div className="bg-black">
    <HeroSection />
    <AboutSection />
    <FeaturedSection />
    <StatsSection />
    <ExploreSection />
    <QuoteSection />
    <LatestSection />
    <CTASection />
  </div>
);

export default Home;
