const STATS = [
  { value: "600+", label: "Verified suppliers in our network" },
  { value: "8", label: "China product hubs covered" },
  { value: "24h", label: "Average response time" },
  { value: "1.2%", label: "Average defect rate on inspected orders" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-brand-line bg-white">
      <div className="container-x py-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-3xl sm:text-4xl font-bold text-brand-ink tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-brand-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
