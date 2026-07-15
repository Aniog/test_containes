import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-warm-dark">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-widest uppercase text-gold-light font-sans font-medium">Join the Circle</p>
        <h2 className="heading-serif text-3xl md:text-4xl text-white mt-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-taupe-light text-sm mt-3 font-sans">
          Be the first to discover new collections, behind-the-scenes stories, and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-gold-light font-serif text-lg mt-8 animate-fade-in">
            Thank you! Check your inbox for your welcome code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-warm-white/10 border border-taupe/30 text-white placeholder:text-taupe-light/60 text-sm font-sans focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="btn-primary flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}