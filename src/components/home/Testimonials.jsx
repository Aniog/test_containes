import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-gold mb-3">Kind Words</p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-wide text-ink">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="p-6 rounded-sm border border-ink/5 bg-white/60">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-sm text-ink/80 leading-relaxed italic">"{item.text}"</p>
              <p className="mt-4 text-xs tracking-widest uppercase text-ink/60">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
