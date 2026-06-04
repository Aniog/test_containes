import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../shared/ScrollReveal";

const sections = [
  {
    path: "/stories",
    label: "Global Stories",
    tagline: "Indigenous Worlds",
    desc: "Portraits of communities whose identity is inseparable from the land they inhabit.",
    color: "bg-forest-deep",
    textColor: "text-parchment",
    accent: "text-forest-light",
    number: "01",
  },
  {
    path: "/lab",
    label: "The Lab",
    tagline: "Science of Nature",
    desc: "Macro photography revealing the hidden architecture of the living world.",
    color: "bg-sky-deep",
    textColor: "text-parchment",
    accent: "text-sky-light",
    number: "02",
  },
];

export default function HomeNav() {
  return (
    <section className="py-24 bg-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <p className="font-dancing text-2xl text-skin-warm text-center mb-16 italic">
            "The clearest way into the Universe is through a forest wilderness."
            <span className="font-inter text-sm text-charcoal/40 not-italic block mt-2">
              — John Muir
            </span>
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((s, i) => (
            <ScrollReveal key={s.path} delay={i * 0.15}>
              <Link to={s.path} className="group block">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`${s.color} rounded-2xl p-10 lg:p-14 relative overflow-hidden`}
                >
                  {/* Background number */}
                  <span className="absolute top-6 right-8 font-playfair text-8xl font-bold opacity-10 text-white select-none">
                    {s.number}
                  </span>

                  <span className={`font-inter text-xs uppercase tracking-[0.3em] ${s.accent} block mb-4`}>
                    {s.tagline}
                  </span>
                  <h3 className={`font-playfair text-3xl lg:text-4xl ${s.textColor} mb-4 leading-tight`}>
                    {s.label}
                  </h3>
                  <p className={`font-inter text-sm ${s.textColor} opacity-70 leading-relaxed max-w-xs mb-8`}>
                    {s.desc}
                  </p>
                  <div className={`flex items-center gap-2 ${s.accent} font-inter text-sm font-medium`}>
                    <span>Explore</span>
                    <motion.span
                      animate={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
