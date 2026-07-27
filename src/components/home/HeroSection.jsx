import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 text-white overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <Globe className="w-4 h-4" />
              <span>Trusted by 500+ Global Buyers</span>
            </div>

            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              China Sourcing Agent for <span className="text-blue-400">Global Buyers</span>
            </h1>

            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 max-w-xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 border-white/30 text-white hover:bg-white/10">
                  See How It Works
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-5 h-5 text-blue-400" />
                <span>Local Team</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="w-5 h-5 text-blue-400" />
                <span>Global Shipping</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              data-strk-bg-id="hero-bg-a1b2c3"
              data-strk-bg="[hero-subtitle] [hero-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
