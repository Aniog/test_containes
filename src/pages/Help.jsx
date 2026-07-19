import { useParams } from "react-router-dom";

const content = {
  shipping: {
    eyebrow: "Help",
    title: "Shipping & Returns",
    body: (
      <>
        <p>
          We offer free worldwide shipping on all orders over $80. Standard
          delivery takes 3–7 business days. Express options are available at
          checkout.
        </p>
        <p className="mt-4">
          We accept returns within 30 days, in original condition. Each piece
          is eligible for one exchange or refund. Please contact us at
          care@velmora.com to start a return.
        </p>
      </>
    ),
  },
  care: {
    eyebrow: "Help",
    title: "Care Guide",
    body: (
      <ul className="space-y-2">
        <li>— Remove jewelry before sleeping, showering, or exercising.</li>
        <li>— Avoid contact with perfume, lotion, and chlorine.</li>
        <li>— Wipe gently with a soft, dry cloth after wear.</li>
        <li>— Store in the Velmora pouch or box to prevent scratches.</li>
      </ul>
    ),
  },
  size: {
    eyebrow: "Help",
    title: "Size Guide",
    body: (
      <p>
        Most of our pieces are one-size and adjustable. Huggies have an inner
        diameter of 9mm. Necklace chains are 18 inches with a 2 inch
        extender. If you have questions about fit, write to us at
        care@velmora.com.
      </p>
    ),
  },
  contact: {
    eyebrow: "Help",
    title: "Contact Us",
    body: (
      <>
        <p>
          We&apos;re here Monday – Friday, 9am – 5pm GMT. Write to us at
          care@velmora.com and we&apos;ll get back to you within one business
          day.
        </p>
        <p className="mt-4">
          Velmora Fine Jewelry, Vesterbrogade 12, 1620 Copenhagen, Denmark.
        </p>
      </>
    ),
  },
};

export default function Help() {
  const { topic } = useParams();
  const page = content[topic] || content.shipping;

  return (
    <div className="bg-cream-100 pt-28 md:pt-32">
      <div className="mx-auto max-w-3xl px-5 pb-24 md:px-10 md:pb-32 lg:px-14">
        <p className="eyebrow eyebrow-gold">{page.eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl text-ink-300 md:text-5xl">
          {page.title}
        </h1>
        <div className="prose prose-neutral mt-6 max-w-none text-base text-ink-100">
          {page.body}
        </div>
      </div>
    </div>
  );
}
