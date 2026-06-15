import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";
import { History, Target, Users, Globe } from "lucide-react";

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pb-24">
      {/* Hero */}
      <section className="relative py-32 bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 grayscale"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-title] heavy machinery factory interior"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <h1 id="about-title" className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            Our <span className="text-primary italic">Legacy</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto italic">
            "We don't manufacture tools. We build the foundations of industrial infrastructure."
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-primary/10 border-l-4 border-primary">
              <span className="text-primary text-xs font-black uppercase tracking-widest">Our Philosophy</span>
            </div>
            <h2 id="story-title" className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
              A Masterclass in Industrial <span className="italic">Elegance</span>.
            </h2>
            <p id="story-desc" className="text-lg text-muted-foreground leading-relaxed">
              Founded in 1995, Artitect Machinery began with a single mission: to redefine the capabilities of folding machines. What started as a small engineering consultancy has evolved into a global leader in sheet metal bending technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, Artitect is synonymous with reliability. Our machines are found in the most demanding production lines across 40 countries, helping our clients create everything from architectural facades to aerospace components.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="text-4xl font-black text-primary">25+</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-foreground mt-2">Years of Tech</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-primary">5000+</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-foreground mt-2">Machines Hosted</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              alt="Engineering Precision"
              data-strk-img-id="eng-precision"
              data-strk-img="[story-title] [story-desc] metal folder detail"
              data-strk-img-ratio="1x1"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="relative z-10 grayscale-0 group-hover:grayscale transition-all duration-700"
            />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 -z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-foreground/5 -z-0" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-foreground py-24 text-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 lg:flex gap-16">
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-6">Core Values</h2>
            <p className="text-muted-foreground italic lg:pr-12">
              Our principles are hammered into every piece of steel we use. Integrity, innovation, and impact.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <History className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold uppercase tracking-tight">Precision Heritage</h3>
              <p className="text-muted-foreground text-sm">We honor the traditional art of metalworking while pushing the boundaries of modern CNC automation.</p>
            </div>
            <div className="space-y-4">
              <Target className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold uppercase tracking-tight">Zero-Defect Goal</h3>
              <p className="text-muted-foreground text-sm">Our 100-point inspection ensure every folder leaving our floor meets the Artitect standard of excellence.</p>
            </div>
            <div className="space-y-4">
              <Users className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold uppercase tracking-tight">Operator-First Design</h3>
              <p className="text-muted-foreground text-sm">Machines should serve the makers. We design interface systems that are intuitive and ergonomic.</p>
            </div>
            <div className="space-y-4">
              <Globe className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold uppercase tracking-tight">Global Resilience</h3>
              <p className="text-muted-foreground text-sm">Local support with a global reach. Our service net ensures your production never sleeps, wherever you are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-24 container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <div className="border-2 border-foreground p-12 lg:p-20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:text-white transition-colors">
              Experience The Artitect Standard.
            </h2>
            <Link 
              to="/products"
              className="inline-block px-10 py-4 bg-foreground text-background font-black uppercase tracking-widest group-hover:bg-white group-hover:text-primary transition-all shadow-xl"
            >
              Browse Machine Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
