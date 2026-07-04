const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <div className="bg-cream border-y border-hairline">
      <div className="container-x py-3.5">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-y-2 gap-x-6">
          {items.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-2 label-cap text-muted"
            >
              <span className="w-1 h-1 rounded-full bg-gold" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
