import { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
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
    <section className="py-16 md:py-24 bg-velmora-black text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-8 h-8 text-velmora-gold mx-auto mb-6" />
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="font-sans text-velmora-gray-dark mb-8">
          Subscribe to receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-velmora-gold">Welcome to Velmora! ✨</p>
            <p className="font-sans text-sm text-velmora-gray-dark mt-2">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-velmora-gray-dark font-sans text-sm focus:outline-none focus:border-velmora-gold transition-colors"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
