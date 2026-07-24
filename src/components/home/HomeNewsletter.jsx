import React from 'react';

const HomeNewsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-accent/5 p-12 md:p-20 text-center space-y-10 border border-accent/10">
        <div className="space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl">Join the World of Velmora</h2>
          <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-light">
            Subscribe for 10% off your first order & exclusive access to new drops.
          </p>
        </div>

        <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            className="flex-1 bg-white border border-border px-6 py-4 text-[10px] tracking-widest focus:outline-none focus:border-accent transition-colors"
          />
          <button className="bg-primary text-primary-foreground px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-black transition-all">
            Join Now
          </button>
        </form>
        
        <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest">
          By signing up, you agree to our privacy policy.
        </p>
      </div>
    </section>
  );
};

export default HomeNewsletter;
