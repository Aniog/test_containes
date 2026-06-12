const CtaBanner = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-brand-gold py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair font-bold text-brand-navy text-3xl md:text-4xl mb-4">
          Ready to Elevate Your Fabrication?
        </h2>
        <p className="font-inter text-brand-navy/80 text-base leading-relaxed mb-8 max-w-xl mx-auto">
          Speak with an ARTITECT specialist today and discover the right folding machine
          solution for your production requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('#contact')}
            className="bg-brand-navy text-brand-white font-inter font-semibold text-sm uppercase tracking-widest px-10 py-4 rounded-sm hover:bg-brand-steel transition-colors duration-300"
          >
            Get a Free Quote
          </button>
          <button
            onClick={() => scrollTo('#products')}
            className="border-2 border-brand-navy text-brand-navy font-inter font-semibold text-sm uppercase tracking-widest px-10 py-4 rounded-sm hover:bg-brand-navy hover:text-brand-white transition-all duration-300"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
