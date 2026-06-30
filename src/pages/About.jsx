import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="bg-velmora-cream pt-28 md:pt-36 pb-20 md:pb-32 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-velmora-deep"
        >
          Our Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-lg md:text-xl text-velmora-taupe leading-relaxed"
        >
          Velmora was founded on the belief that beautiful jewelry should feel
          effortless. We create demi-fine pieces for women who move through life
          with intention — pieces that transition from morning coffee to evening
          celebrations without missing a step.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-velmora-taupe leading-relaxed"
        >
          Every design begins with a sketch inspired by art, architecture, and
          the quiet details of everyday beauty. We use 18k gold plating on
          hypoallergenic bases, working with makers who share our commitment to
          quality and care.
        </motion.p>
      </div>
    </div>
  )
}
