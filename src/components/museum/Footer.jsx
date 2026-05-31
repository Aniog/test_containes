import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#080c18] border-t border-slate-700/40 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⚗️</span>
              <span
                className="text-[#4ade80] font-bold text-lg tracking-widest uppercase"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Fictum
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The world's only museum dedicated to inventions that never existed —
              and perhaps never should have.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-[#4ade80] text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/museum", label: "The Museum" },
                { to: "/about", label: "About" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div>
            <h4
              className="text-[#4ade80] text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Curator's Note
            </h4>
            <blockquote className="text-slate-400 text-sm italic leading-relaxed border-l-2 border-[#4ade80]/40 pl-4">
              "Every impossible invention was once just an idea that hadn't found
              the right universe yet."
            </blockquote>
            <p className="text-slate-600 text-xs mt-2">— The Fictum Curatorial Board</p>
          </div>
        </div>

        <div className="border-t border-slate-700/40 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © 2087 Fictum Museum of Impossible Inventions. All exhibits are fictional.
          </p>
          <p className="text-slate-600 text-xs">
            No actual physics were harmed in the making of this museum.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
