import { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('.animate-on-load');
    elements?.forEach((el, index) => {
      el.style.animationDelay = `${index * 150}ms`;
      el.classList.add('animate-fade-in-up');
    });
  }, []);

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        {/* Angular accent lines */}
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-5" viewBox="0 0 400 800" fill="none">
          <path d="M400 0L200 400L400 800" stroke="white" strokeWidth="2" />
          <path d="M350 0L150 400L350 800" stroke="white" strokeWidth="1" />
          <path d="M300 0L100 400L300 800" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="animate-on-load opacity-0 mb-6">
            <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Precision Engineering Excellence
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-on-load opacity-0 text-white mb-6 leading-tight">
            Precision Metal <br />
            <span className="text-accent">Folding Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="animate-on-load opacity-0 text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium sheet metal folding machines engineered for accuracy, durability, and performance. 
            From double folding machines to industrial metal folders, we deliver excellence in every bend.
          </p>

          {/* CTA Buttons */}
          <div className="animate-on-load opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:shadow-accent/30 flex items-center gap-2"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToProducts}
              className="group border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-white/10 flex items-center gap-2"
            >
              Explore Products
            </button>
          </div>

          {/* Product Tags */}
          <div className="animate-on-load opacity-0 mt-16 flex flex-wrap justify-center gap-3">
            {['Double Folding Machine', 'Metal Folder', 'Sheet Metal Folder', 'Industrial Equipment'].map((tag) => (
              <span
                key={tag}
                className="bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-lg text-sm font-medium border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
