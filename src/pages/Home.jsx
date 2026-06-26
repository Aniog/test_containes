import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Drill, Settings, ShieldCheck, Zap } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const features = [
    {
      icon: <Settings className="w-10 h-10 text-accent" />,
      title: 'Precision Engineering',
      desc: 'Our machines are built with sub-millimeter accuracy for the most demanding sheet metal projects.'
    },
    {
      icon: <Zap className="w-10 h-10 text-accent" />,
      title: 'High-Speed Operation',
      desc: 'Optimize your production line with our double folding technology designed for speed and efficiency.'
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-accent" />,
      title: 'Safety First',
      desc: 'Integrated safety systems that protect your workers without compromising on performance.'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-primary/40 z-10"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 -z-10"
          data-strk-bg-id="hero-bg-artitect"
          data-strk-bg="[hero-title] [hero-desc] industrial sheet metal folding machine industrial interior"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-white">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              Precision Bending.<br />
              <span className="text-accent">Redefined.</span>
            </h1>
            <p id="hero-desc" className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              Discover the ARTITECT difference with our advanced double folding machines and sheet metal folders. Engineered for professionals who demand perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products"
                className="bg-accent text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent/90 transition-all flex items-center justify-center gap-2 group"
              >
                Explore Machines <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/20 transition-all text-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="intro-title" className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                Architecting the Future of Metal Fabrication
              </h2>
              <p id="intro-desc" className="text-gray-600 text-lg mb-8 leading-relaxed">
                At ARTITECT MACHINERY, we don't just build machines; we engineer solutions. Our flagship double folding machines represent the pinnacle of sheet metal folding technology, offering unparalleled versatility and speed for modern workshops.
              </p>
              <div className="space-y-4">
                {['Innovative double folder mechanisms', 'User-friendly CNC interface', 'Heavy-duty construction', 'Global support network'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Drill className="w-5 h-5 text-accent" />
                    <span className="font-medium text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  data-strk-img-id="intro-machine-img"
                  data-strk-img="[intro-title] metal folding machine detail close up"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="ARTITECT Folding Machine"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">25+</p>
                <p className="text-sm font-medium opacity-90 uppercase tracking-widest">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16">Why Choose ARTITECT?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Ready to Upgrade Your Production?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Contact our engineering team today for a custom consultation and see how our folders can transform your workflow.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-accent text-white px-10 py-5 rounded-md font-bold text-xl hover:bg-accent/90 transition-all"
          >
            Get Expert Advice
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
