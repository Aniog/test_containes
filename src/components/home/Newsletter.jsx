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
    <section className="py-16 md:py-24 bg-velvet-900">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-gold-light text-xs tracking-[0.2em] uppercase mb-3">Stay Connected</p>
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-velvet-400 text-sm mt-4 max-w-md mx-auto">
          Be the first to know about new collections, exclusive drops, and behind-the-scenes stories.
        </p>

        {submitted ? (
          <p className="text-gold-light mt-8 text-sm tracking-wider">
            Thank you! Check your inbox for your welcome offer.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-velvet-800 border border-velvet-600 text-white text-sm placeholder:text-velvet-400 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold text-white px-8 py-3.5 text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
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