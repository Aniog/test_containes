import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <div className="animate-fadeIn">
      <div className="bg-velmora-ink text-white py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-velmora-gold mb-4">
            About Velmora
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight">
            Quiet Luxury, Made Personal
          </h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <p className="text-lg text-velmora-taupe leading-relaxed mb-6">
          Velmora Fine Jewelry was born from a desire to make beautiful, lasting
          jewelry feel accessible. We believe demi-fine is the sweet spot: the
          weight, warmth, and detail of fine jewelry, at a price that invites you
          to wear it every day.
        </p>
        <p className="text-velmora-taupe leading-relaxed mb-6">
          Every piece begins as a sketch in our studio, then is cast in brass and
          finished in thick 18K gold plating. We prioritize nickel-free,
          hypoallergenic materials because jewelry should feel as good as it looks.
        </p>
        <p className="text-velmora-taupe leading-relaxed mb-10">
          Whether you are building an ear stack, layering necklaces, or searching
          for the perfect gift, Velmora is here to help you find something worth
          treasuring.
        </p>
        <Link to="/shop">
          <Button>Shop the Collection</Button>
        </Link>
      </div>
    </div>
  );
}
