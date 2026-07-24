import StarRating from '@/components/ui/StarRating';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      text: 'The quality is incredible for the price. I wear my Vivid Aura ear cuff every single day — it gets so many compliments.',
    },
    {
      id: 2,
      name: 'Jessica K.',
      rating: 5,
      text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it.',
    },
    {
      id: 3,
      name: 'Emma R.',
      rating: 5,
      text: 'Finally, jewelry that looks expensive without the price tag. The Golden Sphere Huggies are my new everyday staples.',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl md:text-4xl tracking-wide">What Our Customers Say</h2>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-sm border border-[#E8E2DA] hover:shadow-md transition-shadow duration-300"
            >
              <StarRating rating={t.rating} size={16} />
              <p className="mt-4 text-muted-foreground leading-relaxed italic serif-heading text-base">
                "{t.text}"
              </p>
              <p className="mt-6 text-sm font-medium uppercase tracking-wider">
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
