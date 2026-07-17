import { motion } from 'framer-motion';

const reels = [
  { id: 1, caption: 'Everyday gold' },
  { id: 2, caption: 'Layered elegance' },
  { id: 3, caption: 'Gift ready' },
  { id: 4, caption: 'Huggie vibes' },
  { id: 5, caption: 'Date night' },
  { id: 6, caption: 'Minimal luxe' },
];

export default function UGCSection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-surfaceAlt">
      <div className="container-velmora mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-velmora-gold text-xs tracking-ultra uppercase mb-3">@velmorajewelry</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-base">Worn by You</h2>
        </motion.div>
      </div>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-4">
        {reels.map((reel, i) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
          >
            {/* Placeholder bg */}
            <div className="absolute inset-0 bg-gradient-to-b from-velmora-cream to-velmora-warm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-velmora-gold/20" />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-white text-lg italic">{reel.caption}</p>
            </div>

            {/* Hover ring */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-velmora-gold transition-colors duration-300 rounded-lg" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
