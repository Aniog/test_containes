import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Microscope, FlaskConical, BookOpen } from 'lucide-react';

const HERO_IMG =
  'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1800&q=80&con=20';

const features = [
  {
    icon: Microscope,
    title: 'Specimen Analysis',
    desc: 'Detailed morphological breakdowns of plant, animal, and protist specimens across magnification scales.',
  },
  {
    icon: FlaskConical,
    title: 'Digital Slide Archive',
    desc: 'A curated library of high-resolution histological preparations, each annotated with collector metadata.',
  },
  {
    icon: BookOpen,
    title: 'Laboratory Discourse',
    desc: 'Submit observations, queries, and field notes directly to the instructional team for peer review.',
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="bg-[#F2F0E9] min-h-screen">
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden flex items-center justify-center"
      >
        {/* Parallax image */}
        <motion.div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ y: imgY }}
        >
          <img
            src={HERO_IMG}
            alt="Radiolarian micrograph — high-contrast black and white"
            className="w-full h-full object-cover contrast-110"
            style={{ filter: 'contrast(1.15) brightness(0.88)' }}
          />
          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 30%, rgba(26,26,26,0.55) 100%)',
            }}
          />
        </motion.div>

        {/* Title card */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="glass-dark rounded-3xl px-10 py-10 max-w-2xl mx-auto"
            style={{ boxShadow: '0 8px 64px rgba(0,0,0,0.35)' }}
          >
            {/* Eyebrow */}
            <p
              className="text-[#C8C6BF] text-xs tracking-[0.35em] uppercase mb-4 font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Biology · Microscopy · Education
            </p>

            <h1
              className="text-white text-5xl md:text-6xl font-bold leading-tight mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Micro<span className="italic font-normal">Cosmos</span>
            </h1>
            <p
              className="text-[#C8C6BF] text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The Microscopic World
            </p>

            <p
              className="text-[#E0DED7] text-base leading-relaxed mb-8 max-w-md mx-auto"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              An academic platform for the rigorous study of microscopic life—
              from radiolarian symmetry to cellular ultrastructure.
            </p>

            <Link to="/specimens">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="glass-btn rounded-full px-8 py-3 text-white text-sm font-medium tracking-widest uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Begin Observation
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-5 h-5 text-white/60" />
          </motion.div>
          <span
            className="text-white/40 text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ── Intro strip ── */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#9E9E9E] text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Platform Overview
          </p>
          <h2
            className="text-[#1A1A1A] text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Laboratory Without Walls
          </h2>
          <p
            className="text-[#6B6B6B] text-base max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            MicroCosmos bridges the optical bench and the digital screen, providing
            instructors and students with a shared vocabulary for the invisible world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass rounded-2xl p-7 group hover:shadow-lg transition-shadow duration-300"
              style={{ boxShadow: '0 2px 20px rgba(26,26,26,0.06)' }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-[#F2F0E9]" />
              </div>
              <h3
                className="text-[#1A1A1A] text-lg font-semibold mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </h3>
              <p
                className="text-[#6B6B6B] text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Full-width specimen teaser ── */}
      <section className="relative overflow-hidden">
        <div className="relative h-72 md:h-96">
          <img
            src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1600&q=80"
            alt="Diatom colony under polarised light"
            className="w-full h-full object-cover"
            style={{ filter: 'contrast(1.2) brightness(0.75)' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-dark rounded-2xl px-10 py-8 text-center max-w-lg"
            >
              <p
                className="text-[#C8C6BF] text-xs tracking-[0.3em] uppercase mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Featured Specimen
              </p>
              <h3
                className="text-white text-2xl font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Diatom Colony
              </h3>
              <p
                className="text-[#C8C6BF] text-sm leading-relaxed mb-5"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                Bacillariophyta — siliceous cell walls of extraordinary geometric precision,
                photographed at 400× magnification under polarised illumination.
              </p>
              <Link to="/gallery">
                <button
                  className="glass-btn rounded-full px-6 py-2 text-white text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  View Gallery
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <footer className="py-10 px-6 border-t border-[#E0DED7]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[#9E9E9E] text-xs tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} MicroCosmos Educational Platform
          </p>
          <p
            className="text-[#C8C6BF] text-xs italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "The universe is under no obligation to make sense to you." — Neil deGrasse Tyson
          </p>
        </div>
      </footer>
    </div>
  );
}
