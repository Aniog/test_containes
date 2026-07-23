import { testimonials } from '../../data/products';
import StarRating from '../ui/StarRating';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-3">
            What Our Customers Say
          </h2>
          <div className="hairline-divider max-w-16 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-sand p-6 md:p-8"
            >
              <StarRating rating={testimonial.rating} size="md" />
              <p className="font-sans text-velmora-muted leading-relaxed mt-4 mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-velmora-gold-light rounded-full flex items-center justify-center">
                  <span className="font-serif text-velmora-charcoal font-medium">
                    {testimonial.initials}
                  </span>
                </div>
                <span className="font-sans text-sm text-velmora-charcoal">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;