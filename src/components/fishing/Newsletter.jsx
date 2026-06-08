import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-teal-800 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-700 rounded-full opacity-40" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-teal-900 rounded-full opacity-50" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-8 text-center">
        <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Mail className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get Exclusive Deals & Fishing Tips
        </h2>
        <p className="text-teal-200 text-base leading-relaxed mb-10">
          Join 50,000+ anglers and get weekly gear deals, fishing tips, and early access to new arrivals — straight to your inbox.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-teal-700 rounded-2xl px-8 py-5">
            <CheckCircle className="w-6 h-6 text-amber-400" />
            <span className="text-white font-semibold text-lg">You're in! Check your inbox for a welcome gift.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 rounded-full px-6 py-3.5 text-teal-900 text-sm font-medium placeholder-teal-400 outline-none focus:ring-2 focus:ring-amber-400 bg-white"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-3.5 text-sm font-bold transition-colors whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        )}

        <p className="text-teal-400 text-xs mt-4">
          No spam, ever. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
