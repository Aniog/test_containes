import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield, Settings, Factory } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Button } from "@/components/ui/Button.jsx";

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-foreground/60"
          data-strk-bg-id="hero-bg-artitect-1"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold text-background tracking-tighter mb-6 uppercase">
              Precision <span className="text-primary italic">Folding</span> Excellence
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-white mb-10 font-light leading-relaxed">
              Industrial-grade double folding machines and sheet metal solutions engineered for accuracy and longevity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/products">Explore Our Models</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-transparent text-white border-white hover:bg-white hover:text-foreground">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Advanced Automation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrated PLC systems with intuitive touch-screen controls allow for precise bending and rapid repeatability.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Rigid Durability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Heavy-duty steel frame construction ensures minimal deflection even under maximum load for consistent results.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <Factory className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Industry Standards</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our machines meet all international safety and quality certifications, trusted by workshops worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 uppercase tracking-tighter">Ready to Upgrade Your Production?</h2>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get Expert Advice <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
