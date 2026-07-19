import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-spacing bg-[var(--color-secondary)]">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm text-[var(--color-muted)] tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="heading-serif text-4xl md:text-5xl mt-3">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="text-center p-8 bg-[var(--color-secondary-dark)] animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className="text-lg text-[var(--color-accent)]"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--color-muted)] italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center">
                  <span className="text-sm font-medium text-[var(--color-primary)]">
                    {testimonial.initials}
                  </span>
                </div>
                <span className="text-sm font-medium">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}