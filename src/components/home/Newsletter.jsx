import { useState } from 'react';
import { Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setDone(true);
  };

  return (
    <section className="bg-espresso">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-bronze-light">
          The Velmora List
        </p>
        <h2 className="mt-4 font-serif text-4xl font-medium text-ivory md:text-5xl">
          Join for 10% off your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-espresso-300">
          New pieces, styling notes, and early access to small-batch drops. No noise — just
          the good things, occasionally.
        </p>

        {done ? (
          <div className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 border border-bronze/50 bg-bronze/10 px-6 py-4 animate-fade-in">
            <Check className="h-4 w-4 text-bronze-light" />
            <p className="text-sm text-ivory">
              Welcome to the list — your code is on its way to <span className="text-bronze-light">{email}</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="h-[52px] flex-1 border border-espresso-700 bg-espresso-800 px-5 text-sm text-ivory placeholder:text-espresso-300/70 focus:border-bronze focus:outline-none"
            />
            <button
              type="submit"
              className="h-[52px] bg-bronze px-8 text-[11px] font-medium uppercase tracking-luxe text-ivory transition-colors duration-300 hover:bg-bronze-dark"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
