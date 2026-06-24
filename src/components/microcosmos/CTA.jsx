import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section id="cta" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-cosmos-border bg-cosmos-surface">
          <div
            className="absolute inset-0 -z-10"
            data-strk-bg-id="microcosmos-cta-bg-7d3a"
            data-strk-bg="[cta-title] phytoplankton bioluminescence dark teal"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cosmos-bg via-cosmos-bg/85 to-cosmos-bg/40" />
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-cosmos-accent/20 blur-3xl" />

          <div className="relative p-8 md:p-14 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-cosmos-accent">
                The Atlas · Issue Eight
              </span>
              <h2
                id="cta-title"
                className="mt-4 font-display text-3xl md:text-5xl tracking-tight text-cosmos-fg"
              >
                Subscribe and step into the{" "}
                <span className="bg-cosmos-gradient bg-clip-text text-transparent">
                  invisible.
                </span>
              </h2>
              <p className="mt-5 text-cosmos-muted leading-relaxed max-w-xl">
                One thoughtfully composed letter each month — new specimens, sampling
                stories from the field, and a printable plate for your wall.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-cosmos-border bg-cosmos-bg/60 backdrop-blur p-6"
            >
              {submitted ? (
                <div className="text-center py-6">
                  <p className="font-display text-xl text-cosmos-fg">
                    You&apos;re in. Welcome aboard.
                  </p>
                  <p className="mt-2 text-sm text-cosmos-muted">
                    Watch your inbox at the next new moon.
                  </p>
                </div>
              ) : (
                <>
                  <label
                    htmlFor="cta-email"
                    className="block font-mono text-xs uppercase tracking-[0.25em] text-cosmos-muted"
                  >
                    Your email
                  </label>
                  <div className="mt-3 flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cosmos-muted" />
                      <input
                        id="cta-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="naturalist@field.lab"
                        className="w-full rounded-full border border-cosmos-border bg-cosmos-surface pl-10 pr-4 py-3 text-cosmos-fg placeholder:text-cosmos-muted/70 focus:outline-none focus:border-cosmos-accent transition"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-cosmos-gradient text-cosmos-bg font-medium px-6 py-3 hover:opacity-90 transition"
                    >
                      Subscribe
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="mt-3 text-xs text-cosmos-muted">
                    No spam, no algorithms. Unsubscribe in one click.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
