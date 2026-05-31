import { useEffect, useRef, useState } from "react";
import { Search, Filter } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { inventions } from "@/data/inventions";
import InventionCard from "@/components/museum/InventionCard";

const categories = ["All", ...new Set(inventions.map((inv) => inv.category))];

const MuseumPage = () => {
  const containerRef = useRef(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filtered = inventions.filter((inv) => {
    const matchesSearch =
      inv.name.toLowerCase().includes(search.toLowerCase()) ||
      inv.description.toLowerCase().includes(search.toLowerCase()) ||
      inv.inventor.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || inv.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-[#080c18]">
      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1629] to-[#080c18]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c084fc]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto text-center">
          <span className="text-[#c084fc] text-sm tracking-widest uppercase font-medium">
            The Collection
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mt-3 mb-4"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            The Museum of{" "}
            <span className="text-[#c084fc]">Impossible Inventions</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Browse our complete collection of {inventions.length} exhibits spanning
            four centuries of fictional innovation.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-[#080c18]/95 backdrop-blur-md border-b border-slate-700/40 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search inventions, inventors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0f1629] border border-slate-700/50 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#c084fc]/50 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <Filter className="w-4 h-4 text-slate-500 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                  activeCategory === cat
                    ? "bg-[#c084fc] text-[#080c18] border-[#c084fc] font-semibold"
                    : "bg-transparent text-slate-400 border-slate-700/50 hover:border-[#c084fc]/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3
                className="text-white text-xl font-semibold mb-2"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                No Inventions Found
              </h3>
              <p className="text-slate-400">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <>
              <p className="text-slate-500 text-sm mb-6">
                Showing {filtered.length} of {inventions.length} exhibits
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((invention) => (
                  <InventionCard key={invention.id} invention={invention} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default MuseumPage;
