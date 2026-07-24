import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 'testimonial-1',
      name: 'Sarah M.',
      text: 'The quality is incredible for the price. I wear my Vivid Aura ear cuff every single day — it catches the light beautifully.',
      rating: 5,
    },
    {
      id: 'testimonial-2',
      name: 'Jessica K.',
      text: 'Bought the Royal Heirloom Set as a gift for my sister. She cried when she opened it. The packaging is gorgeous.',
      rating: 5,
    },
    {
      id: 'testimonial-3',
      name: 'Emma L.',
      text: 'Finally, jewelry that doesn\'t irritate my skin. The huggies are so comfortable I forget I\'m wearing them.',
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl mb-3">What They Say</h2>
          <p className="text-muted-foreground text-sm tracking-wide">Real words from real customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center px-4">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="serif-heading text-lg md:text-xl leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="text-sm tracking-widest uppercase text-muted-foreground">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
