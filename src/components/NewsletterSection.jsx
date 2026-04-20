import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Zap } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-gray-950 to-gray-950" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
          <Zap className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 text-sm font-medium">Exclusive Member Deals</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
          Get deals before
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            everyone else does.
          </span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Join 85,000+ tech enthusiasts. Get early access to new products, exclusive discounts up to 40% off, and weekly tech roundups — straight to your inbox.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">You're in! 🎉</h3>
              <p className="text-gray-400">Check your inbox for a welcome gift — 10% off your first order.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="Enter your email address"
                className={`w-full bg-gray-900 border ${error ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-500 rounded-2xl pl-11 pr-4 py-4 text-sm focus:outline-none focus:border-blue-400 transition-colors`}
              />
              {error && <p className="absolute -bottom-5 left-0 text-red-400 text-xs">{error}</p>}
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-4 rounded-2xl transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-gray-600 text-xs mt-8">
          No spam, ever. Unsubscribe anytime. By subscribing you agree to our Privacy Policy.
        </p>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {[
            { value: '85K+', label: 'Subscribers' },
            { value: '4.9★', label: 'Newsletter Rating' },
            { value: '10%', label: 'Welcome Discount' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-white font-black text-lg">{value}</div>
              <div className="text-gray-500 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
