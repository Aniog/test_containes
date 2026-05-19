const SectionHeader = ({ title, subtitle, action }) => (
  <div className="flex items-end justify-between mb-6">
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary">{title}</h2>
      {subtitle && <p className="text-text-muted text-sm mt-1">{subtitle}</p>}
    </div>
    {action && (
      <div className="flex-shrink-0 ml-4">{action}</div>
    )}
  </div>
);

export default SectionHeader;
