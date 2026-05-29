import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, MapPin, Wind, Snowflake, TrendingUp } from 'lucide-react';

const highlights = [
  {
    id: 'hl-everest',
    title: 'Mount Everest',
    subtitle: 'Himalayas, Nepal',
    elevation: '8,849 m',
    imgId: 'home-hl-everest-img',
  },
  {
    id: 'hl-k2',
    title: 'K2',
    subtitle: 'Karakoram, Pakistan',
    elevation: '8,611 m',
    imgId: 'home-hl-k2-img',
  },
  {
    id: 'hl-matterhorn',
    title: 'Matterhorn',
    subtitle: 'Alps, Switzerland',
    elevation: '4,478 m',
    imgId: 'home-hl-matterhorn-img',
  },
];

const stats = [
  { icon: TrendingUp, value: '14', label: 'Eight-thousanders' },
  { icon: MapPin, value: '7', label: 'Continents Covered' },
  { icon: Wind, value: '200+', label: 'Destinations' },
  { icon: Snowflake, value: '50+', label: 'Alpine Activities' },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="home-hero-bg-7f3a2c"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-peak/60 via-peak/40 to-peak/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p
            id="home-hero-subtitle"
            className="text-amber-peak font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Discover the World's Greatest Peaks
          </p>
          <h1
            id="home-hero-title"
            className="font-playfair font-bold text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            Where Earth Touches the Sky
          </h1>
          <p className="text-glacier text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore majestic mountain ranges, plan your next alpine adventure, and join a community passionate about protecting these wild places.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/destinations"
              className="bg-amber-peak text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Destinations <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/activities"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-peak transition-all duration-300"
            >
              View Activities
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-glacier/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-glacier/40 animate-pulse" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-peak py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="w-6 h-6 text-amber-peak mb-2" />
                <span className="font-playfair font-bold text-3xl text-white">{value}</span>
                <span className="text-glacier/70 text-sm mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Peaks */}
      <section className="bg-snow py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-peak font-semibold text-sm uppercase tracking-widest mb-2">
              Featured Peaks
            </p>
            <h2 className="font-playfair font-bold text-4xl text-peak">
              Icons of the Mountain World
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((peak) => (
              <div
                key={peak.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    alt={peak.title}
                    data-strk-img-id={peak.imgId}
                    data-strk-img={`[${peak.id}-subtitle] [${peak.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-peak/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {peak.elevation}
                  </div>
                </div>
                <div className="p-5">
                  <h3 id={`${peak.id}-title`} className="font-playfair font-bold text-xl text-peak mb-1">
                    {peak.title}
                  </h3>
                  <p id={`${peak.id}-subtitle`} className="text-stone text-sm flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {peak.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-alpine font-semibold hover:text-peak transition-colors"
            >
              View all destinations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Adventure CTA */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="home-cta-bg-9b1e4f"
          data-strk-bg="[home-cta-subtitle] [home-cta-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
        />
        <div className="absolute inset-0 bg-peak/75" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <p
            id="home-cta-subtitle"
            className="text-amber-peak font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Your Next Adventure Awaits
          </p>
          <h2
            id="home-cta-title"
            className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6"
          >
            Ready to Conquer New Heights?
          </h2>
          <p className="text-glacier text-lg mb-10">
            From beginner hikes to expert alpine climbs — find the perfect mountain experience for every level.
          </p>
          <Link
            to="/activities"
            className="bg-amber-peak text-white px-10 py-4 rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 inline-flex items-center gap-2"
          >
            Browse Activities <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Conservation Teaser */}
      <section className="bg-summit py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-pine font-semibold text-sm uppercase tracking-widest mb-3">
              Protect What We Love
            </p>
            <h2 className="font-playfair font-bold text-4xl text-peak mb-5">
              Mountains Need Our Help
            </h2>
            <p className="text-stone leading-relaxed mb-6">
              Climate change is reshaping mountain ecosystems at an alarming rate. Glaciers are retreating, habitats are shifting, and communities that depend on these peaks face an uncertain future. Learn how you can make a difference.
            </p>
            <Link
              to="/conservation"
              className="inline-flex items-center gap-2 bg-pine text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition-all duration-300"
            >
              Learn About Conservation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-lg aspect-video w-full">
            <img
              id="home-conservation-img-title"
              alt="Mountain conservation"
              data-strk-img-id="home-conservation-img-3d7c9a"
              data-strk-img="[home-conservation-img-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <span id="home-conservation-img-title" className="hidden">mountain glacier conservation climate change</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
