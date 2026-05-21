import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Microscope, FlaskConical, BookOpen } from 'lucide-react';

const STATS = [
  { value: '247', label: 'Catalogued Specimens' },
  { value: '18', label: 'Specimen Categories' },
  { value: '1000×', label: 'Max Magnification' },
  { value: '4', label: 'Research Collectors' },
];

const FEATURES = [
  {
    icon: Microscope,
    title: 'Specimen Hub',
    description: 'Detailed histological breakdowns of plant, protist, and human tissue specimens with annotated terminology.',
    path: '/specimens',
  },
  {
    icon: BookOpen,
    title: 'Slide Gallery',
    description: 'A curated archive of high-resolution digital slides with full metadata and collector\'s notes.',
    path: '/gallery',
  },
  {
    icon: FlaskConical,
    title: 'Lab Notes',
    description: 'Submit observations, request specimens, or correspond with the curatorial team.',
    path: '/contact',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-parchment">
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background micrograph */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1800&q=90&sat=-100&con=30"
            alt="Radiolarian micrograph"
            className="w-full h-full object-cover img-bw"
          />
          {/* Gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-parchment/30 via-transparent to-parchment/80" />
          <div className="absolute inset-0 bg-parchment/20" />
        </div>

        {/* Hero card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative z-10 glass-card px-10 py-12 max-w-2xl mx-6 text-center shadow-2xl shadow-black/15"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono-data text-ash mb-4"
          >
            Educational Platform · Est. MMXXIV
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="font-playfair text-5xl lg:text-7xl font-bold text-ink leading-tight mb-3"
          >
            Micro
            <span className="italic font-normal">Cosmos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="font-playfair text-lg text-charcoal italic mb-6"
          >
            The Microscopic World
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="text-charcoal text-sm leading-relaxed mb-8 max-w-md mx-auto"
          >
            A rigorous educational archive of histological specimens, protist morphology,
            and human cytology — rendered in exquisite monochrome detail.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <button
              onClick={() => navigate('/specimens')}
              className="glass-btn px-8 py-3.5 text-ink font-medium flex items-center justify-center gap-2 group"
            >
              Start Observation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/gallery')}
              className="px-8 py-3.5 rounded-full border border-ink/20 text-ink text-sm font-medium hover:bg-ink/5 transition-colors"
            >
              Browse Gallery
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono-data text-ash text-xs">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-ash to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-y border-silver/30 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {STATS.map(({ value, label }) => (
              <motion.div key={label} variants={itemVariants} className="text-center">
                <p className="font-playfair text-3xl lg:text-4xl font-bold text-ink mb-1">{value}</p>
                <p className="font-mono-data text-ash">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-xl"
          >
            <p className="font-mono-data text-ash mb-3">Platform Modules</p>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-ink leading-tight">
              Instruments of<br />
              <span className="italic font-normal">Inquiry</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {FEATURES.map(({ icon: Icon, title, description, path }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => navigate(path)}
                className="glass-card p-8 cursor-pointer group hover:shadow-xl hover:shadow-black/8 transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-ink/8 flex items-center justify-center mb-6 group-hover:bg-ink/15 transition-colors">
                  <Icon className="w-5 h-5 text-ink" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-ink mb-3">{title}</h3>
                <p className="text-charcoal text-sm leading-relaxed mb-6">{description}</p>
                <div className="flex items-center gap-2 text-ash text-sm font-medium group-hover:text-ink transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Full-width specimen teaser ── */}
      <section className="py-24 px-6 lg:px-10 bg-ink/3">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=900&q=85&sat=-100&con=25"
                alt="Plant histology cross section"
                className="w-full h-full object-cover img-bw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="font-mono-data text-white/80 text-xs bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  Quercus robur · 100× · Safranin/Fast Green
                </span>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="font-mono-data text-ash mb-4">Featured Specimen</p>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-ink leading-tight mb-6">
                The Architecture<br />
                <span className="italic font-normal">of Living Wood</span>
              </h2>
              <p className="text-charcoal leading-relaxed mb-4">
                Transverse section through the secondary xylem of <em>Quercus robur</em>,
                revealing the characteristic arrangement of vessel elements, ray parenchyma,
                and libriform fibres.
              </p>
              <p className="text-charcoal leading-relaxed mb-8">
                The annual growth rings demarcate earlywood from latewood with exceptional
                clarity — a testament to the precision of differential staining techniques
                developed over a century of botanical microscopy.
              </p>
              <button
                onClick={() => navigate('/specimens')}
                className="glass-btn px-7 py-3 text-ink font-medium flex items-center gap-2 group w-fit"
              >
                View All Specimens
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-px h-16 bg-silver/50 mx-auto mb-8" />
            <blockquote className="font-playfair text-2xl lg:text-3xl text-ink italic leading-relaxed mb-6">
              "The microscope reveals a universe as vast and complex as the cosmos itself —
              hidden within the span of a single cell."
            </blockquote>
            <cite className="font-mono-data text-ash not-italic">
              — Robert Hooke, Micrographia, 1665
            </cite>
            <div className="w-px h-16 bg-silver/50 mx-auto mt-8" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
