import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Newsletter() {
  return (
    <section className="section-padding py-20 md:py-28">
      <ScrollReveal>
        <div className="max-w-2xl mx-auto text-center bg-rose px-8 md:px-16 py-14 md:py-20">
          <p className="text-[11px] tracking-[0.2em] uppercase text-taupe mb-4">Join the List</p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-wider mb-3">
            Enjoy 10% Off Your First Order
          </h2>
          <p className="text-taupe text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Sign up for early access to new collections, exclusive offers, and styling inspiration.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent border-b border-taupe/40 px-2 py-3 text-sm text-espresso placeholder-taupe/50 outline-none focus:border-espresso transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}