import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-28 px-6 bg-[#080f1f] relative overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#00d4ff]/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#00d4ff]/8 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-[#00d4ff]/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#00d4ff]/5 blur-2xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <span className="inline-block text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-6">
          Stay Curious
        </span>
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Dive deeper into the
          <span
            className="text-transparent bg-clip-text block"
            style={{ backgroundImage: 'linear-gradient(135deg, #00d4ff, #00ffcc)' }}
          >
            hidden universe
          </span>
        </h2>
        <p className="text-[#8ab4c8] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Subscribe to receive weekly discoveries from the microscopic world — new species,
          breakthrough research, and stunning imagery delivered to your inbox.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-[#00ffcc] text-lg font-medium">
            <CheckCircle className="w-6 h-6" />
            You're in! Welcome to the MicroCosmos community.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-4 bg-[#0d1a2e] border border-[#1a2d4a] rounded-full text-[#e8f4f8] placeholder-[#4a6a7a] focus:outline-none focus:border-[#00d4ff]/60 transition-colors text-base"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#00d4ff] text-[#050d1a] font-semibold px-7 py-4 rounded-full hover:bg-[#00ffcc] transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[#4a6a7a] text-sm mt-5">
          No spam. Unsubscribe at any time. Science only.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
