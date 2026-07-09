import { Star } from "lucide-react";

const TESTIMONIALS = [
  { name: "Sarah", initial: "L.", content: "I've ordered three pieces from Velmora now, and each one exceeds my expectations. The weight and shine feel so much more expensive than they are." },
  { name: "Elena", initial: "M.", content: "The Golden Sphere Huggies are my new everyday staple. They're so light I forget I'm wearing them, but they always get compliments." },
  { name: "Jessica", initial: "R.", content: "Fast shipping and the packaging is stunning. It felt like a true luxury experience from start to finish. Perfect for gifting." },
];

const Testimonials = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-6 group">
            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-lg font-serif italic leading-relaxed text-primary/80">
              "{t.content}"
            </p>
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-widest font-bold">{t.name} {t.initial}</span>
              <span className="text-[9px] uppercase tracking-widest text-muted-foreground mt-1 underline decoration-accent/30 decoration-2 underline-offset-4">Verified Purchase</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
