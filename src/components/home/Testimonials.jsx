import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Amanda R.',
    rating: 5,
    text: "I've been wearing my Velmora pieces daily for 6 months and they still look brand new. The quality is incredible for the price."
  },
  {
    id: 2,
    name: 'Sophie L.',
    rating: 5,
    text: "Finally found jewelry that doesn't turn my ears green. These huggies are my absolute favorites — I have three pairs now!"
  },
  {
    id: 3,
    name: 'Maya K.',
    rating: 5,
    text: "The gift box set I ordered for my sister's birthday was absolutely stunning. She cried when she opened it. Will definitely be ordering again."
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-[var(--color-bg-primary)]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3 block">
            What Our Customers Say
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)]">
            Loved by Thousands
          </h2>
        </div>
        
        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--color-surface)] p-8 relative"
            >
              {/* Quote Mark */}
              <svg
                className="absolute top-6 right-6 w-12 h-12 text-[var(--color-gold)] opacity-10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-[var(--color-text-secondary)] italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-gold)] flex items-center justify-center">
                  <span className="font-medium text-[var(--color-bg-primary)] text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-[var(--color-text-primary)] text-sm">
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
