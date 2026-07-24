import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

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
    <section className="py-20 md:py-28 bg-gold-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {submitted ? (
          <div className="animate-fade-in-up">
            <div className="w-14 h-14 bg-gold-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-warm-900 mb-4">
              You're In!
            </h2>
            <p className="text-warm-500 text-sm leading-relaxed">
              Welcome to the Velmora family. Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <>
            <p className="text-gold-300 text-xs uppercase tracking-[0.25em] mb-4 font-sans">
              Join the Inner Circle
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-warm-900 leading-tight mb-4">
              Get 10% Off
              <br />
              Your First Order
            </h2>
            <p className="text-warm-500 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
              Be the first to know about new collections, exclusive drops, and member-only events.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 bg-white border border-warm-200 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:border-gold-300 transition-colors font-sans"
              />
              <button
                type="submit"
                className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
            <p className="text-warm-400 text-[11px] mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}