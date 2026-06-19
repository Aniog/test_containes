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
    <section className="bg-velvet-950">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="serif-heading text-3xl md:text-4xl text-white mb-4">
            Join for 10% off your first order
          </h2>
          <p className="text-velvet-400 text-sm tracking-wide mb-10">
            Sign up for early access to new collections, exclusive restocks, and styling inspiration.
          </p>
          {submitted ? (
            <p className="text-gold-400 font-serif text-lg italic">
              Thank you — check your inbox for your code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-velvet-800 border border-velvet-700 text-white
                  placeholder:text-velvet-500 text-sm focus:outline-none focus:border-gold-500
                  transition-colors rounded-sm"
              />
              <button type="submit" className="btn-accent whitespace-nowrap">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
