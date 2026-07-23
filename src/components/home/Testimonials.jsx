import Stars from '../Stars';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream border-y border-warmgray">
      <div className="mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600 font-medium mb-3">
            Loved By Many
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Customer Notes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              text: 'The packaging alone felt like a luxury gift. I wear my huggies every single day.',
              name: 'Elena M.',
            },
            {
              text: 'Finally, demi-fine jewelry that looks expensive without the markup. Obsessed.',
              name: 'Sophia L.',
            },
            {
              text: 'Bought the Heirloom Set for my sister and she hasnt taken it off. Beautiful quality.',
              name: 'Maya K.',
            },
          ].map((review) => (
            <div
              key={review.name}
              className="bg-parchment p-8 md:p-10 text-center border border-warmgray"
            >
              <div className="flex justify-center mb-4">
                <Stars rating={5} size={16} />
              </div>
              <p className="font-serif text-lg md:text-xl italic text-ink mb-6 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-clay">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
