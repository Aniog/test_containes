import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-velvet-900">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-xs tracking-super uppercase text-sand-400 font-medium mb-4">Join Velmora</p>
        <h2 className="font-serif text-3xl md:text-4xl text-velvet-50 font-light mb-4">
          {submitted ? 'Welcome to the Family' : '10% Off Your First Order'}
        </h2>
        <p className="text-velvet-400 mb-10 leading-relaxed">
          {submitted
            ? 'Check your inbox for your welcome code. We\'re so glad you\'re here.'
            : 'Sign up for exclusive early access to new collections, restock alerts, and a 10% welcome discount.'}
        </p>

        {!submitted && (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-velvet-800 border border-velvet-700 text-velvet-100 placeholder:text-velvet-500 text-sm focus:outline-none focus:border-sand-500 transition-colors"
            />
            <button type="submit" className="btn-accent whitespace-nowrap">
              <span className="mr-2">Sign Up</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-xs text-velvet-600 mt-6">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
