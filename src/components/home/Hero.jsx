import React from 'react';
import Button from '@/components/ui/Button';

const Hero = () => {
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
    <section className="pt-20 min-h-[90vh] flex items-center bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#1a1f2e] text-white text-sm font-medium mb-6">
            Precision Engineering Since 1985
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#1a1f2e] mb-6 leading-[1.1]">
            Industrial Folding<br />Machines Built to Last
          </h1>
          <p className="text-xl text-[#4a5568] mb-10 max-w-2xl">
            Discover our range of premium sheet metal folding machines designed for precision, durability, and ease of use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={scrollToProducts}>
              Explore Products
            </Button>
            <Button variant="secondary" size="lg" onClick={scrollToContact}>
              Request a Quote
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-8 text-sm text-[#4a5568]">
            <div>
              <span className="font-semibold text-[#1a1f2e]">500+</span> Machines Delivered
            </div>
            <div>
              <span className="font-semibold text-[#1a1f2e]">40+</span> Countries
            </div>
            <div>
              <span className="font-semibold text-[#1a1f2e]">98%</span> Customer Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;