import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="text-center p-6">
      <div className="flex justify-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-velmora-gold-500 fill-velmora-gold-500" />
        ))}
      </div>
      <p className="font-serif text-lg italic text-charcoal-700 mb-6 leading-relaxed">
        "{testimonial.text}"
      </p>
      <div className="w-12 h-12 bg-velmora-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <span className="font-serif text-xl text-velmora-gold-600">{testimonial.initial}</span>
      </div>
      <p className="text-sm font-medium text-charcoal-800">{testimonial.name}</p>
    </div>
  );
};

export default TestimonialCard;
