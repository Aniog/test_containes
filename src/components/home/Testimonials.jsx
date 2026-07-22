import { testimonials } from "@/data/products";

const Testimonials = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-stone-900">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 border border-stone-200">
              <div className="flex gap-1 text-amber-700">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-stone-700">“{testimonial.text}”</p>
              <p className="mt-4 text-xs tracking-[0.15em] uppercase text-stone-500">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
