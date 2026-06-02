import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const MANIFESTO_ITEMS = [
  {
    id: 'manifesto-roots',
    number: '01',
    title: 'Roots',
    body: 'Every human civilization grew from the soil. We carry the memory of forests in our DNA.',
    imgDesc: 'tree roots forest floor macro close-up',
    titleId: 'manifesto-roots-title',
    descId: 'manifesto-roots-desc',
    imgId: 'manifesto-img-roots-e5f6',
  },
  {
    id: 'manifesto-breath',
    number: '02',
    title: 'Breath',
    body: 'The oxygen in your lungs was exhaled by a tree. We breathe each other into existence.',
    imgDesc: 'misty forest morning light fog atmosphere',
    titleId: 'manifesto-breath-title',
    descId: 'manifesto-breath-desc',
    imgId: 'manifesto-img-breath-g7h8',
  },
  {
    id: 'manifesto-pattern',
    number: '03',
    title: 'Pattern',
    body: 'Fractals in ferns echo the branching of neurons. Nature repeats its wisdom at every scale.',
    imgDesc: 'fern fractal spiral macro botanical pattern',
    titleId: 'manifesto-pattern-title',
    descId: 'manifesto-pattern-desc',
    imgId: 'manifesto-img-pattern-i9j0',
  },
];

function ManifestoCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="group flex flex-col md:flex-row gap-8 items-start"
    >
      {/* Image */}
      <div className="img-zoom w-full md:w-64 h-48 md:h-56 flex-shrink-0 rounded-sm overflow-hidden">
        <img
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.descId}] [${item.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.title}
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0.85)' }}
        />
        <span id={item.descId} className="hidden">{item.imgDesc}</span>
      </div>

      {/* Text */}
      <div className="flex-1 pt-2">
        <div className="flex items-baseline gap-4 mb-3">
          <span className="section-label text-[#D4B896]">{item.number}</span>
          <h3
            id={item.titleId}
            className="text-2xl md:text-3xl text-[#2C2C2C]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {item.title}
          </h3>
        </div>
        <p className="text-[#5A5A5A] leading-relaxed text-base max-w-md">
          {item.body}
        </p>
        <div className="mt-4 w-12 h-px bg-[#A8C5A0] group-hover:w-24 transition-all duration-500" />
      </div>
    </motion.div>
  );
}

export default function HomeManifesto() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-36 px-6 md:px-12 bg-[#F5EDE3]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4"
          >
            The Manifesto
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl text-[#2C2C2C] max-w-2xl leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            We are not separate from nature.{' '}
            <em className="text-[#4A6741]">We are nature.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-[#5A5A5A] max-w-xl leading-relaxed"
          >
            Intertwined is a long-form photography project documenting the
            profound, often invisible connections between human communities and
            the ecosystems they inhabit.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="space-y-16">
          {MANIFESTO_ITEMS.map((item, i) => (
            <ManifestoCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/stories"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#4A6741] text-[#F5EDE3] text-sm tracking-widest uppercase hover:bg-[#6B8F5E] transition-colors duration-300"
          >
            Explore Global Stories
            <span>→</span>
          </Link>
          <Link
            to="/lab"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#4A6741] text-[#4A6741] text-sm tracking-widest uppercase hover:bg-[#4A6741] hover:text-[#F5EDE3] transition-all duration-300"
          >
            Enter The Lab
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
