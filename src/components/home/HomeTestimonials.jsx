import { Star } from 'lucide-react';

const HomeTestimonials = () => {
  const reviews = [
    { name: 'Sarah L.', text: 'The Golden Sphere Huggies are my new everyday staple. The quality is incredible for the price point. Truly quiet luxury.', stars: 5 },
    { name: 'Emma M.', text: 'Fast shipping and beautiful packaging. The Royal Heirloom Set made the perfect gift for my sister. She loves it!', stars: 5 },
    { name: 'Olivia R.', text: 'I have sensitive skin and these earrings have been wonderful. No irritation at all. Highly recommend Velmora.', stars: 5 }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-velmora-cream">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-10">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-velmora-gold text-velmora-gold" />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {reviews.map((tab, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-6">
              <p className="text-xl font-serif italic leading-relaxed text-muted-foreground">
                "{tab.text}"
              </p>
              <span className="text-[10px] uppercase tracking-widest font-bold">
                — {tab.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;