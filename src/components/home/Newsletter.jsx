import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

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
    <section className="py-16 lg:py-24 bg-velmora-espresso relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-velmora-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-velmora-gold/5 rounded-full blur-3xl" />

      <div className="max-w-xl mx-auto px-6 text-center relative z-10">
        <Mail className="w-8 h-8 text-velmora-gold mx-auto mb-6" />
        
        <h2 className="font-serif text-3xl lg:text-heading-2 text-white mb-3">
          Join the Velmora Circle
        </h2>
        <p className="text-sm text-velmora-taupe mb-2">
          Subscribe for 10% off your first order
        </p>
        <p className="text-xs text-velmora-stone mb-8">
          Plus exclusive access to new arrivals, styling tips, and special offers.
        </p>

        {submitted ? (
          <div className="bg-velmora-gold/10 border border-velmora-gold/30 rounded p-6">
            <p className="font-serif text-lg text-velmora-gold mb-1">Welcome to Velmora</p>
            <p className="text-sm text-velmora-sand">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-velmora-stone text-sm font-sans focus:outline-none focus:border-velmora-gold transition-colors rounded"
              />
            </div>
            <button
              type="submit"
              className="btn-gold flex items-center justify-center gap-2 rounded sm:w-auto"
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
