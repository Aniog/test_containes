import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Zap } from "lucide-react";

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-artitect"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 uppercase">
              Precision <br /> 
              <span className="text-primary">Engineering</span> <br />
              Defined.
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-200 mb-8 max-w-xl">
              Setting the industry standard for high-performance sheet metal folding machines and double folder solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-primary/90 transition-all rounded-none"
              >
                View Machines <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-none"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4 text-center md:text-left">
              <div className="h-16 w-16 bg-primary/10 rounded-none flex items-center justify-center mx-auto md:mx-0">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">Built to Last</h3>
              <p className="text-muted-foreground">Heavy-duty construction using premium materials for decades of reliable performance in demanding environments.</p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div className="h-16 w-16 bg-primary/10 rounded-none flex items-center justify-center mx-auto md:mx-0">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">Maximum Efficiency</h3>
              <p className="text-muted-foreground">Advanced CNC automation reduces setup times and increases throughput by up to 40% compared to traditional folders.</p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div className="h-16 w-16 bg-primary/10 rounded-none flex items-center justify-center mx-auto md:mx-0">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">Precision Folding</h3>
              <p className="text-muted-foreground">Patented folding technology ensures perfectly crisp lines and consistent angles across every sheet, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                id="mid-section-img"
                data-strk-img-id="mid-metal-work"
                data-strk-img="[mid-title] [mid-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Industrial Metal Work"
                className="relative z-10 w-full rounded-none shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary z-0 hidden md:block" />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-2">
              <h2 id="mid-title" className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                Engineering <br /> The Future Of <br /> Metalwork.
              </h2>
              <div className="h-2 w-20 bg-primary" />
            </div>
            <p id="mid-desc" className="text-lg text-muted-foreground leading-relaxed">
              At Artitect Machinery, we don't just build folders; we craft precision instruments. Our double folding machines are designed for operators who demand perfection. Whether you are working with aluminum, stainless steel, or heavy-duty copper, our machines provide the versatility you need.
            </p>
            <ul className="space-y-4">
              {[
                "Patented Dual-Direction Folding",
                "Intuitive 4K Touch Control Interface",
                "Laser-Guided Accuracy Systems",
                "Eco-Friendly Hybrid Drive Technology"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link 
              to="/about" 
              className="inline-block text-primary font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-black hover:border-black transition-all"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center space-y-8">
          <h2 id="cta-title" className="text-3xl md:text-5xl font-bold uppercase tracking-tight max-w-4xl mx-auto">
            Ready To Upgrade Your Production Line?
          </h2>
          <p id="cta-desc" className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contact our engineering specialists today for a custom consultation and see how Artitect can transform your workshop.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-12 py-5 bg-primary text-white font-bold uppercase tracking-widest hover:bg-primary/90 transition-all rounded-none"
          >
            Get A Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
