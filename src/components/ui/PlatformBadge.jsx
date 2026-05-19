import { platformBadgeStyles } from '../../data/mockData';

const PlatformBadge = ({ platform, size = 'sm' }) => {
  const style = platformBadgeStyles[platform] || 'bg-surface-elevated text-text-secondary border border-surface-border';
  const labels = {
    steam: 'Steam',
    epic: 'Epic',
    nintendo: 'Nintendo',
    playstation: 'PlayStation',
    xbox: 'Xbox',
  };

  return (
    <span className={`${style} ${size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1'} font-bold rounded uppercase tracking-wide`}>
      {labels[platform] || platform}
    </span>
  );
};

export default PlatformBadge;
