export default function Newsletter() {
  return (
    <section className="bg-velmora-accent/10 py-24 border-y border-velmora-accent/20">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-text mb-4">
          Join the Muse Club
        </h2>
        <p className="text-velmora-text/80 mb-8 max-w-md mx-auto">
          Sign up to receive 10% off your first order, plus exclusive access to new arrivals and editorial features.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 bg-white border border-velmora-border px-4 py-3 outline-none focus:border-velmora-accent transition-colors"
            required
          />
          <button 
            type="submit"
            className="bg-velmora-text text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-velmora-accent transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}