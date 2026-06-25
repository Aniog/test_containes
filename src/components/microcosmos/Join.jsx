import { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Users, BookOpen, Microscope } from 'lucide-react';

const perks = [
  { icon: Microscope, text: 'Weekly microscopy image of the week' },
  { icon: BookOpen, text: 'Deep-dive articles on microbial science' },
  { icon: Users, text: 'Access to our community of enthusiasts' },
];

export default function Join() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="join" className="bg-slate-950 py-28 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-slate-900/60 backdrop-blur-sm border border-cyan-900/40 rounded-3xl p-10 md:p-16 text-center shadow-[0_0_60px_rgba(0,229,255,0.08)]">
          <div className="w-16 h-16 bg-cyan-500/15 border border-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Mail className="w-8 h-8 text-cyan-400" />
          </div>

          <h2 id="join-title" className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Join the Community
          </h2>
          <p id="join-subtitle" className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Subscribe to MicroCosmos and receive weekly wonders from the invisible world
            delivered straight to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div key={perk.text} className="flex items-center gap-2 text-slate-400 text-sm">
                  <Icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{perk.text}</span>
                </div>
              );
            })}
          </div>

          <div className="w-16 h-px bg-slate-800 mx-auto my-8" />

          {submitted ? (
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-emerald-500/15 border border-emerald-500/30 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-slate-50 text-2xl font-bold">You're in!</h3>
              <p className="text-slate-400">
                Welcome to MicroCosmos. Check your inbox for a confirmation email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-slate-800/60 border border-slate-700 focus:border-cyan-500/60 text-slate-50 placeholder-slate-500 rounded-full px-5 py-3 text-sm outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] whitespace-nowrap text-sm"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {error && <p className="text-rose-400 text-sm mt-3">{error}</p>}
              <p className="text-slate-600 text-xs mt-4">
                No spam, ever. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
