import { ClipboardList } from 'lucide-react';

const TodoEmpty = ({ filter }) => {
  const messages = {
    All: { title: 'No tasks yet', sub: 'Add your first task above to get started.' },
    Active: { title: 'No active tasks', sub: 'All your tasks are completed!' },
    Completed: { title: 'No completed tasks', sub: 'Complete some tasks to see them here.' },
  };

  const { title, sub } = messages[filter] || messages.All;

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
        <ClipboardList className="w-8 h-8 text-slate-400" />
      </div>
      <p className="text-slate-600 font-semibold text-lg">{title}</p>
      <p className="text-slate-400 text-sm mt-1">{sub}</p>
    </div>
  );
};

export default TodoEmpty;
