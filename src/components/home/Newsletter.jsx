import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-20 bg-forest relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-leaf/20 rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sage/10 rounded-full" />

      <div className="relative max-w-2xl mx-auto px-4 md:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-sage/20 rounded-full mb-6">
          <Mail className="w-7 h-7 text-sage" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Curious. Stay Informed.
        </h2>
        <p className="text-white/70 text-lg mb-8 leading-relaxed">
          Get the latest science discoveries, nature stories, and environmental insights delivered to your inbox every week.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-sage/20 border border-sage/40 text-sage rounded-2xl px-6 py-4">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">You're subscribed! Welcome to NatureScope.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-sage focus:bg-white/15 transition-all"
            />
            <button
              type="submit"
              className="bg-sage text-forest font-semibold px-7 py-3.5 rounded-full hover:bg-white transition-colors whitespace-nowrap text-sm"
            >
              Subscribe Free
            </button>
          </form>
        )}

        <p className="text-white/40 text-xs mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
