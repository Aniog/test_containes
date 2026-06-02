import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: '🔬',
    title: 'Scientific Accuracy',
    desc: 'Every organism is documented with peer-reviewed research and expert-verified data.',
  },
  {
    icon: '🌊',
    title: 'Living Ecosystems',
    desc: 'Discover how microscopic life forms complex, interdependent ecosystems invisible to the naked eye.',
  },
  {
    icon: '🧬',
    title: 'Genetic Wonders',
    desc: 'Explore the DNA and cellular machinery that drives all life on our planet.',
  },
  {
    icon: '🌍',
    title: 'Global Impact',
    desc: 'Understand how microorganisms shape climate, health, and the future of our world.',
  },
];

const highlights = [
  {
    id: 'highlight-bacteria',
    title: 'Bacteria',
    subtitle: 'The Original Life Forms',
    desc: 'Billions of years old, bacteria are the architects of Earth\'s atmosphere and the foundation of all ecosystems.',
    titleId: 'highlight-bacteria-title',
    descId: 'highlight-bacteria-desc',
    imgId: 'home-highlight-bacteria-a1b2c3',
    tag: '3.8 Billion Years Old',
  },
  {
    id: 'highlight-plankton',
    title: 'Phytoplankton',
    subtitle: 'Ocean\'s Invisible Forest',
    desc: 'Responsible for producing over half of Earth\'s oxygen, these microscopic algae sustain all marine life.',
    titleId: 'highlight-plankton-title',
    descId: 'highlight-plankton-desc',
    imgId: 'home-highlight-plankton-d4e5f6',
    tag: '50% of Earth\'s Oxygen',
  },
  {
    id: 'highlight-fungi',
    title: 'Fungi Networks',
    subtitle: 'Nature\'s Internet',
    desc: 'Underground fungal networks connect forests, transferring nutrients and chemical signals across vast distances.',
    titleId: 'highlight-fungi-title',
    descId: 'highlight-fungi-desc',
    imgId: 'home-highlight-fungi-g7h8i9',
    tag: 'Wood Wide Web',
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050d1a] text-[#e2f0ff]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#7c3aed]/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-[#00d4c8]/8 blur-3xl" />

        {/* Hero background image */}
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="home-hero-bg-x1y2z3"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#00d4c8]/10 border border-[#00d4c8]/20 text-[#00d4c8] text-xs font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4c8] animate-pulse" />
            Discover the Invisible Universe
          </div>

          <h1 id="home-hero-title" className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
            The World{' '}
            <span className="gradient-text">Too Small</span>
            <br />
            to See
          </h1>

          <p id="home-hero-subtitle" className="text-[#7ba7cc] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Journey into the microscopic realm — where bacteria, cells, fungi, and plankton
            form the invisible foundation of all life on Earth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/explore"
              className="bg-[#00d4c8] text-[#050d1a] font-semibold px-8 py-4 rounded-full hover:bg-[#00b8ad] transition-all text-base shadow-lg shadow-[#00d4c8]/20"
            >
              Start Exploring
            </Link>
            <Link
              to="/gallery"
              className="border border-[#1a3a5c] text-[#e2f0ff] font-medium px-8 py-4 rounded-full hover:border-[#00d4c8]/50 hover:bg-[#00d4c8]/5 transition-all text-base"
            >
              View Gallery
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 mt-20 max-w-2xl mx-auto">
            {[
              { value: '10³⁰', label: 'Microbes on Earth' },
              { value: '99%', label: 'Life is Microscopic' },
              { value: '3.8B', label: 'Years of Evolution' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-2xl md:text-3xl text-[#00d4c8]">{stat.value}</div>
                <div className="text-[#7ba7cc] text-xs md:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#7ba7cc] text-xs">
          <span>Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#7ba7cc] to-transparent" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-[#00d4c8] text-sm font-medium uppercase tracking-widest">Why MicroCosmos</span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl mt-3 text-[#e2f0ff]">
              Science Meets Wonder
            </h2>
            <p className="text-[#7ba7cc] mt-4 max-w-xl mx-auto">
              We bridge the gap between cutting-edge microbiology and accessible, beautiful storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl p-6 hover:border-[#00d4c8]/40 hover:shadow-lg hover:shadow-[#00d4c8]/5 transition-all group"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-heading font-semibold text-[#e2f0ff] text-lg mb-2 group-hover:text-[#00d4c8] transition-colors">
                  {f.title}
                </h3>
                <p className="text-[#7ba7cc] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 md:py-32 bg-[#0a1628]/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-[#00d4c8] text-sm font-medium uppercase tracking-widest">Featured Worlds</span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl mt-3 text-[#e2f0ff]">
              Meet the Inhabitants
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.id}
                className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl overflow-hidden hover:border-[#00d4c8]/40 hover:shadow-xl hover:shadow-[#00d4c8]/10 transition-all group"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    alt={item.title}
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#00d4c8]/10 border border-[#00d4c8]/20 text-[#00d4c8] text-xs font-medium px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[#7ba7cc] text-xs font-medium uppercase tracking-wider mb-1">{item.subtitle}</p>
                  <h3 id={item.titleId} className="font-heading font-bold text-xl text-[#e2f0ff] mb-3">
                    {item.title}
                  </h3>
                  <p id={item.descId} className="text-[#7ba7cc] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/explore"
              className="border border-[#00d4c8] text-[#00d4c8] font-medium px-8 py-3 rounded-full hover:bg-[#00d4c8]/10 transition-all inline-block"
            >
              Explore All Organisms →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="bg-gradient-to-br from-[#0f2040] to-[#0a1628] border border-[#1a3a5c] rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow opacity-40" />
            <div className="relative z-10">
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#e2f0ff] mb-4">
                Ready to Dive In?
              </h2>
              <p className="text-[#7ba7cc] text-lg mb-8 max-w-xl mx-auto">
                Start your journey through the microscopic world. Thousands of organisms await your discovery.
              </p>
              <Link
                to="/explore"
                className="bg-[#00d4c8] text-[#050d1a] font-semibold px-10 py-4 rounded-full hover:bg-[#00b8ad] transition-all text-base shadow-lg shadow-[#00d4c8]/20 inline-block"
              >
                Begin Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
