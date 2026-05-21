import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Microscope, BookOpen, Grid3X3, FlaskConical } from "lucide-react";

const HERO_SVG = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
  <defs>
    <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
    <radialGradient id="g1" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#e8e4d8"/><stop offset="100%" stop-color="#1a1a1a"/></radialGradient>
    <radialGradient id="g2" cx="30%" cy="40%" r="60%"><stop offset="0%" stop-color="#f2f0e9" stop-opacity="0.9"/><stop offset="100%" stop-color="#1a1a1a" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="800" fill="#1a1a1a"/>
  <rect width="1200" height="800" fill="url(#g1)" opacity="0.3"/>
  <!-- Radiolarian structure -->
  <g transform="translate(600,400)" opacity="0.9">
    <!-- Outer ring -->
    <circle cx="0" cy="0" r="280" fill="none" stroke="#e8e4d8" stroke-width="1.5" opacity="0.6"/>
    <circle cx="0" cy="0" r="240" fill="none" stroke="#c8c4b8" stroke-width="0.8" opacity="0.5"/>
    <circle cx="0" cy="0" r="180" fill="none" stroke="#e8e4d8" stroke-width="1.2" opacity="0.7"/>
    <circle cx="0" cy="0" r="120" fill="none" stroke="#c8c4b8" stroke-width="1" opacity="0.6"/>
    <circle cx="0" cy="0" r="60" fill="none" stroke="#e8e4d8" stroke-width="1.5" opacity="0.8"/>
    <circle cx="0" cy="0" r="20" fill="#e8e4d8" opacity="0.9"/>
    <!-- Radial spines -->
    ${Array.from({length: 36}, (_, i) => {
      const angle = (i * 10 * Math.PI) / 180;
      const x1 = Math.cos(angle) * 22;
      const y1 = Math.sin(angle) * 22;
      const x2 = Math.cos(angle) * 285;
      const y2 = Math.sin(angle) * 285;
      return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#c8c4b8" stroke-width="0.6" opacity="0.5"/>`;
    }).join('')}
    <!-- Lattice dots at intersections -->
    ${Array.from({length: 36}, (_, i) => {
      const angle = (i * 10 * Math.PI) / 180;
      return [60, 120, 180, 240].map(r => {
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.5" fill="#e8e4d8" opacity="0.7"/>`;
      }).join('');
    }).join('')}
    <!-- Secondary rings with pores -->
    ${Array.from({length: 24}, (_, i) => {
      const angle = (i * 15 * Math.PI) / 180;
      const x = Math.cos(angle) * 150;
      const y = Math.sin(angle) * 150;
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="none" stroke="#e8e4d8" stroke-width="1" opacity="0.6"/>`;
    }).join('')}
  </g>
  <!-- Noise overlay -->
  <rect width="1200" height="800" filter="url(#noise)" opacity="0.08"/>
  <!-- Vignette -->
  <radialGradient id="vig" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="transparent"/><stop offset="100%" stop-color="#1a1a1a" stop-opacity="0.7"/></radialGradient>
  <rect width="1200" height="800" fill="url(#vig)"/>
</svg>`)}`;

const features = [
  {
    icon: BookOpen,
    title: "Specimen Hub",
    description: "Detailed histological breakdowns of plant tissue, protists, and human cytology with annotated diagrams.",
    href: "/specimens",
    label: "Explore Specimens",
  },
  {
    icon: Grid3X3,
    title: "Slide Gallery",
    description: "A curated archive of high-resolution digital slides with magnification data and collector's notes.",
    href: "/gallery",
    label: "Browse Slides",
  },
  {
    icon: FlaskConical,
    title: "Lab Notes",
    description: "Submit observations, questions, and feedback directly to the laboratory instructor.",
    href: "/contact",
    label: "Open Lab Book",
  },
];

const stats = [
  { value: "340+", label: "Specimen Records" },
  { value: "12", label: "Taxonomic Orders" },
  { value: "400×", label: "Max Magnification" },
  { value: "1892", label: "Est. Collection" },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-parchment min-h-screen">
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background micrograph */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          <img
            src={HERO_SVG}
            alt="Radiolarian micrograph — intricate siliceous skeleton under polarized light"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-parchment/60" />
        </motion.div>

        {/* Hero title card */}
        <motion.div
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 shadow-2xl shadow-black/20">
            <p className="section-label mb-4 text-parchment/80">
              Dept. of Biological Sciences · Laboratory Series IV
            </p>
            <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-parchment leading-tight mb-4">
              Micro<span className="italic font-normal">Cosmos</span>
            </h1>
            <p className="font-serif italic text-parchment/80 text-lg md:text-xl mb-2">
              The Microscopic World
            </p>
            <div className="w-16 h-px bg-parchment/40 mx-auto my-6" aria-hidden="true" />
            <p className="font-sans text-parchment/70 text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto">
              An immersive educational archive of microscopic life — from the siliceous lattices
              of radiolarians to the intricate histology of vascular plant tissue.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/specimens"
                className="inline-flex items-center gap-2 px-6 py-3 bg-parchment text-ink font-sans font-medium text-sm rounded-xl hover:bg-white transition-colors duration-200"
              >
                Start Observation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 glass-btn text-parchment font-sans font-medium text-sm"
              >
                <Microscope className="w-4 h-4" />
                View Slide Archive
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-parchment/60"
          aria-hidden="true"
        >
          <span className="section-label text-parchment/50 text-[10px]">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-ink py-10 px-6" aria-label="Collection statistics">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-serif font-bold text-3xl md:text-4xl text-parchment mb-1">
                {stat.value}
              </p>
              <p className="section-label text-parchment/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 px-6 max-w-6xl mx-auto" aria-label="Platform features">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Navigate the Platform</p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mb-4">
            Three Chambers of Study
          </h2>
          <p className="font-sans text-charcoal text-base max-w-xl mx-auto leading-relaxed">
            Each section of MicroCosmos is designed to deepen your understanding of
            microscopic biology through observation, analysis, and inquiry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="glass-dark p-8 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-ink/10 flex items-center justify-center mb-6 group-hover:bg-ink/20 transition-colors">
                  <Icon className="w-5 h-5 text-ink" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif font-semibold text-xl text-ink mb-3">
                  {feat.title}
                </h3>
                <p className="font-sans text-charcoal text-sm leading-relaxed mb-6">
                  {feat.description}
                </p>
                <Link
                  to={feat.href}
                  className="inline-flex items-center gap-2 text-sm font-sans font-medium text-ink border-b border-lightgray hover:border-ink transition-colors pb-0.5"
                >
                  {feat.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Quote / Divider ── */}
      <section className="py-20 px-6 bg-ink/[0.04] border-y border-lightgray/50">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-serif italic text-2xl md:text-3xl text-ink leading-relaxed mb-6">
            "The microscope reveals a universe of forms as varied and as beautiful
            as those which the telescope discloses in the heavens."
          </p>
          <footer className="section-label">
            — Christian Gottfried Ehrenberg, 1838
          </footer>
        </motion.blockquote>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="section-label mb-4">Begin Your Study</p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mb-6">
            Ready to Observe?
          </h2>
          <p className="font-sans text-charcoal leading-relaxed mb-8">
            Enter the Specimen Hub to begin your guided exploration of microscopic
            organisms, tissue sections, and cellular architecture.
          </p>
          <Link
            to="/specimens"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-parchment font-sans font-medium rounded-xl hover:bg-charcoal transition-colors duration-200"
          >
            Enter Specimen Hub
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-lightgray/50 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Microscope className="w-4 h-4 text-midgray" strokeWidth={1.5} />
            <span className="font-serif text-midgray text-sm">
              MicroCosmos · Dept. of Biological Sciences
            </span>
          </div>
          <p className="section-label text-[10px]">
            © {new Date().getFullYear()} · Educational Use Only · All Micrographs Archived
          </p>
        </div>
      </footer>
    </div>
  );
}
