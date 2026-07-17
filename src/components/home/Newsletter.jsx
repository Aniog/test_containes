import { useState } from 'react';

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
    <section className="py-16 md:py-24 bg-[#1A1A1A] text-[#FAF8F5]">
      <div className="max-w-xl mx-auto text-center px-4">
        <h2 className="font-serif text-2xl md:text-3xl mb-3">Join the Velmora Circle</h2>
        <p className="font-sans text-sm text-[#FAF8F5]/70 mb-8">
          Subscribe for 10% off your first order, plus exclusive early access to new collections.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-sans text-sm text-[#C5A572]">Thank you! Welcome to Velmora.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-transparent border border-[#FAF8F5]/30 px-4 py-3 text-sm text-[#FAF8F5] placeholder:text-[#FAF8F5]/40 focus:outline-none focus:border-[#C5A572] transition-colors"
            />
            <button type="submit" className="bg-[#C5A572] text-[#FAF8F5] font-sans text-sm font-medium tracking-[0.2em] uppercase px-8 py-3 hover:bg-[#A88B5A] transition-colors flex-shrink-0">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
