import { ClipboardList } from 'lucide-react';

const EmptyState = ({ filter }) => {
  const messages = {
    all: { title: 'No tasks yet', sub: 'Add your first task above to get started.' },
    active: { title: 'All caught up!', sub: 'No active tasks remaining.' },
    completed: { title: 'Nothing completed yet', sub: 'Complete a task to see it here.' },
  };

  const { title, sub } = messages[filter] || messages.all;

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <ClipboardList className="w-12 h-12 text-slate-200 mb-3" />
      <p className="text-sm font-medium text-slate-400">{title}</p>
      <p className="text-xs text-slate-300 mt-1">{sub}</p>
    </div>
  );
};

export default EmptyState;
