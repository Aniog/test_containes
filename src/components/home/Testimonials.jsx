import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Sarah M.', text: 'The Golden Sphere Huggies are my absolute favorite. They feel so luxurious and look amazing with everything. I haven\'t taken them off since they arrived.', rating: 5 },
  { name: 'Jennifer K.', text: 'Ordered the Royal Heirloom Set for my mom\'s birthday. The presentation was stunning — she actually cried. The quality far exceeded my expectations.', rating: 5 },
  { name: 'Alexandra R.', text: 'Finally, jewelry that doesn\'t irritate my sensitive skin. The attention to detail is incredible. Velmora is my new go-to for gifting and self-treats.', rating: 5 },
];

const Testimonials = () => (
  <section className="py-16 md:py-24 bg-charcoal-950">
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="font-serif text-2xl md:text-3xl text-cream mb-3">Loved by You</h2>
        <p className="text-charcoal-400 text-sm">What our customers are saying</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="text-center">
            <div className="flex justify-center gap-0.5 mb-3">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={12} className="text-gold-500 fill-gold-500" />
              ))}
            </div>
            <p className="text-charcoal-300 text-sm leading-relaxed mb-4 italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="text-xs tracking-widest uppercase text-cream font-medium">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;