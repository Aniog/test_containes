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
    <section className="py-16 md:py-24" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-3" style={{ color: '#FAF7F2' }}>
          Join the Inner Circle
        </h2>
        <p className="text-sm mb-8" style={{ color: 'rgba(250,247,242,0.6)' }}>
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-sm font-medium" style={{ color: '#B8860B' }}>
            Welcome to Velmora. Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 border text-sm px-4 py-3 focus:outline-none transition-colors"
              style={{ backgroundColor: 'transparent', borderColor: 'rgba(250,247,242,0.3)', color: '#FAF7F2' }}
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm uppercase tracking-wider font-medium transition-colors whitespace-nowrap"
              style={{ backgroundColor: '#B8860B', color: '#FAF7F2' }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
