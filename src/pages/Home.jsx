import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Zap, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white flex items-center justify-center min-h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-bg-artitect-1"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Precision <span className="text-blue-400">Sheet Metal</span> Folding
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            State-of-the-art double folding machines engineered for maximum productivity, reliability, and precision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-medium">
              <Link to="/products">
                Explore Products <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg border-2 border-white text-slate-800 hover:bg-slate-100 hover:text-slate-900 font-medium">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Artitect Advantage</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Engineered to exceed industry standards and tackle the toughest folding challenges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="w-12 h-12 text-blue-500 mb-6" />,
                titleId: "feature-1-title",
                descId: "feature-1-desc",
                title: "Unmatched Speed",
                desc: "Our double folders reduce material handling time, significantly increasing your production throughput."
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-blue-500 mb-6" />,
                titleId: "feature-2-title",
                descId: "feature-2-desc",
                title: "Rugged Durability",
                desc: "Built with heavy-duty frames and premium components to withstand continuous, rigorous operation."
              },
              {
                icon: <Settings className="w-12 h-12 text-blue-500 mb-6" />,
                titleId: "feature-3-title",
                descId: "feature-3-desc",
                title: "Precision Control",
                desc: "Advanced CNC systems provide intuitive operation and exact bending angles for flawless results."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                {feature.icon}
                <h3 id={feature.titleId} className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p id={feature.descId} className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Machine Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 id="featured-machine-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">ProFold Series X2</h2>
              <p id="featured-machine-desc" className="text-lg text-gray-600 mb-8 leading-relaxed">
                The flagship of our double folding machine lineup. The ProFold Series X2 offers unparalleled flexibility for creating complex profiles without flipping the material. Ideal for roofing, architectural cladding, and industrial enclosures.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Bending capacity up to 3mm steel",
                  "Working lengths from 3m to 12m",
                  "Fully automatic crowning system",
                  "Touchscreen 3D graphic control"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <ChevronRight className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white">
                <Link to="/products">View All Models</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative bg-slate-100">
                <img
                  className="w-full h-full object-cover"
                  data-strk-img-id="featured-machine-img"
                  data-strk-img="[featured-machine-desc] [featured-machine-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="ProFold Series X2 Double Folding Machine"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Production?</h2>
          <p id="cta-desc" className="text-xl text-blue-100 mb-10">Speak with our engineering team to find the perfect folding machine for your specific facility needs.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-10 py-6 font-semibold">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;