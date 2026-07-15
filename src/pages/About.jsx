import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-20 md:pt-28 bg-velvet-card">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto py-16 md:py-24">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-velvet-base mb-8">Our Story</h1>
          
          <div className="space-y-6 text-velvet-muted leading-relaxed">
            <p>
              Velmora was founded on a simple belief: that fine jewelry should be part of everyday life. Not locked away for special occasions. Not reserved for milestone moments. Every day is worth celebrating, and the right piece of jewelry makes it feel that way.
            </p>
            <p>
              Each design is conceived in our London studio, where our team draws inspiration from architecture, vintage textiles, and the way light plays on precious surfaces. We prototype in brass, test on real ears and necks, and refine until the weight, the catch, the drape — everything — feels right.
            </p>
            <p>
              Our 18K gold-plated pieces are crafted to the same standards as fine jewelry, with hypoallergenic metals, secure closures, and finishes that resist tarnish. We believe demi-fine shouldn't mean compromise. It should mean accessible, yes — but never lesser.
            </p>
            <p>
              Velmora is proudly worn by thousands of women around the world who understand that the best luxury is the kind you reach for every morning without thinking twice.
            </p>
          </div>

          <div className="mt-12 flex gap-4">
            <Link to="/shop" className="btn-primary text-sm">Shop the Collection</Link>
            <Link to="/shop" className="btn-outline text-sm">Explore Earrings</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
