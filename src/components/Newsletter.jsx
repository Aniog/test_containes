import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for joining, ${email}! Your 10% code is VELMORA10.`);
      setEmail("");
    }
  };

  return (
    <section className="bg-gold py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <h2 className="font-serif text-3xl text-ivory md:text-4xl">
          Join for 10% Off
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ivory/90">
          Subscribe for first access to new collections, styling notes, and a
          welcome gift for your first order.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 md:flex-row md:justify-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="h-12 w-full border-b border-ivory/50 bg-transparent px-4 text-sm text-ivory placeholder:text-ivory/60 focus:border-ivory focus:outline-none md:w-80"
          />
          <Button
            type="submit"
            variant="outline"
            className="border-ivory text-ivory hover:bg-ivory hover:text-gold"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
