import { useState } from 'react';
import { Send } from 'lucide-react';

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="cta" className="py-20 bg-[#2d7a4f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          Free Newsletter
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Start Your Healthy Journey Today
        </h2>
        <p className="text-green-100 text-base leading-relaxed mb-8">
          Get weekly nutrition tips, seasonal recipes, and wellness guides delivered straight to your inbox. No spam, ever.
        </p>

        {submitted ? (
          <div className="bg-white/20 text-white rounded-2xl px-8 py-6 inline-block">
            <p className="text-lg font-semibold">🎉 You're in! Welcome to NutriLife.</p>
            <p className="text-green-100 text-sm mt-1">Check your inbox for your first healthy tip.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3 rounded-full text-gray-900 text-sm outline-none focus:ring-2 focus:ring-white bg-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#2d7a4f] px-6 py-3 rounded-full font-semibold text-sm hover:bg-green-50 transition-colors"
            >
              Subscribe <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-green-200 text-xs mt-4">Join 25,000+ health-conscious readers. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default NewsletterCTA;
