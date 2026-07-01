const Newsletter = () => {
  return (
    <section className="py-24 bg-velmora-cream">
      <div className="container mx-auto px-6">
        <div className="bg-velmora-charcoal text-velmora-cream p-12 md:p-24 text-center max-w-5xl mx-auto flex flex-col items-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif">Join the Inner Circle</h2>
            <p className="text-sm md:text-base opacity-70 tracking-wide font-light">
              Receive early access to collections, editorial stories, <br className="hidden md:block" />
              and 10% off your first order.
            </p>
          </div>

          <form className="w-full max-w-md flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-transparent border-b border-velmora-cream/30 py-4 text-xs uppercase tracking-widest focus:outline-none focus:border-velmora-cream transition-colors placeholder:text-velmora-cream/30"
            />
            <button className="bg-velmora-cream text-velmora-charcoal px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-medium hover:bg-white transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
