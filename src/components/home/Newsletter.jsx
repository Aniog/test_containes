const Newsletter = () => {
  return (
    <section className="py-20 bg-amber-800">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl text-white">Join for 10% off your first order</h2>
        <p className="mt-2 text-sm text-amber-100">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>
        <form
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for subscribing!");
          }}
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="px-4 py-3 text-sm bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-stone-900 text-white px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-stone-800 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
