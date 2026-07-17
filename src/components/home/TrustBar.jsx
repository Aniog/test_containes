const promises = [
  { id: "shipping", label: "Free Worldwide Shipping" },
  { id: "returns", label: "30-Day Returns" },
  { id: "gold", label: "18K Gold Plated" },
  { id: "hypo", label: "Hypoallergenic" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Our promises"
      className="border-y border-hairline bg-ivory/80"
    >
      <div className="container-content">
        <ul className="flex flex-col items-stretch divide-y divide-hairline text-center md:flex-row md:divide-x md:divide-y-0">
          {promises.map((p) => (
            <li
              key={p.id}
              className="flex-1 px-4 py-4 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink md:py-5 md:text-[0.75rem]"
            >
              {p.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrustBar;
