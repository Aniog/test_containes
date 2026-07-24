import { Star } from 'lucide-react';

const reviews = [
  {
    text: 'Absolutely stunning quality — looks and feels like fine jewelry at 3x the price. I wear my Golden Sphere Huggies every day and they still look brand new.',
    name: 'Amelia S.',
  },
  {
    text: 'The Royal Heirloom Set was the perfect anniversary gift. The presentation, the craftsmanship, everything felt so special. My wife hasn\'t taken it off.',
    name: 'James K.',
  },
  {
    text: 'I\'ve been searching for demi-fine pieces that feel editorial and sophisticated without being flashy. Velmora nails that quiet luxury aesthetic perfectly.',
    name: 'Claire M.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide section-padding">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-sand-500 mb-3">
            Love Notes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velvet-800 font-light tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-velvet-500 text-velvet-500" />
                ))}
              </div>
              <p className="text-sm md:text-base text-sand-600 leading-relaxed italic mb-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-serif text-sm text-velvet-800 tracking-wide">
                &mdash; {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
