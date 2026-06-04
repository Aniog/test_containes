import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-parchment py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-xs">
            <span className="font-dancing text-3xl text-skin-light block mb-3">
              Intertwined
            </span>
            <p className="font-inter text-sm text-forest-light leading-relaxed">
              A documentary photography project exploring the invisible threads
              that bind humanity to the natural world.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-inter text-xs uppercase tracking-widest text-forest-light mb-1">
              Explore
            </span>
            {[
              { path: "/", label: "The Connection" },
              { path: "/stories", label: "Global Stories" },
              { path: "/lab", label: "The Lab" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-inter text-sm text-parchment/80 hover:text-skin-light transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-inter text-xs uppercase tracking-widest text-forest-light mb-1">
              Project
            </span>
            <p className="font-inter text-sm text-parchment/60">
              © 2026 Intertwined
            </p>
            <p className="font-inter text-xs text-parchment/40">
              All images are protected works.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-forest-mid/30">
          <p className="font-dancing text-lg text-skin-warm/70 text-center italic">
            "We do not inherit the earth from our ancestors — we borrow it from our children."
          </p>
        </div>
      </div>
    </footer>
  );
}
