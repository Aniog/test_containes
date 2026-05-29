import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/nav/Navbar'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit:    { opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
}

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-cosmic-black text-star-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </div>
  )
}
