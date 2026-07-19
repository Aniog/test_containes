import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="bg-white border-y border-brand-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-wide text-brand-ink text-center">What Our Customers Say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(item => (
            <div key={item.id} className="rounded-2xl border border-brand-border bg-brand-bg p-6">
              <div className="flex gap-1 text-brand-accent">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <span key={i} className="text-sm">★</span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink">“{item.text}”</p>
              <p className="mt-4 text-xs font-semibold tracking-wide text-brand-muted uppercase">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
