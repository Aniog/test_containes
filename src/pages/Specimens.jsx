import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Microscope } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SpecimenCard from '@/components/SpecimenCard';
import { SPECIMENS } from '@/data/specimens';

const CATEGORIES = ['All', 'Plant Histology', 'Protists', 'Human Cytology'];

export default function Specimens() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment pt-16">

      {/* ── Page header ──────────────────────────────────────── */}
      <section className="border-b border-silver/40 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="specimen-label mb-4">Biological Sciences — Microscopy Division</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ink leading-tight">
                  Specimen<br />
                  <span className="italic font-normal">Hub</span>
                </h1>
              </div>
              <p className="font-inter text-sm text-charcoal max-w-md leading-relaxed">
                A systematic compendium of microscopic specimens spanning plant histology,
                unicellular protists, and human cytological preparations. Each entry is
                accompanied by technical metadata and annotated terminology.
              </p>
            </div>
          </motion.div>

          {/* Category pills */}
          <motion.div
            className="flex flex-wrap gap-3 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full border border-silver/50 font-inter text-xs text-charcoal bg-white/30"
              >
                {cat}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Specimen entries (Z-pattern) ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col gap-28">
          {SPECIMENS.map((specimen, i) => (
            <div key={specimen.id}>
              <SpecimenCard specimen={specimen} reverse={i % 2 !== 0} />
              {i < SPECIMENS.length - 1 && (
                <hr className="ink-divider mt-28" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Classification table ─────────────────────────────── */}
      <section className="bg-ink py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="specimen-label text-ash mb-3">Reference Index</p>
            <h2 className="font-playfair text-3xl font-bold text-parchment">
              Specimen Classification Table
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  {['Specimen ID', 'Common Name', 'Latin Designation', 'Category', 'Magnification'].map((h) => (
                    <th key={h} className="text-left pb-4 pr-8 specimen-label text-ash text-[0.6rem]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPECIMENS.map((s, i) => (
                  <motion.tr
                    key={s.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <td className="py-4 pr-8 font-courier text-xs text-ash">{s.id}</td>
                    <td className="py-4 pr-8 font-playfair text-sm text-parchment font-semibold">{s.name}</td>
                    <td className="py-4 pr-8 font-inter text-xs text-graphite italic">{s.latinName.split('—')[0].trim()}</td>
                    <td className="py-4 pr-8">
                      <span className="px-3 py-1 rounded-full border border-white/10 font-inter text-xs text-ash">
                        {s.category}
                      </span>
                    </td>
                    <td className="py-4 font-courier text-xs text-ash">{s.magnification}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Footer note ──────────────────────────────────────── */}
      <footer className="border-t border-silver/40 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Microscope className="w-4 h-4 text-graphite" strokeWidth={1.5} />
            <span className="font-playfair text-sm font-semibold text-ink">MicroCosmos</span>
          </div>
          <p className="font-inter text-xs text-graphite">
            All specimens prepared and imaged by the Dept. of Biological Sciences.
          </p>
        </div>
      </footer>
    </div>
  );
}
