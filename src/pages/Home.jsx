import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Wrench, Award, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  { icon: Shield, title: 'Built to Last', desc: 'Heavy-gauge steel construction for decades of reliable service.' },
  { icon: Wrench, title: 'Precision Engineering', desc: 'CNC-machined components ensure consistent, accurate folds every time.' },
  { icon: Award, title: 'Industry Certified', desc: 'Meets ISO 9001 and CE certification standards for quality assurance.' },
  { icon: Clock, title: 'Fast Turnaround', desc: 'Most machines ship within 2–4 weeks with comprehensive support included.' },
];

const highlights = [
  { title: 'Double Folding Machine', desc: 'High-efficiency dual-action folding for mass production environments.', imgId: 'home-double-folder-a1b2c3' },
  { title: 'Sheet Metal Folder', desc: 'Versatile precision folder for workshops of any size.', imgId: 'home-sheet-folder-d4e5f6' },
  { title: 'Metal Folding Machine', desc: 'Heavy-duty industrial folding for thick gauge materials.', imgId: 'home-metal-folder-g7h8i9' },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-navy-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            data-strk-bg-id="home-hero-bg-8f2a9c"
            data-strk-bg="[home-hero-subtitle] [home-hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="w-full h-full"
          />
        </div>
        <div className="relative section-padding container-wide flex flex-col items-start justify-center min-h-[70vh]">
          <div className="w-16 h-0.5 bg-brass-500 mb-6" />
          <h1
            id="home-hero-title"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
          >
            Precision Sheet Metal Folding Machines
          </h1>
          <p
            id="home-hero-subtitle"
            className="mt-6 text-lg md:text-xl text-warm-200 max-w-2xl leading-relaxed"
          >
            ARTITECT MACHINERY engineers industrial-grade double folding machines
            and sheet metal folders built for accuracy, durability, and
            uncompromising performance.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link to="/products" className="btn-brass text-base">
              View Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-navy-800 text-base">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-warm-100">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="w-12 h-0.5 bg-brass-500 mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800">
              Why Choose ARTITECT
            </h2>
            <p className="mt-4 text-navy-500 max-w-xl mx-auto">
              Every machine we build reflects decades of engineering expertise
              and a commitment to industrial excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-navy-800 text-brass-400 mb-5 group-hover:bg-brass-500 group-hover:text-navy-900 transition-colors duration-300">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-navy-800 mb-2">{f.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="w-12 h-0.5 bg-brass-500 mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800">
              Our Machines
            </h2>
            <p className="mt-4 text-navy-500 max-w-xl mx-auto">
              Explore our range of precision folding machines designed for
              demanding industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h) => (
              <div
                key={h.imgId}
                className="group border border-warm-200 rounded-sm overflow-hidden hover:border-brass-300 transition-colors duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-warm-200">
                  <img
                    alt={h.title}
                    data-strk-img-id={h.imgId}
                    data-strk-img={`[home-prod-${h.imgId}-desc] [home-prod-${h.imgId}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3
                    id={`home-prod-${h.imgId}-title`}
                    className="font-display text-xl font-semibold text-navy-800"
                  >
                    {h.title}
                  </h3>
                  <p
                    id={`home-prod-${h.imgId}-desc`}
                    className="mt-2 text-navy-500 text-sm leading-relaxed"
                  >
                    {h.desc}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-brass-600 hover:text-brass-700 transition-colors"
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-outline">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-800 text-center">
        <div className="container-wide max-w-2xl">
          <div className="w-12 h-0.5 bg-brass-500 mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Ready to Upgrade Your Production Line?
          </h2>
          <p className="mt-4 text-warm-200 text-lg leading-relaxed">
            Speak with our engineering team about the right folding solution
            for your facility.
          </p>
          <Link to="/contact" className="btn-brass text-base mt-8 inline-flex">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
