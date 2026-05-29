import { motion } from 'framer-motion'

const stats = [
  { value: '93B', label: 'Light-years', sub: '観測可能な宇宙の直径' },
  { value: '2T+', label: 'Galaxies', sub: '観測可能な宇宙内' },
  { value: '13.8B', label: 'Years Old', sub: '宇宙の年齢' },
  { value: '~70%', label: 'Dark Energy', sub: '宇宙のエネルギー密度' },
]

export default function StatsBar() {
  return (
    <section className="border-t border-b border-white/[0.06] bg-cosmic-void py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04]">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-cosmic-void px-8 py-10 flex flex-col gap-2"
          >
            <span className="font-mono text-3xl md:text-4xl font-light text-star-white tracking-tight">
              {stat.value}
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-nebula-light">
              {stat.label}
            </span>
            <span className="font-serif text-xs text-star-dim opacity-50 mt-1">
              {stat.sub}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
