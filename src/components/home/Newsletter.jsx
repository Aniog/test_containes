import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="bg-velvet-900">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-50 tracking-wide">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 text-velvet-400 text-sm tracking-wide">
            Sign up for early access to new collections, exclusive offers, and styling inspiration.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-velvet-800 border border-velvet-700 text-velvet-100 placeholder-velvet-500 text-sm rounded-sm focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button type="submit" className="btn-accent text-sm whitespace-nowrap">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}