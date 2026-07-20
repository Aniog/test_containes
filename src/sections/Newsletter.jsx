import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-amber-700 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center text-white md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-100">
          Join the List
        </p>
        <h2 className="mt-3 font-serif text-3xl font-light md:text-4xl">
          Join for 10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-amber-100">
          Be the first to see new arrivals, styling notes, and members-only
          exclusives.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-lg">
            Welcome to Velmora — check your inbox.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 flex-1 border-amber-600 bg-white/10 text-white placeholder:text-amber-200 focus-visible:ring-white/30"
            />
            <Button
              type="submit"
              variant="secondary"
              className="h-12 bg-white text-amber-800 hover:bg-amber-100"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
