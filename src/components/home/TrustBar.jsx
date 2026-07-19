const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section className="bg-ivory border-y border-taupe">
      <div className="container-x py-4 md:py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-14">
          {items.map((item) => (
            <li
              key={item}
              className="text-[11px] md:text-[12px] uppercase tracking-wider-3 text-espresso font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
