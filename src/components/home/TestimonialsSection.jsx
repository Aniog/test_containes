import { testimonials } from '@/data/products';
import { StarRating } from '@/components/ui/StarRating';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

export default function TestimonialsSection() {
  const sectionRef = useRevealOnScroll();

  return (
    <section className="section-padding bg-secondary/30" ref={sectionRef}>
      <div className="container-padding">
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-3">What They Say</h2>
          <p className="text-sm text-muted-foreground tracking-wide">Real words from real customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-card p-6 md:p-8 text-center border border-border reveal reveal-delay-${index + 1}`}
            >
              <StarRating rating={testimonial.rating} size="md" />
              <p className="serif-heading text-lg md:text-xl italic leading-relaxed my-6 text-foreground/90">
                "{testimonial.text}"
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
