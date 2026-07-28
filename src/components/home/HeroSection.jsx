import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, Shield, Truck, Search } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-slate-900">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/75" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            We help overseas buyers find reliable suppliers, verify factories, 
            inspect quality, follow production, and coordinate shipping from China. 
            One partner, end-to-end sourcing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base">
                Get a Free Sourcing Quote
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base">
                How It Works
              </Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-12">
            {[
              { icon: Search, text: 'Supplier Verification' },
              { icon: Shield, text: 'Factory Audits' },
              { icon: CheckCircle, text: 'Quality Control' },
              { icon: Truck, text: 'Shipping Support' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-slate-400">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}