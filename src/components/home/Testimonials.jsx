import { testimonials } from "@/data/products";

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="eyebrow">Kind words</p>
          <h2 className="section-heading mt-2">What our customers say</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-sm border border-[var(--color-border-soft)] p-6">
              <div className="flex items-center gap-1 text-[var(--color-accent)]">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <span key={idx} className="text-sm">★</span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-secondary)]">“{item.text}”</p>
              <p className="mt-4 text-xs font-semibold tracking-[0.12em] uppercase text-[var(--color-ink-muted)]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
