const PageHeader = ({ label, title, subtitle }) => (
  <div className="pt-32 pb-16 px-6 bg-gray-900 text-center">
    <p className="text-orange-400 uppercase tracking-widest text-sm font-semibold mb-3">{label}</p>
    <h1
      className="text-white text-5xl md:text-6xl font-bold mb-4"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {title}
    </h1>
    {subtitle && (
      <p className="text-gray-400 text-lg max-w-xl mx-auto">{subtitle}</p>
    )}
  </div>
);

export default PageHeader;
