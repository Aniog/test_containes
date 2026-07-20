import StarRating from '../StarRating';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-sans text-xs uppercase tracking-ultra text-velmora-gold">
            What They Say
          </p>
          <h2 className="font-serif text-3xl text-velmora-charcoal md:text-4xl">
            Customer Love
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-velmora-sand bg-white p-8 text-center transition-shadow duration-300 hover:shadow-sm"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="mt-5 font-sans text-sm leading-relaxed text-velmora-brown">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-5 font-sans text-xs uppercase tracking-widest text-velmora-taupe">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}