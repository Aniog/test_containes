const reviews = [
  {
    name: 'Elena M.',
    text: 'The quality is exceptional for the price point. I wear my Golden Sphere Huggies every single day and they still look brand new.',
  },
  {
    name: 'Sarah K.',
    text: 'I bought the Royal Heirloom Set as a gift for my sister and she absolutely loved it. The presentation alone is stunning.',
  },
  {
    name: 'Isabel R.',
    text: 'Finally found demi-fine jewelry that feels truly luxurious without the luxury markup. Velmora is my go-to now.',
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-3">
          Love Notes
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-warm-50 tracking-wide">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="bg-velvet-900/40 border border-warm-800/20 rounded-sm p-8 text-center"
          >
            <div className="flex items-center justify-center gap-0.5 mb-4 text-sm">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className="text-gold-400">★</span>
              ))}
            </div>
            <p className="text-sm text-warm-300 leading-relaxed italic">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="mt-5 text-xs tracking-wider uppercase text-gold-400 font-medium">
              {review.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
