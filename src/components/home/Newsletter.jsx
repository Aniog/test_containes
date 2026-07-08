import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-20 bg-velmora-warmBlack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream mb-4">
            Join for 10% Off
          </h2>
          <p className="font-sans text-velmora-taupe mb-8">
            Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections and exclusive offers.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-transparent border border-velmora-taupe/50 text-velmora-cream placeholder-velmora-taupe font-sans text-sm focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 font-sans text-sm text-velmora-gold">
              Thank you for subscribing! Your discount code has been sent to your email.
            </p>
          )}

          <p className="mt-4 font-sans text-xs text-velmora-taupe">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
}