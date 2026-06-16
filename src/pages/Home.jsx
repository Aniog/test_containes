import React from 'react';
import { ArrowRight, Shield, Zap, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Shield className="w-10 h-10 text-amber-700" />,
      title: "Precision Engineering",
      description: "Our machines are built with industrial-grade components for unmatched accuracy in every fold."
    },
    {
      icon: <Zap className="w-10 h-10 text-amber-700" />,
      title: "High Efficiency",
      description: "Optimized workflows and intuitive controls mean more production in less time."
    },
    {
      icon: <Settings className="w-10 h-10 text-amber-700" />,
      title: "Custom Solutions",
      description: "From manual folders to CNC-controlled giants, we have the right machine for your shop."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-slate-900 pointer-events-none"
          data-strk-bg-id="hero-bg-412"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-white">
            <h1 id="hero-title" className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              PRECISION IN <br />
              <span className="text-amber-500">EVERY FOLD.</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              Discover the next generation of double folding machines and sheet metal folders. 
              Built for professionals who demand excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
                View Machines <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-md font-semibold transition-all">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Machine Preview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E"
                alt="Advance Folding Machine"
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
                data-strk-img-id="featured-machine-img"
                data-strk-img="[featured-machine-title] [featured-machine-desc]"
                data-strk-img-ratio="3x2"
                data-strk-img-width="1200"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 id="featured-machine-title" className="text-3xl font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Industrial Power
              </h2>
              <p id="featured-machine-desc" className="text-slate-500 text-lg mb-8 leading-relaxed">
                Elevate your productivity with our comprehensive range of folding machines. 
                From sheet metal folders to CNC double folding giants, we engineering success into every machine.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    {feature.icon}
                    <h3 className="font-bold text-slate-900">{feature.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Specializations</h2>
            <div className="w-20 h-1.5 bg-amber-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Double Folding', 'Sheet Metal Folder', 'Heavy Duty Machines'].map((cat, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl h-64 mb-4">
                  <div 
                    className="absolute inset-0 bg-slate-800 transition-transform duration-500 group-hover:scale-110"
                    data-strk-bg-id={`cat-bg-${i}`}
                    data-strk-bg={`[cat-title-${i}] machinery metal manufacturing`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-6">
                    <h3 id={`cat-title-${i}`} className="text-xl font-bold text-white">{cat}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-3xl md:text-4xl italic font-serif leading-relaxed mb-8">
            "We don't just sell machines; we architect the backbone of modern industrial fabrication."
          </blockquote>
          <p className="text-amber-500 font-bold uppercase tracking-widest text-sm">ARTITECT MACHINERY Founders</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
