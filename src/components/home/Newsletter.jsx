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
    <section className="section-padding py-20 md:py-28">
      <div className="container-wide">
        <div className="bg-warm-900 rounded-sm px-8 md:px-16 py-16 md:py-20 text-center">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Join the Velmora Circle
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            {submitted ? 'Welcome to the Circle' : '10% Off Your First Order'}
          </h2>
          <p className="mt-4 text-warm-400 max-w-md mx-auto text-sm md:text-base">
            {submitted
              ? 'Thank you for joining. Check your inbox for your welcome gift — we\'re so glad you\'re here.'
              : 'Sign up for early access to new collections, exclusive offers, and a little sparkle in your inbox.'}
          </p>

          {!submitted && (
            <form onSubmit={handleSubmit} className="mt-8 flex items-center max-w-md mx-auto gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 bg-warm-800 border border-warm-700 text-white placeholder:text-warm-500 text-sm focus:outline-none focus:border-accent rounded-sm"
              />
              <button
                type="submit"
                className="btn-accent !px-5 !py-3 flex-shrink-0"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}