import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Microscope, BookOpen, FlaskConical } from 'lucide-react';

const stats = [
  { value: '400×', label: 'Max Magnification' },
  { value: '12', label: 'Specimen Classes' },
  { value: '80+', label: 'Digital Slides' },
  { value: '1665', label: 'Est. Hooke\'s Micrographia' },
];

const features = [
  {
    icon: Microscope,
    title: 'Specimen Taxonomy',
    desc: 'Systematic classification of plant histology, protists, and human cytology specimens.',
  },
  {
    icon: BookOpen,
    title: 'Annotated Slides',
    desc: 'High-resolution digital slides with collector\'s notes and magnification metadata.',
  },
  {
    icon: FlaskConical,
    title: 'Laboratory Reports',
    desc: 'Submit observations and inquiries through our structured academic feedback system.',
  },
];

export default function Home() {
  return (
    <div className="bg-parchment min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1800&q=80&sat=-100"
            alt="Radiolarian diatom micrograph"
            className="w-full h-full object-cover img-bw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-black/30 via-ink-black/20 to-ink-black/60" />
        </div>

        {/* Centered Glass Title Card */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="relative z-10 text-center px-8 py-10 md:px-14 md:py-14 rounded-3xl
            bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl
            max-w-2xl mx-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-white/70 mb-4"
          >
            Dept. of Biological Sciences · Laboratory Series
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-3"
          >
            Micro
            <span className="italic font-normal">Cosmos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="font-serif italic text-white/75 text-lg md:text-xl mb-8"
          >
            The Microscopic World
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="font-sans text-sm text-white/65 leading-relaxed mb-10 max-w-md mx-auto"
          >
            An academic platform for the systematic study of microscopic life—
            from radiolarian symmetry to cellular ultrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              to="/specimens"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                bg-white/25 backdrop-blur-md border border-white/30 text-white
                font-sans font-semibold text-sm hover:bg-white/40
                transition-all duration-300 group"
            >
              Start Observation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                bg-ink-black/50 backdrop-blur-md border border-white/15 text-white/90
                font-sans font-semibold text-sm hover:bg-ink-black/70
                transition-all duration-300"
            >
              View Slide Gallery
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] uppercase tracking-widest text-white/50">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-ink-black py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-serif text-3xl font-bold text-parchment">{s.value}</div>
              <div className="font-sans text-xs uppercase tracking-widest text-ink-light mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink-light mb-4">
              About This Platform
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink-black leading-tight mb-6">
              Where Science Meets
              <span className="italic font-normal block">Aesthetic Precision</span>
            </h2>
            <p className="font-sans text-base text-ink-mid leading-relaxed mb-5">
              MicroCosmos is a curated educational resource designed for biology students,
              researchers, and instructors who seek a rigorous yet visually compelling
              approach to microscopy.
            </p>
            <p className="font-sans text-base text-ink-mid leading-relaxed mb-8">
              Each specimen is documented with scientific accuracy, accompanied by
              high-resolution digital slides and detailed collector's annotations—
              bridging the tradition of 19th-century natural history illustration
              with contemporary digital pedagogy.
            </p>
            <Link
              to="/specimens"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold
                text-ink-black border-b border-ink-black pb-0.5 hover:text-ink-mid
                hover:border-ink-mid transition-colors duration-300 group"
            >
              Explore Specimen Hub
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80&sat=-100"
                alt="Microscope laboratory"
                className="w-full h-full object-cover img-bw"
              />
            </div>
            {/* Floating annotation card */}
            <div className="absolute -bottom-5 -left-5 glass-card rounded-2xl p-4 shadow-lg max-w-[200px]">
              <div className="font-mono text-xs text-ink-light mb-1">Specimen ID</div>
              <div className="font-serif text-sm font-semibold text-ink-black">Coscinodiscus sp.</div>
              <div className="font-mono text-xs text-ink-mid mt-1">400× · Phase Contrast</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 px-6 bg-parchment-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink-light mb-3">
              Platform Modules
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink-black">
              Three Pillars of Study
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="glass-card rounded-2xl p-8 hover:bg-white/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-ink-black/8 flex items-center justify-center mb-5
                  group-hover:bg-ink-black/12 transition-colors">
                  <f.icon className="w-5 h-5 text-ink-charcoal" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink-black mb-3">{f.title}</h3>
                <p className="font-sans text-sm text-ink-mid leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Micrograph ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1600&q=80&sat=-100"
            alt="Diatom micrograph"
            className="w-full h-[480px] object-cover img-bw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-black/70 via-ink-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div className="max-w-lg">
              <p className="font-mono text-xs text-white/60 uppercase tracking-widest mb-3">
                Featured Specimen · Plate XII
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                Diatom Frustule
                <span className="italic font-normal block text-white/80">Navicula radiosa</span>
              </h2>
              <p className="font-sans text-sm text-white/65 leading-relaxed mb-7 max-w-sm">
                Siliceous cell wall exhibiting bilateral symmetry and intricate
                striae patterns. Brightfield illumination, 1000× oil immersion.
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                  bg-white/20 backdrop-blur-md border border-white/25 text-white
                  font-sans font-semibold text-sm hover:bg-white/35 transition-all duration-300 group"
              >
                View in Gallery
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-ink-black py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-parchment/10 flex items-center justify-center">
              <Microscope className="w-4 h-4 text-parchment/70" strokeWidth={1.5} />
            </div>
            <div>
              <div className="font-serif text-sm font-semibold text-parchment/90">MicroCosmos</div>
              <div className="font-sans text-[10px] text-ink-light uppercase tracking-widest">
                The Microscopic World
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="font-sans text-xs text-ink-light hover:text-parchment/80 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p className="font-sans text-xs text-ink-light text-center md:text-right">
            © 2026 MicroCosmos · Dept. of Biological Sciences
          </p>
        </div>
      </footer>
    </div>
  );
}
