import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { id: 1, name: "Sophia", initial: "L", text: "The quality surpassed my expectations. The Golden Sphere Huggies have become my daily signature." },
    { id: 2, name: "Isabella", initial: "M", text: "Truly quiet luxury. The packaging was beautiful and the necklace feels substantial yet delicate." },
    { id: 3, name: "Emma", initial: "W", text: "Perfect for gifting. I bought the Royal Heirloom Set for my sister and she hasn't taken it off." },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {reviews.map((row) => (
            <div key={row.id} className="text-center space-y-6 flex flex-col items-center">
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="font-serif text-xl italic leading-relaxed text-foreground/80">"{row.text}"</p>
              <div className="space-y-1">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold">{row.name} {row.initial}.</p>
                <p className="text-[9px] text-muted uppercase tracking-widest">Verified Collector</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
