const Newsletter = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-sm bg-[var(--color-accent-soft)] px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-[var(--color-accent)]">Join the list</p>
          <h2 className="section-heading mt-2">Get 10% off your first order</h2>
          <p className="mt-2 text-sm text-[var(--color-ink-secondary)]">
            Sign up for early access to new drops, styling ideas, and exclusive offers.
          </p>
          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for subscribing!");
            }}
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="flex-1 rounded-sm border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
            />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
