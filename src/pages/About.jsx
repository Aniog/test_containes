import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-20 md:pt-24 pb-20">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center py-20">
          <span className="accent-badge mb-4">Our Story</span>
          <h1 className="heading-lg mb-8">About Velmora</h1>
          <div className="space-y-6 body-text">
            <p>
              Velmora was born from a simple but powerful belief: that fine jewelry should be an
              everyday luxury, not a locked-away treasure reserved for special occasions.
            </p>
            <p>
              Founded in 2023, we set out to bridge the gap between disposable fashion jewelry and
              inaccessible fine jewelry. Our pieces are crafted from 18K gold-plated brass using
              traditional techniques passed down through generations of master artisans.
            </p>
            <p>
              Every Velmora piece is designed to be stacked, layered, and lived in — from morning
              coffee runs to candlelit dinner celebrations. We believe jewelry should move with you,
              telling your story through every scratch, every gleam, every compliment it earns.
            </p>
            <p>
              We are committed to ethical sourcing, sustainable packaging, and creating pieces that
              last beyond a single season. Because the most sustainable piece of jewelry is the one
              you never want to take off.
            </p>
          </div>
          <Link to="/shop" className="btn-primary mt-10">Explore the Collection</Link>
        </div>
      </div>
    </div>
  );
}
