import React from 'react';
import Button from '@/components/ui/Button';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="min-h-[100dvh] flex items-center justify-center pt-20 bg-[#F8F6F1]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white border border-[#E8E6E1]">
          <span className="text-xs tracking-[2px] text-[#C5A46E] font-medium">EST. 1987</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-1.5px] text-[#0A1628] mb-6 leading-[1.05]">
          Precision Metal<br />Folding Solutions
        </h1>
        
        <p className="text-lg md:text-xl text-[#2C3E50] max-w-2xl mx-auto mb-10 leading-relaxed">
          For over three decades, ARTITECT MACHINERY has delivered world-class sheet metal folding equipment trusted by fabricators worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={scrollToProducts}>
            Explore Our Products
          </Button>
          <Button variant="secondary" size="lg" onClick={() => {
            const element = document.querySelector('#contact');
            if (element) {
              const offset = 80;
              const bodyRect = document.body.getBoundingClientRect().top;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition - bodyRect - offset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }}>
            Request a Quote
          </Button>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-[#6B7280]">
            <span className="text-xs tracking-[2px]">SCROLL TO DISCOVER</span>
            <div className="w-px h-8 bg-[#E8E6E1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;