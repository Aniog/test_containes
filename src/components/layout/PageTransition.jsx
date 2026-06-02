import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const pageTransition = {
  duration: 0.55,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={pageTransition}
      className="page-wrapper"
    >
      {children}
    </motion.div>
  );
}
