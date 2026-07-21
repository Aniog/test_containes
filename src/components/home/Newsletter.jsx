import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-velvet-950 py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Join the Inner Circle</p>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          {submitted ? 'Welcome to Velmora' : '10% Off Your First Order'}
        </h2>
        <p className="text-sm text-velvet-300 mb-8 leading-relaxed">
          {submitted
            ? 'Thank you for joining. Check your inbox for your welcome gift.'
            : 'Sign up for early access to new collections, exclusive offers, and styling inspiration.'}
        </p>

        {!submitted && (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-transparent border border-velvet-700 text-white text-sm placeholder:text-velvet-500 focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-primary bg-gold border-gold hover:bg-white hover:border-white hover:text-velvet-950 whitespace-nowrap">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  );
}