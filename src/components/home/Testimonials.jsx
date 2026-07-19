import { StarRating } from '@/components/ui/StarRating';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <StarRating rating={testimonial.rating} size="md" className="justify-center mb-4" />
              <blockquote className="serif-heading text-lg md:text-xl leading-relaxed mb-6 text-foreground/80">
                "{testimonial.text}"
              </blockquote>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
