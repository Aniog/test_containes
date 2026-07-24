import StarRating from '@/components/ui/StarRating';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-subtitle mb-3">Love Letters</p>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-cream-100 p-8 md:p-10 border border-cream-300"
            >
              <StarRating rating={t.rating} size={14} />
              <blockquote className="font-sans text-sm text-walnut-600 leading-relaxed mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <cite className="font-serif text-base text-walnut-900 not-italic tracking-wide">
                {t.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
